import React from "react";
import Servicio1 from "../assets/servicio1.png";
import Servicio2 from "../assets/servicio2.png";
import Servicio3 from "../assets/servicio3.png";
import Servicio4 from "../assets/servicio4.png";

function Servicios() {
  return (
    <section id="servicios" className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#2E7D32] drop-shadow-md">
          ⚙️ Nuestros Servicios
        </h1>
        <p className="mt-4 text-lg text-[#444] max-w-3xl mx-auto">
          En{" "}
          <span className="font-semibold text-[#0f2ac5]">
            Chatarrería Los Puentes
          </span>{" "}
          trabajamos los{" "}
          <span className="text-[#dd0000] font-semibold">
            7 días de la semana
          </span>
          , ofreciendo soluciones rápidas, confiables y responsables para
          reciclar y aprovechar los metales.
        </p>
        <br />

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          <div
            className="relative min-h-[300px] rounded-xl shadow-lg text-white overflow-hidden hover:scale-105 transition"
            style={{
              backgroundImage: `url(${Servicio1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative m-6 sm:m-8 lg:m-10 z-10">
              <h2 className="text-xl font-semibold mb-3 text-[#87ff7c]">
                Compra de chatarra
              </h2>
              <p className="text-lg font-medium">
                Adquirimos cobre, bronce, aluminio, plomo, radiadores, motores
                eléctricos, archivo y material de patio.
              </p>
            </div>
          </div>

          <div
            className="relative min-h-[300px] rounded-xl shadow-lg text-white overflow-hidden hover:scale-105 transition"
            style={{
              backgroundImage: `url(${Servicio2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative m-6 sm:m-8 lg:m-10 z-10">
              <h2 className="text-xl font-semibold mb-3 text-[#87ff7c]">
                Compra de materiales de construcción
              </h2>
              <p className="text-lg font-medium">
                Compramos tubería metálica, tacos, serchas, andamios,
                concretadoras, varillas y saldos industriales.
              </p>
            </div>
          </div>

          <div
            className="relative min-h-[300px] rounded-xl shadow-lg text-white overflow-hidden hover:scale-105 transition"
            style={{
              backgroundImage: `url(${Servicio3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative m-6 sm:m-8 lg:m-10 z-10">
              <h2 className="text-xl font-semibold mb-3 text-[#87ff7c]">
                Venta de materiales reciclados
              </h2>
              <p className="text-lg font-medium">
                Ofrecemos materiales reciclados y listos para ser reutilizados
                en nuevas industrias.
              </p>
            </div>
          </div>

          <div
            className="relative min-h-[300px] rounded-xl shadow-lg text-white overflow-hidden hover:scale-105 transition"
            style={{
              backgroundImage: `url(${Servicio4})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative m-6 sm:m-8 lg:m-10 z-10">
              <h2 className="text-xl font-semibold mb-3 text-[#87ff7c]">
                Recolección a domicilio
              </h2>
              <p className="text-lg font-medium">
                Vamos hasta tu ubicación para recoger la chatarra. Rápido, fácil
                y seguro.
              </p>
            </div>
          </div>
        </div>

        {/* Botón */}
        <a
          href="https://wa.me/573017910078?text=Hola!%20Quiero%20más%20información%20sobre%20sus%20servicios"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-12 bg-[#248a1a] text-[#ffffff] 
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
