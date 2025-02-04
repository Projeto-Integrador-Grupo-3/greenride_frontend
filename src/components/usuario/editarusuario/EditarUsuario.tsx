import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Usuario from "../../../models/Usuario";
import { AuthContext } from "../../../context/AuthContext";
import { atualizar, buscar } from "../../../service/Service";
import { RotatingLines } from "react-loader-spinner";


function EditarUsuario() {


  const navigate = useNavigate();


  const [isLoading, setIsLoading] = useState<boolean>(false);


  const { id } = useParams<{ id: string }>();


  const { usuariolog, handleLogout } = useContext(AuthContext);
  const token = usuariolog.token;


  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    tipo:usuariolog.tipo,
    foto:'',
    senha:''
 
  });


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
    <div className="flex">
    <div className="w-2/4 mt-20 mb-5 pb-10 flex flex-col items-center justify-center mx-auto  bg-primary-300  rounded-lg">
            <h1 className="text-4xl text-center text-white font-bold my-8">
                Editar Conta
            </h1>




            {/* Verifica se está carregando o treino apenas quando há um ID */}
            {carregandoUsuario ? (
                <div className="text-center">Carregando Conta...</div> // Mensagem de carregamento
            ) : (
                <form className="w-4/5 items-center flex flex-col gap-4" onSubmit={atualizarUsuario}>
                    <div className="w-full flex flex-col justify-center items-center  gap-2">
                        <div className="w-4/5">
                          <label htmlFor="nome" className="p-4">Nome:</label>
                          <input
                              type="text"
                              placeholder="Nome"
                              name="nome"
                              className="border-2 border-slate-700 rounded p-2 w-4/5"
                              value={usuario?.nome}
                              onChange={atualizarEstado}
                        />
                        </div>


                        <div className="w-4/5">
                          <label htmlFor="foto" className="p-4">Foto:</label>
                          <input
                              type="text"
                              placeholder="Foto"
                              name="foto"
                              className="border-2 ml-3 border-slate-700 rounded p-2 w-4/5"
                              value={usuario.foto}
                              onChange={atualizarEstado}
                          />
                        </div>


                        <div className="w-4/5">
                          <label htmlFor="usuario" className="p-3">Usuario:</label>
                          <input
                              type="text"
                              placeholder="Usuario"
                              name="usuarios"
                              className="border-2 border-slate-700 rounded p-2 w-4/5"
                              value={usuario.usuario}
                              onChange={atualizarEstado}
                          />
                        </div>
                    </div>


                    <div className="flex justify-center gap-4">


                      <button>
                        <Link to='/home'  className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition duration-300">
                          Cancelar
                        </Link>
                      </button>


                      <button
                          className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
                          type="submit"
                      >
                          {isLoading ? (
                              <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="24" visible={true} />
                          ) : (
                              <span> Atualizar Conta</span>
                          )}
                      </button>
                    </div>
                </form>
            )}
        </div>
        </div>
  )
}


export default EditarUsuario
