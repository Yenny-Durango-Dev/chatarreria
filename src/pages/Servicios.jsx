import React from "react";
import { Truck, Recycle, Package } from "lucide-react";

function Servicios() {
  const servicios = [
    {
      titulo: "Compra de chatarra",
      emoji: "🏗️",
      desc: "Hierro, cobre, aluminio, bronce y más. Pagamos los mejores precios del mercado.",
      icon: <Recycle size={40} className="text-[#986F31]" />, // dorado
    },
    {
      titulo: "Venta de materiales reciclados",
      emoji: "🔩",
      desc: "Materiales procesados y listos para reutilizar en nuevas industrias.",
      icon: <Package size={40} className="text-[#D4D3CE]" />, // gris claro
    },
    {
      titulo: "Recolección a domicilio",
      emoji: "🚛",
      desc: "Vamos hasta tu ubicación para recoger tu chatarra. Rápido, fácil y seguro.",
      icon: <Truck size={40} className="text-[#4c7ead]" />, // azul grisáceo
    },
  ];

  return (
    <section
      id="servicios"
      className="bg-gradient-to-b from-[#303030] via-[#1E1E1E] to-[#303030] py-16 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Título */}
        <h1
          className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent 
                     bg-gradient-to-r from-[#D4D3CE] via-[#986F31] to-[#273848] drop-shadow-lg"
        >
          ⚙️ Nuestros Servicios
        </h1>
        <p className="mt-4 text-lg text-[#D4D3CE] max-w-3xl mx-auto">
          En{" "}
          <span className="font-semibold text-[#986F31]">
            Chatarrería La Paz
          </span>{" "}
          ofrecemos soluciones rápidas, confiables y responsables para reciclar
          y aprovechar los metales.
        </p>

        {/* Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {servicios.map((s, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#273848] to-[#303030] border border-[#986F31]/40 
                         rounded-2xl p-6 shadow-lg hover:shadow-[#986F31]/40 
                         transition transform hover:-translate-y-2 hover:scale-105"
            >
              <div className="flex justify-center text-5xl">{s.emoji}</div>
              <div className="flex justify-center mt-3 transition-transform duration-300 hover:rotate-6">
                {s.icon}
              </div>
              <h2 className="text-xl font-bold text-[#D4D3CE] mt-4">
                {s.titulo}
              </h2>
              <p className="text-[#D4D3CE]/80 mt-3">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Servicios;
