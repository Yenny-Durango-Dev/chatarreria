import React from "react";
import { Truck, Recycle, Package } from "lucide-react"; // íconos metálicos extra

function Servicios() {
  const servicios = [
    {
      titulo: "Compra de chatarra",
      emoji: "🏗️",
      desc: "Hierro, cobre, aluminio, bronce y más. Pagamos los mejores precios del mercado.",
      icon: <Recycle size={40} className="text-yellow-400" />,
    },
    {
      titulo: "Venta de materiales reciclados",
      emoji: "🔩",
      desc: "Materiales procesados y listos para reutilizar en nuevas industrias.",
      icon: <Package size={40} className="text-green-400" />,
    },
    {
      titulo: "Recolección a domicilio",
      emoji: "🚛",
      desc: "Vamos hasta tu ubicación para recoger tu chatarra. Rápido, fácil y seguro.",
      icon: <Truck size={40} className="text-blue-400" />,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-black py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent 
                       bg-gradient-to-r from-gray-100 via-gray-400 to-gray-200 drop-shadow-lg">
          ⚙️ Nuestros Servicios
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
          En <span className="font-semibold text-yellow-400">Chatarrería Euklidez</span>
          {" "}ofrecemos soluciones rápidas, confiables y responsables para reciclar y aprovechar los metales.
        </p>

        {/* Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {servicios.map((s, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-600 
                         rounded-2xl p-6 shadow-lg hover:shadow-yellow-500/30 transition transform hover:-translate-y-2"
            >
              <div className="flex justify-center text-5xl">{s.emoji}</div>
              <div className="flex justify-center mt-3">{s.icon}</div>
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