import React from "react";

const Sobre = () => {
  return (
    <div className="relative bg-primary-300 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://your-image-url.com/sustainable-background.jpg')", 
        }}
      ></div>
      <div className="relative py-16 sm:py-24 px-6 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-corVerdeClaroMaisClaro">
            Transforme sua viagem. Transforme o planeta.
          </h2>
          <p className="text-lg font-medium text-white mt-4 max-w-3xl mx-auto">
            A GreenRide é a plataforma de caronas sustentáveis que conecta pessoas
            preocupadas com o meio ambiente, oferecendo viagens mais verdes, mais
            acessíveis e mais inteligentes. Junte-se à nossa missão e faça a diferença.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white text-gray-900 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-green-600 mb-4">Nossa Missão</h3>
            <p className="text-base font-light mb-6">
              Nosso objetivo é reduzir o impacto ambiental das viagens diárias.
              Ao conectar motoristas e passageiros, promovemos a redução de
              emissão de carbono, economizando energia e melhorando a qualidade do
              ar nas cidades.
            </p>
            <a
              href="#"
              className="text-green-600 font-semibold hover:text-green-700 underline"
            >
              Saiba mais sobre nosso impacto
            </a>
          </div>

          <div className="bg-white text-gray-900 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-green-600 mb-4">Nossa Visão</h3>
            <p className="text-base font-light mb-6">
              Acreditamos que pequenas ações podem gerar grandes mudanças. Com o
              GreenRide, queremos criar um futuro mais sustentável, onde todos
              possam contribuir para um ambiente mais limpo, economizando
              combustível e utilizando transporte de forma mais inteligente.
            </p>
            <a
              href="#"
              className="text-green-600 font-semibold hover:text-green-700 underline"
            >
              Junte-se ao movimento verde
            </a>
          </div>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Conheça nossa equipe</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <img
                src="https://ik.imagekit.io/machadofatima/Fitness/IMG_2876.webp"
                alt="Fátima Machado"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h4 className="text-primary-500 font-semibold">Fátima Machado</h4>
              <p className="text-gray-500">Product Owner</p>
              
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <img
                src="https://ik.imagekit.io/machadofatima/Fitness/IMG_2850.webp"
                alt="Kauê Oliveira"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h4 className="text-primary-500 font-semibold">Kauê Oliveira</h4>
              <p className="text-gray-500">Tester</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <img
                src="https://ik.imagekit.io/machadofatima/Fitness/Perfil.webp"
                alt="Tiago Alves"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h4 className="text-primary-500 font-semibold">Tiago Alves</h4>
              <p className="text-gray-500">Developer</p>
              
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <img
                src="https://ik.imagekit.io/machadofatima/Fitness/WhatsApp_Image_2024-12-17_at_15.53.34.webp"
                alt="Daffne Vieira"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h4 className="text-primary-500 font-semibold">Daffne Vieira</h4>
              <p className="text-gray-500">Developer</p>
              
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <img
                src="https://ik.imagekit.io/machadofatima/Fitness/IMG-20241004-WA0019.webp"
                alt="Thalita Alves"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h4 className="text-primary-500 font-semibold">Thalita Alves</h4>
              <p className="text-gray-500">Developer</p>
              
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <img
                src="https://ik.imagekit.io/machadofatima/Fitness/IMG_2977_2.webp"
                alt="João Vitor Bispo"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h4 className="text-primary-500 font-semibold">João Vitor Bispo</h4>
              <p className="text-gray-500">Developer</p>
            </div>
          </div>
        </div>
      </div>l
    </div>
  );
};

export default Sobre;