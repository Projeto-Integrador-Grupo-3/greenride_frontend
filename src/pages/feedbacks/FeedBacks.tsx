import React from "react";

const feedbacks = [
  {
    name: "Geandro Araújo - Passageiro",
    message:
      "Viajar com a Greenride foi uma experiência incrível! Motoristas responsáveis e uma viagem sem emissão de carbono. Não poderia pedir por mais!",
    location: "São Paulo, SP",
    avatar: "https://media.discordapp.net/attachments/1333893639558135820/1336357181649322097/geandro.jpg?ex=67a3831c&is=67a2319c&hm=8a9652db15e28d101f3d08f97b58e60fb2a5be60a4f6599cdc740354d2db4a6d&=&format=webp&width=562&height=562", // Imagem fictícia
  },
  {
    name: "Lorena Belo - Passageiro",
    message:
      "A Greenride é minha escolha número um para transporte urbano. A sustentabilidade vem em primeiro lugar e me sinto bem contribuindo para o meio ambiente.",
    location: "São Paulo, SP",
    avatar: "https://media.discordapp.net/attachments/1333893639558135820/1336357181381021778/lorena.jpg?ex=67a3831c&is=67a2319c&hm=37402085e32904ff9aaac50d33e58f02fe9ccd22dac283a56bf3558412eb07ae&=&format=webp&width=562&height=562", // Imagem fictícia
  },
  {
    name: "Agostinho Carrara - Motorista",
    message:
      "Rapaz, esse GreenRide é coisa fina, viu? Econômico, sustentável e ainda deixa a gente andando no estilo… Aprovadíssimo!",
    location: "Rio de Janeiro - RJ",
    avatar: "https://www.portaldoholanda.com.br/sites/default/files/imagecache/2020_noticia_fotogrande/portaldoholanda-922580-imagem-foto-1amazonas.jpg", // Imagem fictícia
  },
];

function FeedBacks() {
  return (
    <section className="mt-44">
      <h3 className="text-3xl text-corVerdeEscuro font-bold mb-6 text-center">
        O que nossos usuários dizem
      </h3>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {feedbacks.map((feedback, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg w-full md:w-1/3 flex flex-col items-center"
          >
            <img
              src={feedback.avatar}
              alt={`Avatar de ${feedback.name}`}
              className="w-20 h-20 rounded-full mb-4"
            />
            <p className="text-gray-700 text-sm text-center mb-4">
              {feedback.message}
            </p>
            <h4 className="text-corVerdeEscuro font-bold text-lg">
              {feedback.name}
            </h4>
            <span className="text-gray-500 text-sm">{feedback.location}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeedBacks;
