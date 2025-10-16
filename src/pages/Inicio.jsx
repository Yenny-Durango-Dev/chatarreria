import { useState, useEffect } from "react";
import Chatarra1 from "../assets/img_chatarreria_16.webp";
import Chatarra2 from "../assets/img_chatarreria_17.webp";
import Chatarra3 from "../assets/img_chatarreria_18.webp";
import Chatarra4 from "../assets/img_chatarreria_19.webp";
import Chatarra5 from "../assets/img_chatarreria_20.webp";
import Chatarra6 from "../assets/img_chatarreria_21.webp";
import Chatarra7 from "../assets/img_chatarreria_22.webp";
import Chatarra8 from "../assets/img_chatarreria_23.webp";
import Chatarra9 from "../assets/img_chatarreria_15.webp";
import Chatarra10 from "../assets/img_chatarreria_25.webp";
import Chatarra11 from "../assets/img_chatarreria_26.webp";

const Inicio = () => {
  const imagenes = [
    Chatarra1,
    Chatarra2,
    Chatarra3,
    Chatarra4,
    Chatarra5,
    Chatarra6,
    Chatarra7,
    Chatarra8,
    Chatarra9,
    Chatarra10,
    Chatarra11,
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagenes.length);
    }, 5000); // cambia cada 5s
    return () => clearInterval(interval);
  }, [imagenes.length]);

  return (
    <section id="inicio" className="relative bg-white pt-24 sm:pt-28">
      {/* Fondo con carrusel */}
      <div className="absolute inset-0">
        {imagenes.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Chatarra ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Capa oscura para contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        {/* Título */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white drop-shadow-xl leading-snug max-w-5xl">
          ♻️ Reciclaje de Metales con Confianza
        </h1>

        {/* Texto */}
        <p className="mt-8 text-lg sm:text-2xl md:text-3xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
          En{" "}
          <span className="font-bold text-[#FFD600]">Chatarrería Los Puentes</span> 
          {" "}compramos y reciclamos metales como{" "}
          <span className="font-semibold text-[#FFD600]">cobre, bronce, aluminio, hierro</span>{" "}
          y electrodomésticos (neveras, computadores, lavadoras y más).  
          <br />
          <span className="text-[#FFD600] font-extrabold">Servicio 24/7 a domicilio</span>{" "}
          con precios justos y confianza.
        </p>

        {/* Botones */}
        <div className="mt-12 flex flex-col sm:flex-row gap-6">
          {/* Botón principal */}
          <a
            href="https://wa.me/573042034373?text=Hola,%20quiero%20una%20cotización%20de%20material"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2E7D32] text-white px-10 py-4 rounded-md font-bold text-xl sm:text-2xl 
                       shadow-lg hover:bg-[#FFD600] hover:text-black 
                       transform hover:scale-105 transition-all duration-300"
          >
            📲 Realizar venta
          </a>

          {/* Botón secundario */}
          <a
            href="#contacto"
            className="border-4 border-[#FFD600] text-[#FFD600] px-10 py-4 rounded-md 
                       font-bold text-xl sm:text-2xl shadow-lg 
                       hover:bg-[#FFD600] hover:text-black 
                       transform hover:scale-105 transition-all duration-300"
          >
            ⚡ Contacto rápido
          </a>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
