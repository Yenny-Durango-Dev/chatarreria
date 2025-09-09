function Nosotros() {
  return (
    <section
      id="nosotros"
      className="py-16 bg-[#303030] text-[#D4D3CE]"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Título */}
        <h1
          className="text-4xl font-extrabold mb-10 
                     bg-clip-text text-transparent 
                     bg-gradient-to-r from-[#986F31] to-[#D4D3CE] drop-shadow-lg"
        >
          ⚙️ Sobre Nosotros
        </h1>

        {/* Texto descriptivo */}
        <p className="text-[#D4D3CE] mb-6 max-w-3xl mx-auto">
          En{" "}
          <span className="font-semibold text-[#986F31]">
            Chatarrería La Paz
          </span>{" "}
          contamos con más de{" "}
          <strong className="text-[#986F31]">10 años de experiencia</strong>{" "}
          en el reciclaje de metales. Nuestro compromiso es con el{" "}
          <span className="text-[#986F31] font-semibold">medio ambiente</span>,
          ofreciendo precios justos y un servicio confiable.
        </p>
        <p className="text-[#D4D3CE] mb-12 max-w-3xl mx-auto">
          Somos una empresa familiar en Medellín que nació con la misión de dar
          un segundo uso a los metales y reducir el impacto ambiental. Hoy seguimos
          creciendo gracias a la confianza de nuestros clientes y al trabajo honesto
          que nos caracteriza.
        </p>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div
            className="bg-gradient-to-br from-[#273848] to-[#303030] 
                       p-6 rounded-md shadow-lg border border-[#986F31]/50 
                       hover:scale-105 hover:shadow-[#986F31]/30 transition"
          >
            <h2
              className="text-xl font-semibold mb-3 
                         bg-clip-text text-transparent 
                         bg-gradient-to-r from-[#986F31] to-[#D4D3CE]"
            >
              🌱 Responsabilidad
            </h2>
            <p className="text-[#D4D3CE]">
              Reciclamos metales cuidando el planeta.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="bg-gradient-to-br from-[#273848] to-[#303030] 
                       p-6 rounded-md shadow-lg border border-[#986F31]/50 
                       hover:scale-105 hover:shadow-[#986F31]/30 transition"
          >
            <h2
              className="text-xl font-semibold mb-3 
                         bg-clip-text text-transparent 
                         bg-gradient-to-r from-[#986F31] to-[#D4D3CE]"
            >
              💰 Transparencia
            </h2>
            <p className="text-[#D4D3CE]">
              Precios claros y competitivos siempre.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="bg-gradient-to-br from-[#273848] to-[#303030] 
                       p-6 rounded-md shadow-lg border border-[#986F31]/50 
                       hover:scale-105 hover:shadow-[#986F31]/30 transition"
          >
            <h2
              className="text-xl font-semibold mb-3 
                         bg-clip-text text-transparent 
                         bg-gradient-to-r from-[#986F31] to-[#D4D3CE]"
            >
              🚛 Servicio
            </h2>
            <p className="text-[#D4D3CE]">
              Recolección a domicilio rápida y segura.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nosotros;
