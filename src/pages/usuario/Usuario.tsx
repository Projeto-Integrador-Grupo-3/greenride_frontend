import { useContext, useState } from "react";
import ChamarUsuario from "../../components/usuario/mostrarusuario/MostrarUsuario";
import { AuthContext } from "../../context/AuthContext";


function Usuario() {
  const { usuariolog } = useContext(AuthContext);
  const foto = usuariolog.foto;


  const [mostrarusuario, setMostrarUsuario] = useState(true);


  const handleClick = () => {
    setMostrarUsuario(!mostrarusuario);
  };


  return (
    <div className="min-h-64 bg-gradient-to-b from-corVerdeFundo to-corVerdeClaro p-8">


      <div className="bg-white bg-opacity-80 rounded-3xl shadow-xl p-8 max-w-2xl mx-auto mt-20 transform transition-all duration-500 hover:scale-105 text-center">
       
        {mostrarusuario && <ChamarUsuario />}
      </div>


      <div className="text-center mt-10">
        <button
          onClick={handleClick}
          className="bg-corVerde text-white px-8 py-2 rounded-full shadow-lg hover:bg-corVerdeEscuro transition-all duration-300 ease-in-out transform hover:scale-110"
        >
          <span className="font-semibold text-pretty">{mostrarusuario ? "Ocultar Conta" : "Visualizar Conta"}</span>
        </button>
      </div>
    </div>
  );
}


export default Usuario;
