import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Nevera from "../assets/nevera.png";
import Lavadora from "../assets/lavadora.png";
import Portatil from "../assets/portatil.png";
import Televisor from "../assets/televisor.png";
import Electrodomesticos from "../assets/electrodomesticos.png";
import Metales from "../assets/metales.png";
import Construccion from "../assets/construccion.png";
import Cobre from "../assets/cobre.png";
import Aluminio from "../assets/aluminio.png";
import Hierro from "../assets/hierro.png";

const materialesExtra = [
  { nombre: "Neveras y Congeladores", img: Nevera, descripcion: "Para chatarra y reciclaje" },
  { nombre: "Lavadoras", img: Lavadora, descripcion: "Equipos que ya no funcionan" },
  { nombre: "Computadores y Portátiles", img: Portatil, descripcion: "Compramos equipos viejos y dañados" },
  { nombre: "Televisores", img: Televisor, descripcion: "Recibimos todo tipo de televisores" },
  { nombre: "Cobre, Bronce y Aluminio", img: Metales, descripcion: "Metales valiosos para reciclar" },
  { nombre: "Motores Eléctricos", img: Electrodomesticos, descripcion: "De electrodomésticos, bombas, etc." },
  { nombre: "Material de Patio y Construcción", img: Construccion, descripcion: "Andamios, tubería metálica, serchas y más" }
];

function Precios() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === materialesExtra.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => setIndex((prev) => (prev === 0 ? materialesExtra.length - 1 : prev - 1));
  const nextSlide = () => setIndex((prev) => (prev === materialesExtra.length - 1 ? 0 : prev + 1));

  return (
    <section id="precios" className="py-20 bg-gray-200 text-[#333]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Título */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 text-[#2E7D32] drop-shadow-md leading-snug">
          💰 Precios
        </h1>

        <p className="mb-16 max-w-3xl mx-auto text-lg sm:text-2xl md:text-3xl text-[#444] leading-relaxed">
          Los precios de los metales varían según el mercado. Contáctanos por WhatsApp y te damos una cotización clara y ajustada de lo que quieras vender.
        </p>

        {/* Cards en grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Cobre */}
          <div
            className="relative rounded-md shadow-2xl text-white overflow-hidden hover:scale-105 transition"
            style={{ backgroundImage: `url(${Cobre})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative p-8 sm:p-12 z-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#FFD600]">🟠 Cobre</h2>
              <p className="text-lg sm:text-xl font-medium">Precio según material</p>
            </div>
          </div>

          {/* Aluminio */}
          <div
            className="relative rounded-md shadow-2xl text-white overflow-hidden hover:scale-105 transition"
            style={{ backgroundImage: `url(${Aluminio})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative p-8 sm:p-12 z-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#FFD600]">🔵 Aluminio</h2>
              <p className="text-lg sm:text-xl font-medium">Precio según material</p>
            </div>
          </div>

          {/* Hierro */}
          <div
            className="relative rounded-md shadow-2xl text-white overflow-hidden hover:scale-105 transition"
            style={{ backgroundImage: `url(${Hierro})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative p-8 sm:p-12 z-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#FFD600]">⚫ Hierro</h2>
              <p className="text-lg sm:text-xl font-medium">Precio según material</p>
            </div>
          </div>
        </div>

        {/* Carrusel */}
        <div className="mt-20 relative w-full mx-auto">
          <div className="relative overflow-hidden rounded-md shadow-2xl h-[60vh] md:h-[75vh] lg:h-[80vh]">
            {materialesExtra.map((item, i) => (
              <img
                key={i}
                src={item.img}
                alt={item.nombre}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"
                  }`}
              />
            ))}

            {/* Texto con degradado */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end items-center text-center p-6 sm:p-10">
              <h4 className="text-2xl sm:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                {materialesExtra[index].nombre}
              </h4>
              <p className="text-lg sm:text-2xl text-white drop-shadow">
                {materialesExtra[index].descripcion}
              </p>
            </div>
          </div>

          {/* Flechas más sutiles */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/40 text-white p-2 sm:p-3 rounded-full hover:bg-black/60 transition"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/40 text-white p-2 sm:p-3 rounded-full hover:bg-black/60 transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Botón final */}
        <a
          href="https://wa.me/573042034373?text=Hola!%20Quiero%20una%20cotización%20de%20materiales"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-16 bg-[#248a1a] text-white px-8 sm:px-12 py-4 sm:py-6 rounded-md font-bold shadow-lg hover:scale-105 transition cursor-pointer text-lg sm:text-2xl"
        >
          Solicitar Cotización 📩
        </a>
      </div>
    </section>
  );
}

export default Precios;
