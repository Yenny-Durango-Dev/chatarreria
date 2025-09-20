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

// Datos del carrusel
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

  // Cambiar slide cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === materialesExtra.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval); // limpiar intervalo al desmontar
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? materialesExtra.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === materialesExtra.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="precios" className="py-16 bg-gray-300 text-[#333]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Título */}
        <h1 className="text-4xl font-extrabold mb-10 text-[#2E7D32] drop-shadow-md">
          💰 Precios de Referencia
        </h1>

        <p className="mb-6 max-w-2xl mx-auto text-lg text-[#555]">
          Los precios de los metales varían según el mercado. Contáctanos por WhatsApp y te damos una cotización ajustada y al detalle de lo que quieras vender.
        </p>

        {/* Tarjetas de precios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-10">
          {/* Cobre */}
          <div
            className="relative rounded-xl shadow-lg text-white overflow-hidden hover:scale-105 transition"
            style={{ backgroundImage: `url(${Cobre})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative p-6 z-10">
              <h2 className="text-xl font-semibold mb-3 text-[#FFD600]">🟠 Cobre</h2>
              <p className="text-lg font-medium">Precio según material <br /> 📲 Solicita tu cotización</p>
            </div>
          </div>

          {/* Aluminio */}
          <div
            className="relative rounded-xl shadow-lg text-white overflow-hidden hover:scale-105 transition"
            style={{ backgroundImage: `url(${Aluminio})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative p-6 z-10">
              <h2 className="text-xl font-semibold mb-3 text-[#FFD600]">🔵 Aluminio</h2>
              <p className="text-lg font-medium">Precio según material <br /> 📲 Solicita tu cotización</p>
            </div>
          </div>

          {/* Hierro */}
          <div
            className="relative rounded-xl shadow-lg text-white overflow-hidden hover:scale-105 transition"
            style={{ backgroundImage: `url(${Hierro})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative p-6 z-10">
              <h2 className="text-xl font-semibold mb-3 text-[#FFD600]">⚫ Hierro</h2>
              <p className="text-lg font-medium">Precio según material <br /> 📲 Solicita tu cotización</p>
            </div>
          </div>
        </div>

        {/* Carrusel con auto-slide */}
        <div className="mt-10 relative w-full max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-xl shadow-lg relative h-[400px] md:h-[500px]">
            <img
              src={materialesExtra[index].img}
              alt={materialesExtra[index].nombre}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/60 text-white text-center">
              <h4 className="text-lg font-semibold">{materialesExtra[index].nombre}</h4>
              <p className="text-sm">{materialesExtra[index].descripcion}</p>
            </div>
          </div>

          {/* Flechas */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-[#2E7D32] text-white p-2 rounded-full shadow-md hover:bg-[#256826] cursor-pointer"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#2E7D32] text-white p-2 rounded-full shadow-md hover:bg-[#256826] cursor-pointer"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Botón */}
        <a
          href="https://wa.me/573017910078?text=Hola!%20Quiero%20una%20cotización%20de%20materiales"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 bg-[#248a1a] text-[#ffffff] px-6 py-3 rounded-md font-semibold shadow-lg hover:scale-105 transition cursor-pointer"
        >
          Solicitar Cotización 📩
        </a>
      </div>
    </section>
  );
}

export default Precios;
