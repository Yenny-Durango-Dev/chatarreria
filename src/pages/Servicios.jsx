import React from "react";
import Servicio1 from "../assets/servicio1.png";
import Servicio2 from "../assets/servicio2.png";
import Servicio3 from "../assets/servicio3.png";
import Servicio4 from "../assets/servicio4.png";

function Servicios() {
  return (
    <section id="servicios" className="bg-white py-24 px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Título */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#2E7D32] drop-shadow-md leading-snug mb-12">
          ⚙️ Nuestros Servicios
        </h1>

        <p className="text-2xl md:text-3xl text-[#444] max-w-4xl mx-auto leading-relaxed mb-20">
          Si buscas dónde vender chatarra en Antioquia, en{" "}
          <span className="font-semibold text-[#0f2ac5]">
            Chatarrería Los Puentes
          </span>{" "}
          estamos disponibles{" "}
          <span className="text-[#dd0000] font-semibold">
            los 7 días de la semana.
          </span>{" "}
          Retiramos neveras, lavadoras, televisores y reciclamos metales como
          cobre y aluminio con total confianza.
        </p>

        {/* Cards grandes en columna */}
        <div className="flex flex-col gap-16">
          {/* Card 1 */}
          <div
            className="relative min-h-[420px] rounded-3xl shadow-2xl text-white overflow-hidden hover:scale-[1.02] transition"
            style={{
              backgroundImage: `url(${Servicio1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative p-12 z-10 text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#87ff7c]">
                Compra de chatarra
              </h2>
              <p className="text-2xl md:text-3xl font-medium leading-relaxed">
                Adquirimos cobre, bronce, aluminio, plomo, radiadores, motores
                eléctricos, archivo y material de patio.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="relative min-h-[420px] rounded-3xl shadow-2xl text-white overflow-hidden hover:scale-[1.02] transition"
            style={{
              backgroundImage: `url(${Servicio2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative p-12 z-10 text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#87ff7c]">
                Compra de materiales de construcción
              </h2>
              <p className="text-2xl md:text-3xl font-medium leading-relaxed">
                Compramos tubería metálica, tacos, serchas, andamios,
                concretadoras, varillas y saldos industriales.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="relative min-h-[420px] rounded-3xl shadow-2xl text-white overflow-hidden hover:scale-[1.02] transition"
            style={{
              backgroundImage: `url(${Servicio3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative p-12 z-10 text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#87ff7c]">
                Venta de materiales reciclados
              </h2>
              <p className="text-2xl md:text-3xl font-medium leading-relaxed">
                Ofrecemos materiales reciclados y listos para ser reutilizados
                en nuevas industrias.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className="relative min-h-[420px] rounded-3xl shadow-2xl text-white overflow-hidden hover:scale-[1.02] transition"
            style={{
              backgroundImage: `url(${Servicio4})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative p-12 z-10 text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#87ff7c]">
                Recolección a domicilio
              </h2>
              <p className="text-2xl md:text-3xl font-medium leading-relaxed">
                Vamos hasta tu ubicación para recoger la chatarra. Rápido, fácil
                y seguro.
              </p>
            </div>
          </div>
        </div>

        {/* Botón final */}
        <a
          href="https://wa.me/573042034373?text=Hola!%20Quiero%20más%20información%20sobre%20sus%20servicios"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-20 bg-[#248a1a] text-white 
                     px-14 py-6 rounded-2xl font-bold shadow-lg 
                     text-3xl md:text-4xl
                     hover:scale-110 hover:shadow-[#2E7D32]/40 transition cursor-pointer"
        >
          Solicitar un Servicio 🚀
        </a>
      </div>
    </section>
  );
}

export default Servicios;
