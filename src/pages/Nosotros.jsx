function Nosotros() {
  return (
    <section id="nosotros" className="py-16 bg-white text-[#333]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Título */}
        <h1 className="text-4xl font-extrabold mb-10 text-[#2E7D32] drop-shadow-md">
          ⚙️ Sobre Nosotros
        </h1>

        {/* Texto descriptivo */}
        <p className="mb-6 max-w-3xl mx-auto text-lg text-[#444]">
          En{" "}
          <span className="font-semibold text-[#FFD600]">
            Chatarrería Los Puentes
          </span>{" "}
          contamos con más de{" "}
          <strong className="text-[#2E7D32]">10 años de experiencia</strong>{" "}
          en el reciclaje de metales. Nuestro compromiso es con el{" "}
          <span className="text-[#2E7D32] font-semibold">medio ambiente</span>,
          ofreciendo precios justos y un servicio confiable.
        </p>
        <p className="mb-12 max-w-3xl mx-auto text-lg text-[#555]">
          Somos una empresa familiar en Medellín que nació con la misión de dar
          un segundo uso a los metales y reducir el impacto ambiental. Hoy seguimos
          creciendo gracias a la confianza de nuestros clientes y al trabajo honesto
          que nos caracteriza.
        </p>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#2E7D32] p-6 rounded-md shadow-lg text-white hover:scale-105 hover:shadow-[#FFD600]/50 transition">
            <h2 className="text-xl font-semibold mb-3 text-[#FFD600]">
              🌱 Responsabilidad
            </h2>
            <p>Reciclamos metales cuidando el planeta.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#2E7D32] p-6 rounded-md shadow-lg text-white hover:scale-105 hover:shadow-[#FFD600]/50 transition">
            <h2 className="text-xl font-semibold mb-3 text-[#FFD600]">
              💰 Transparencia
            </h2>
            <p>Precios claros y competitivos siempre.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#2E7D32] p-6 rounded-md shadow-lg text-white hover:scale-105 hover:shadow-[#FFD600]/50 transition">
            <h2 className="text-xl font-semibold mb-3 text-[#FFD600]">
              🚛 Servicio
            </h2>
            <p>Recolección a domicilio rápida y segura.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nosotros;
