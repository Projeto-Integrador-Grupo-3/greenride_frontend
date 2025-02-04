import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { buscar } from "../../../service/Service";
import Usuario from "../../../models/Usuario";

function ChamarUsuario() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState<Usuario>();
  const { usuariolog, handleLogout } = useContext(AuthContext);
  const token = usuariolog.token;
  const id = usuariolog.id;

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado!");
      navigate("/");
    }
  }, [token]);

  async function buscarPorId(id: string) {
    try {
      await buscar(`/usuario/${id}`, setUsuario, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (usuario?.id !== 0 && token !== "") {
      buscarPorId(id);
    }
  }, [id]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200 p-8">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden">
        {/* Cabeçalho esportivo com estilo de corrida */}
        <div className="bg-corVerde p-6 flex items-center justify-between relative">
          <div className="flex items-center space-x-4">
            <img
              className="rounded-full w-28 h-28 border-4 border-white shadow-lg"
              src={usuario?.foto}
              alt="Foto de perfil"
            />
            <div>
              <h1 className="text-4xl font-bold text-white">
                {usuario?.nome}
              </h1>
              <p className="text-lg text-gray-200">{usuario?.tipo}</p>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 text-9xl font-bold text-gray-100 opacity-20">
            🏎️
          </div>
        </div>

        {/* Seção com detalhes */}
        <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-100 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-corVerde">
              Informações do Usuário
            </h2>
            <p className="mt-4 text-lg">
              <strong>ID:</strong> {usuario?.id}
            </p>
            <p className="mt-2 text-lg">
              <strong>Email:</strong> {usuario?.usuario}
            </p>
            <p className="mt-2 text-lg">
              <strong>Tipo:</strong> {usuario?.tipo}
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <Link to={`/editarusuario/${usuario?.id}`}>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 text-lg">
                Editar Perfil
              </button>
            </Link>

            <Link to={`/deletarusuario/${usuario?.id}`}>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 text-lg">
                Deletar Conta
              </button>
            </Link>
          </div>
        </div>

        {/* Rodapé estilizado */}
        <div className="bg-corVerdeEscuro p-4 text-white text-center rounded-b-3xl">
          <p className="text-sm">&copy; 2025 Corridas Web. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
}

export default ChamarUsuario;
