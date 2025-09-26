function Nosotros() {
  return (
    <section id="nosotros" className="py-24 bg-white text-[#333]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Título */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-16 text-[#2E7D32] drop-shadow-md leading-snug">
          ⚙️ Sobre Nosotros
        </h1>

        {/* Texto descriptivo */}
        <p className="mb-8 max-w-4xl mx-auto text-2xl md:text-3xl text-[#444] leading-relaxed">
          En{" "}
          <span className="font-bold text-[#ff0000]">
            Chatarrería Los Puentes
          </span>{" "}
          contamos con más de{" "}
          <strong className="text-[#2E7D32]">10 años de experiencia</strong>{" "}
          en el reciclaje de metales. Nuestro compromiso es con el{" "}
          <span className="text-[#2E7D32] font-semibold">medio ambiente</span>,
          ofreciendo precios justos y un servicio confiable.
        </p>
        <p className="mb-20 max-w-4xl mx-auto text-2xl md:text-3xl text-[#555] leading-relaxed">
          Somos una empresa familiar en Medellín que nació con la misión de dar
          un segundo uso a los metales y reducir el impacto ambiental. Hoy seguimos
          creciendo gracias a la confianza de nuestros clientes y al trabajo honesto
          que nos caracteriza.
        </p>

        {/* Tarjetas en columna */}
        <div className="flex flex-col items-center gap-10">
          {/* Card 1 */}
          <div className="bg-[#2E7D32] w-full max-w-3xl p-12 rounded-3xl shadow-2xl text-white hover:scale-105 hover:shadow-[#FFD600]/50 transition">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#FFD600]">
              🌱 Responsabilidad
            </h2>
            <p className="text-xl md:text-2xl">
              Reciclamos metales cuidando el planeta.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#2E7D32] w-full max-w-3xl p-12 rounded-3xl shadow-2xl text-white hover:scale-105 hover:shadow-[#FFD600]/50 transition">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#FFD600]">
              💰 Transparencia
            </h2>
            <p className="text-xl md:text-2xl">
              Precios claros y competitivos siempre.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#2E7D32] w-full max-w-3xl p-12 rounded-3xl shadow-2xl text-white hover:scale-105 hover:shadow-[#FFD600]/50 transition">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#FFD600]">
              🚛 Servicio
            </h2>
            <p className="text-xl md:text-2xl">
              Recolección a domicilio rápida y segura.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nosotros;
