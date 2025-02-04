import { useContext, useState } from "react";
import ChamarUsuario from "../../components/usuario/mostrarusuario/MostrarUsuario";
import { AuthContext } from "../../context/AuthContext";

function Usuario() {
  const { usuariolog } = useContext(AuthContext);
  const [mostrarUsuario, setMostrarUsuario] = useState(true);

  const handleClick = () => {
    setMostrarUsuario(!mostrarUsuario);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-corVerdeFundo to-corVerdeClaro p-6 flex flex-col justify-center items-center">
      {/* Card de exibição do usuário */}
      <div className="bg-white bg-opacity-90 rounded-xl shadow-md p-6 w-full max-w-lg mx-auto transition-transform duration-500 hover:scale-105">
        {mostrarUsuario && <ChamarUsuario />}
      </div>

      {/* Botão para exibir ou ocultar informações */}
      <div className="mt-6">
        <button
          onClick={handleClick}
          className="bg-corVerde text-white px-6 py-2 rounded-full shadow-md hover:bg-corVerdeEscuro transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          <span className="font-medium text-sm">
            {mostrarUsuario ? "Ocultar Conta" : "Visualizar Conta"}
          </span>
        </button>
      </div>
    </div>
  );
}

export default Usuario;
