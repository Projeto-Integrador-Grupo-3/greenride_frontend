import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Home() {
  const navigate = useNavigate();
  const { usuariolog } = useContext(AuthContext);
  const token = usuariolog.token;

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado");
      navigate("/");
    }
  }, [token]);

  return (
    <div className="flex justify-around items-center p-8 bg-corVerdeFundo min-h-screen">
      <div className="flex-1 flex flex-col items-start justify-center pl-16">
        {usuariolog.tipo !== "motorista" ? (
          <div>
            <h2 className="text-7xl font-bold mb-8 text-primary-500">
              Viaje com a greenride! Emissão de carbono zero!
            </h2>
            <Link
              to="/solicitarcorrida"
              className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
            >
              Solicitar Corrida
            </Link>
          </div>
        ) : (
          <div>
            <h2 className="text-4xl font-bold mb-8 text-gray-800">Bem-vindo, Motorista</h2>
            <Link
              to="/formmotorista"
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
              Finalize o seu cadastro
            </Link>
          </div>
        )}
      </div>

      <div className="flex-1 flex justify-end">
        <div className="w-9/12 max-w-2xl rounded-lg shadow-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0754267452926!2d-46.65342658447571!3d-23.565734367638155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1633023226789!5m2!1spt-BR!2sbr"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Home;