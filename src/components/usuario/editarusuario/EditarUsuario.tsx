import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Usuario from "../../../models/Usuario";
import { AuthContext } from "../../../context/AuthContext";
import { atualizar, buscar } from "../../../service/Service";
import { RotatingLines } from "react-loader-spinner";

function EditarUsuario() {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [usuario, setUsuario] = useState<Usuario>({ 
    id: 0, 
    nome: '', 
    usuario: '',
    foto:'',
    senha:''
  
  });

  const { id } = useParams<{ id: string }>();

  const { usuariolog, handleLogout } = useContext(AuthContext);
  const token = usuariolog.token;

  async function buscarUsuarioPorId(id: String) {
    try {
        await buscar(`/usuario/${id}`, setUsuario, {
            headers: { Authorization: token }
        });
    } catch (error: any) {
        if (error.toString().includes('403')) {
            handleLogout();
        }
    }
}

  useEffect(() => {
    if (token === '') {
        alert('Você precisa estar logado');
        navigate('/');
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
        buscarUsuarioPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
        ...usuario,
        [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate('/home');
  }


  async function atualizarUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    
        try {
            await atualizar(`/usuario`, usuario, setUsuario, {
                headers: { Authorization: token },
            });
            alert('Usuario atualizado com sucesso');
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout();
            } else {
                alert('Erro ao atualizar o Usuario');
            }
        }
    


    setIsLoading(false);
    retornar();
  }

  const carregandoUsuario = usuario.id === 0 && id !== undefined;

  return (
    <div className="container flex flex-col items-center justify-center mx-auto bg-red-100 m-3 p-10 rounded-lg">
            <h1 className="text-4xl text-center my-8">
                Atualizar Usuario
            </h1>


            {/* Verifica se está carregando o treino apenas quando há um ID */}
            {carregandoUsuario ? (
                <div className="text-center">Carregando Usuario...</div> // Mensagem de carregamento
            ) : (
                <form className="w-1/2 flex flex-col gap-4" onSubmit={atualizarUsuario}>
                    <div className="flex flex-col gap-2">
                        <div>
                          <label htmlFor="nome">Nome</label>
                          <input
                              type="text"
                              placeholder="Nome"
                              name="nome"
                              className="border-2 border-slate-700 rounded p-2"
                              value={usuario?.nome}
                              onChange={atualizarEstado}
                        />
                        </div>

                        <div>
                          <label htmlFor="foto">Foto</label>
                          <input
                              type="text"
                              placeholder="Foto"
                              name="foto"
                              className="border-2 border-slate-700 rounded p-2"
                              value={usuario.foto}
                              onChange={atualizarEstado}
                          />
                        </div>

                        <div>
                          <label htmlFor="usuario">Usuario</label>
                          <input
                              type="text"
                              placeholder="Usuario"
                              name="usuarios"
                              className="border-2 border-slate-700 rounded p-2"
                              value={usuario.usuario}
                              onChange={atualizarEstado}
                          />
                        </div>
                    </div>

                    <div>

                      <button>
                        <Link to='/chamarusuario'>
                          Cancelar
                        </Link>
                      </button>

                      <button
                          className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
                          type="submit"
                      >
                          {isLoading ? (
                              <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} />
                          ) : (
                              <span> Atualizar</span>
                          )}
                      </button>
                    </div>
                </form>
            )}
        </div>
  )
}

export default EditarUsuario