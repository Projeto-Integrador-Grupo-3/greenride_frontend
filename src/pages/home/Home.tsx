import { ReactNode, useContext, useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";

function Home() {

  const navigate = useNavigate()

  const { usuariolog } = useContext(AuthContext);
  const token = usuariolog.token;

  useEffect(() => {
      if (token === '') {
          alert('Você precisa estar logado');
          navigate('/');
      }
  }, [token]);  

  console.log(usuariolog);

 
  return (
    
    <div>
      {usuariolog.tipo !== 'motorista' ?
        <div>
          <h2>Home</h2>
          <Link to='/usuario'>
          <p>Visualizar Perfil</p>
          </Link>

          <Link to='/solicitarcorrida'>
          <p>Solicitar Corrida</p>
          </Link>
            
        </div>
      :
        <div>
          <h2>Home</h2>

          <Link to='/formmotorista'>
            <p>Finalize o seu cadastro</p>
          </Link>

      </div>
  }
    </div>

  )
}

export default Home

