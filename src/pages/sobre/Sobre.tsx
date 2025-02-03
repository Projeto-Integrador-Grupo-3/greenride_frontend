function Sobre() {
    const developers = [

        { name: 'Fátima Machado', role: 'Product Owner', image: 'https://ik.imagekit.io/machadofatima/Fitness/IMG_2876.webp' },
        { name: 'Kauê Oliveira', role: 'Quality Assurance', image: 'https://ik.imagekit.io/machadofatima/Fitness/IMG_2850.webp' },
        { name: 'Thalita Alves', role: 'Developer', image: 'https://ik.imagekit.io/machadofatima/Fitness/IMG-20241004-WA0019.webp' },
        { name: 'João Vitor Bispo', role: 'Developer', image: 'https://ik.imagekit.io/machadofatima/Fitness/IMG_2977_2.webp' },
        { name: 'Daffne Vieira', role: 'Developer', image: 'https://ik.imagekit.io/machadofatima/Fitness/WhatsApp_Image_2024-12-17_at_15.53.34.webp' },
        { name: 'Tiago Alves', role: 'Developer', image: 'https://ik.imagekit.io/machadofatima/Fitness/Perfil.webp' },
    ];
  
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24 bg-primary-900"> {/* Fundo verde escuro */}
          {/* Container Principal */}
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-12">
            {/* Texto Descritivo */}
            <div className="lg:w-2/3 space-y-6">
            
              <p className="text-lg text-primary-100">
                Bem-vindo à <strong className="text-primary-300">greenride</strong>, a sua nova maneira de viajar de forma sustentável, econômica e conectada. Nosso aplicativo foi desenvolvido com o propósito de transformar a mobilidade urbana, oferecendo uma solução inteligente para quem busca compartilhar trajetos e reduzir o impacto ambiental.
              </p>
              <p className="text-lg text-primary-100">
                No <strong className="text-primary-300">GreenRide</strong>, conectamos passageiros a motoristas que estão indo para o mesmo destino, promovendo caronas compartilhadas e eficientes. Nosso objetivo é diminuir o número de veículos nas ruas, reduzir o congestionamento e, principalmente, contribuir para a diminuição da emissão de carbono, tornando as cidades mais limpas e habitáveis.
              </p>
              <p className="text-lg text-primary-100">
                Acreditamos que pequenas mudanças no dia a dia podem gerar grandes impactos. Ao optar por uma carona no <strong className="text-primary-300">GreenRide</strong>, você não apenas economiza nos custos de viagem, mas também faz parte de um movimento consciente em prol do meio ambiente e da mobilidade sustentável.
              </p>
              <p className="text-lg text-primary-100">
                Junte-se a nós e faça parte dessa revolução verde. Com a <strong className="text-primary-300">GreenRide</strong>, cada viagem é uma oportunidade de cuidar do planeta e de tornar a mobilidade urbana mais acessível para todos.
              </p>
              <h3 className="text-2xl font-semibold text-white mt-6">Viaje com a GreenRide. Emissão de carbono zero.</h3>
            </div>
    
            {/* Imagem Representativa */}
            <div className="lg:w-1/3">
              <img
                src="https://example.com/sustentavel-image.jpg" // Substitua pelo link da imagem relevante
                alt="Mundo Sustentável"
                className="w-full h-auto rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
    
          {/* Seção de Desenvolvedores */}
          <div className="mt-20">
            <h2 className="text-4xl font-extrabold text-center text-primary-300 mb-12">nosso time 💪 </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {developers.map((developer, index) => (
                <div key={index} className="flex flex-col items-center text-center bg-primary-100 text-primary-900 p-6 rounded-xl shadow-xl transition-transform duration-300 hover:scale-105">
                  <img src={developer.image} alt={developer.name} className="w-40 h-40 rounded-full mb-6 shadow-lg" />
                  <h3 className="text-xl font-semibold">{developer.name}</h3>
                  <p className="text-base text-primary-500">{developer.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    
    export default Sobre;