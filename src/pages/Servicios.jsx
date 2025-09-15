import React from "react";
import { Truck, Recycle, Package, Wrench } from "lucide-react";

function Servicios() {
  const servicios = [
    {
      titulo: "Compra de chatarra",
      emoji: "🏗️",
      desc: "Adquirimos cobre, bronce, aluminio, plomo, radiadores, motores eléctricos, archivo y material de patio.",
      icon: <Recycle size={40} className="text-[#2E7D32]" />,
    },
    {
      titulo: "Compra de materiales de construcción",
      emoji: "🛠️",
      desc: "Compramos tubería metálica, tacos, serchas, andamios, concretadoras, varillas y saldos industriales.",
      icon: <Wrench size={40} className="text-[#FFD600]" />,
    },
    {
      titulo: "Venta de materiales reciclados",
      emoji: "🔩",
      desc: "Ofrecemos materiales reciclados y listos para ser reutilizados en nuevas industrias.",
      icon: <Package size={40} className="text-[#555]" />,
    },
    {
      titulo: "Recolección a domicilio",
      emoji: "🚛",
      desc: "Vamos hasta tu ubicación para recoger la chatarra. Rápido, fácil y seguro.",
      icon: <Truck size={40} className="text-[#2E7D32]" />,
    },
  ];

  return (
    <section id="servicios" className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#2E7D32] drop-shadow-md">
          ⚙️ Nuestros Servicios
        </h1>
        <p className="mt-4 text-lg text-[#444] max-w-3xl mx-auto">
          En{" "}
          <span className="font-semibold text-[#2E7D32]">
            Chatarrería Los Puentes
          </span>{" "}
          trabajamos los{" "}
          <span className="text-[#FFD600] font-semibold">7 días de la semana</span>, 
          ofreciendo soluciones rápidas, confiables y responsables para reciclar y aprovechar los metales.
        </p>

        {/* Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {servicios.map((s, index) => (
            <div
              key={index}
              className="bg-[#F8F8F8] border border-[#DDD] rounded-2xl p-6 shadow-lg 
                         hover:shadow-[#FFD600]/40 transition transform hover:-translate-y-2 hover:scale-105"
            >
              <div className="flex justify-center text-5xl">{s.emoji}</div>
              <div className="flex justify-center mt-3 transition-transform duration-300 hover:rotate-6">
                {s.icon}
              </div>
              <h2 className="text-xl font-bold text-[#2E7D32] mt-4">
                {s.titulo}
              </h2>
              <p className="text-[#555] mt-3">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Botón */}
        <a
          href="https://wa.me/573128136299"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-12 bg-[#FFD600] text-[#2E7D32] 
                     px-6 py-3 rounded-md font-semibold shadow-lg 
                     hover:scale-105 hover:shadow-[#2E7D32]/40 transition cursor-pointer"
        >
          Solicitar un Servicio 🚀
        </a>
      </div>
    </section>
  );
}

export default Servicios;
