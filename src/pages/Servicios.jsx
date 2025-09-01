import React from "react";
import { Truck, Recycle, Package } from "lucide-react";

function Servicios() {
  const servicios = [
    {
      titulo: "Compra de chatarra",
      emoji: "🏗️",
      desc: "Hierro, cobre, aluminio, bronce y más. Pagamos los mejores precios del mercado.",
      icon: <Recycle size={40} className="text-[#EBBE62]" />,
    },
    {
      titulo: "Venta de materiales reciclados",
      emoji: "🔩",
      desc: "Materiales procesados y listos para reutilizar en nuevas industrias.",
      icon: <Package size={40} className="text-[#9A9FA3]" />,
    },
    {
      titulo: "Recolección a domicilio",
      emoji: "🚛",
      desc: "Vamos hasta tu ubicación para recoger tu chatarra. Rápido, fácil y seguro.",
      icon: <Truck size={40} className="text-[#CC744D]" />,
    },
  ];

  return (
    <section id="servicios" className="bg-gradient-to-b from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent 
                       bg-gradient-to-r from-[#C7C7C7] via-[#EBBE62] to-[#9A9FA3] drop-shadow-lg">
          ⚙️ Nuestros Servicios
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
          En <span className="font-semibold text-[#EBBE62]">Chatarrería Euklidez</span>{" "}
          ofrecemos soluciones rápidas, confiables y responsables para reciclar y aprovechar los metales.
        </p>

        {/* Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {servicios.map((s, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-600 
                         rounded-2xl p-6 shadow-lg hover:shadow-[#EBBE62]/40 
                         transition transform hover:-translate-y-2 hover:scale-105"
            >
              <div className="flex justify-center text-5xl">{s.emoji}</div>
              <div className="flex justify-center mt-3 transition-transform duration-300 hover:rotate-6">
                {s.icon}
              </div>
              <h2 className="text-xl font-bold text-gray-100 mt-4">{s.titulo}</h2>
              <p className="text-gray-300 mt-3">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Servicios;
