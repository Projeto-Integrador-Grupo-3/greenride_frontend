import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import ModalMotorista from "../../components/motorista/modalmotorista/ModalMotorista";
import ModalCorrida from "../../components/corrida/modalcorrida/ModalCorrida";
import FeedBacks from "../feedbacks/FeedBacks";

function Home() {
  const navigate = useNavigate();
  const { usuariolog } = useContext(AuthContext);
  const token = usuariolog.token;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado");
      navigate("/");
    }
  }, [token]);

  return (
    <div className="min-h-screen bg-corVerdeFundo p-8">
      <header className="fixed top-0 left-0 w-full z-10 bg-white shadow-md">
      </header>

      <div className="pt-20 flex flex-col justify-center items-center">
        <div className="w-full max-w-6xl flex justify-between items-center mx-auto">
          <div className="w-1/2 pr-10">
            {usuariolog.tipo !== "motorista" ? (
              <div>
                <h2 className="text-5xl font-bold text-corVerdeClaroMaisClaro mb-6 leading-tight">
                  Viaje com a <span className="text-corVerdeEscuro">Greenride</span>!
                  <br />
                  Emissão de carbono zero.
                </h2>
                <p className="text-lg font-bold text-gray-700 mb-8">
                  Sua escolha sustentável para transporte urbano, conectando você a
                  motoristas responsáveis por um futuro mais verde.
                </p>
                <button
                  onClick={openModal}
                  className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
                >
                  Solicitar Corrida
                </button>
                <ModalCorrida isOpen={isModalOpen} onClose={closeModal} />
              </div>
            ) : (
              <div>
                <h2 className="text-4xl font-bold text-corVerdeEscuro mb-6">
                  Bem-vindo, Motorista!
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Complete seu cadastro e comece a fazer parte de uma rede que
                  promove corridas sustentáveis.
                </p>
                <button
                  onClick={openModal}
                  className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
                >
                  Finalize seu Cadastro
                </button>
                <ModalMotorista isOpen={isModalOpen} onClose={closeModal} />
              </div>
            )}
          </div>

          <div className="w-1/2 flex justify-end">
            <div className="w-full max-w-lg rounded-xl overflow-hidden shadow-2xl shadow-black">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0754267452926!2d-46.65342658447571!3d-23.565734367638155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1633023226789!5m2!1spt-BR!2sbr"
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-40 flex justify-center items-center p-16 bg-corVerdeFundo">
  <div className="max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-12">
    <div className="bg-corVerde p-8 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
      <h3 className="text-2xl font-bold text-white mb-4">Serviço Premium</h3>
      <p className="text-corVerdeClaroMaisClaro">
        Experimente exclusividade com nossos motoristas premium, oferecendo conforto e qualidade.
      </p>
    </div>
    <div className="bg-white p-8 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
      <h3 className="text-2xl font-bold text-corVerdeEscuro mb-4">Corridas Compartilhadas</h3>
      <p className="text-gray-600">
        Viaje de forma econômica e sustentável, compartilhando sua corrida com outros passageiros.
      </p>
    </div>
    <div className="bg-white p-8 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
      <h3 className="text-2xl font-bold text-corVerdeEscuro mb-4">Planos de Fidelidade</h3>
      <p className="text-gray-600">
        Aproveite descontos e benefícios exclusivos com nossos planos de fidelidade.
      </p>
    </div>
  </div>
</div>



      <FeedBacks />
      </div>
  </div>
  );
}

export default Home;
