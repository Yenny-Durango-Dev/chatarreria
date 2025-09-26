import { useState, useEffect } from "react";
import Chatarra1 from "../assets/chatarra1.png";
import Chatarra2 from "../assets/chatarra2.jpg";
import Chatarra3 from "../assets/chatarra3.jpg";
import Chatarra4 from "../assets/chatarra4.jpeg";
import Chatarra5 from "../assets/chatarra5.jpeg";
import Chatarra6 from "../assets/chatarra6.jpeg";
import Chatarra7 from "../assets/chatarra7.jpeg";
import Chatarra8 from "../assets/chatarra8.jpeg";
import Chatarra9 from "../assets/chatarra9.jpeg";
import Chatarra10 from "../assets/chatarra10.jpeg";
import Chatarra11 from "../assets/chatarra11.jpeg";

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
    }, 4000); // cambia cada 4 segundos
    return () => clearInterval(interval);
  }, [imagenes.length]);

  return (
    <section id="inicio" className="relative bg-white">
      {/* Imagen */}
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
        <div className="absolute inset-0 bg-black/45"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        {/* Título */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg leading-snug">
          Reciclaje de Metales con Confianza
        </h1>

        {/* Texto */}
        <p className="mt-8 text-xl sm:text-2xl md:text-3xl text-white max-w-3xl mx-auto leading-relaxed">
          En{" "}
          <span className="font-bold text-[#FFD600]">
            Chatarrería Los Puentes
          </span>{" "}
          compramos y reciclamos metales como cobre, bronce, aluminio, hierro y
          también electrodomésticos como neveras, computadores, lavadoras y más.{" "}
          <br />
          Servicio a domicilio los{" "}
          <span className="text-[#FFD600] font-extrabold">
            7 días de la semana, las 24 horas del día
          </span>{" "}
          con los mejores precios.
        </p>

        {/* Botones */}
        <div className="mt-10 flex justify-center gap-6 flex-wrap">
          {/* Botón principal */}
          <a
            href="https://wa.me/573017910078?text=Hola,%20quiero%20una%20cotización%20de%20material"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2E7D32] text-white px-8 py-4 rounded-lg font-bold text-xl sm:text-2xl 
                       shadow-lg hover:bg-[#FFD600] hover:text-black 
                       transition cursor-pointer"
          >
            📲 Realizar venta
          </a>

          {/* Botón secundario */}
          <a
            href="#contacto"
            className="border-4 border-[#FFD600] text-[#FFD600] px-8 py-4 
                       rounded-lg font-bold text-xl sm:text-2xl shadow-lg 
                       hover:bg-[#FFD600] hover:text-black 
                       transition cursor-pointer"
          >
            ⚡ Contacto rápido
          </a>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
