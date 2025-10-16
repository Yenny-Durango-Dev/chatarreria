import React from "react";
import Servicio1 from "../assets/img_chatarreria_1.webp";
import Servicio2 from "../assets/img_chatarreria_2.webp";
import Servicio3 from "../assets/img_chatarreria_3.webp";
import Servicio4 from "../assets/img_chatarreria_4.webp";

function Servicios() {
  const servicios = [
    {
      titulo: "Compra de chatarra",
      descripcion:
        "Adquirimos cobre, bronce, aluminio, plomo, radiadores, motores eléctricos, archivo y material de patio.",
      fondo: Servicio1,
    },
    {
      titulo: "Compra de materiales de construcción",
      descripcion:
        "Compramos tubería metálica, tacos, serchas, andamios, concretadoras, varillas y saldos industriales.",
      fondo: Servicio2,
    },
    {
      titulo: "Venta de materiales reciclados",
      descripcion:
        "Ofrecemos materiales reciclados y listos para ser reutilizados en nuevas industrias.",
      fondo: Servicio3,
    },
    {
      titulo: "Recolección a domicilio",
      descripcion:
        "Vamos hasta tu ubicación para recoger la chatarra. Rápido, fácil y seguro.",
      fondo: Servicio4,
    },
  ];

  return (
    <section id="servicios" className="bg-gradient-to-b from-white to-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#2E7D32] drop-shadow-md leading-snug mb-8">
          ⚙️ Nuestros Servicios
        </h1>

        <p className="text-lg md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-14">
          Si buscas dónde vender chatarra en Antioquia, en{" "}
          <span className="font-semibold text-[#d62828]">Chatarrería Los Puentes</span>{" "}
          estamos disponibles{" "}
          <span className="text-[#1198ad] font-semibold">los 7 días de la semana</span>. 
          Retiramos neveras, lavadoras, televisores y reciclamos metales como cobre y aluminio con total confianza.
        </p>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {servicios.map((s, i) => (
            <div
              key={i}
              className="relative h-[350px] md:h-[420px] rounded-2xl shadow-xl overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02]"
              style={{
                backgroundImage: `url(${s.fondo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay con gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

              {/* Texto */}
              <div className="absolute bottom-0 p-8 text-left text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#f4a261]">
                  {s.titulo}
                </h2>
                <p className="text-base md:text-lg leading-relaxed opacity-90">
                  {s.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Botón */}
        <a
          href="https://wa.me/573042034373?text=Hola!%20Quiero%20más%20información%20sobre%20sus%20servicios"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-14 bg-[#2E7D32] text-white 
                     px-10 py-4 rounded-md font-semibold shadow-lg 
                     text-lg md:text-xl tracking-wide
                     hover:bg-[#2ea434] hover:shadow-[#63eb6a]/40 transition cursor-pointer"
        >
          Solicitar un Servicio 🚀
        </a>
      </div>
    </section>
  );
}

export default Servicios;
