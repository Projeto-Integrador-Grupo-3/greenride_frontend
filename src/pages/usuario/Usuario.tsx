import { useContext, useState } from "react";
import ChamarUsuario from "../../components/usuario/mostrarusuario/MostrarUsuario";
//import { AuthContext } from "../../context/AuthContext";

function Usuario() {

  //const { usuariolog } = useContext(AuthContext)
  //const foto = usuariolog.foto;

  const [mostrarusuario, setMostrarUsuario] = useState(true);

  const handleClick = () => {
    setMostrarUsuario(!mostrarusuario);
  };

 

  return (
    <div>
        <header>
          <h2>Bem vindo à pagina de perfil</h2>
          <p>aqui você encontrará dados referente a sua conta</p>
        </header>

        
        <div>
          {mostrarusuario && <ChamarUsuario />}
        </div>

        <div>
          <button onClick={handleClick}>
          {mostrarusuario ? 'Ocultar Conta' : 'Visualizar Conta'}
          </button>
        </div>
    </div>
  )
}

export default Usuario