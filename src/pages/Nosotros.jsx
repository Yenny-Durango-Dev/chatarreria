
function Nosotros() {
  return (
    <section id="nosotros" className="py-16 bg-gradient-to-b from-gray-600 via-gray-700 to-gray-600 text-gray-200">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Título */}
        <h1 className="text-4xl font-extrabold mb-10 
                       bg-clip-text text-transparent 
                       bg-gradient-to-r from-yellow-300 to-yellow-500 drop-shadow-lg">
          ⚙️ Sobre Nosotros
        </h1>

        {/* Texto descriptivo */}
        <p className="text-gray-300 mb-12 max-w-3xl mx-auto">
          En{" "}
          <span className="font-semibold text-yellow-400">
            Chatarrería Euklidez
          </span>{" "}
          contamos con más de{" "}
          <strong className="text-yellow-300">10 años de experiencia</strong>{" "}
          en el reciclaje de metales. Nuestro compromiso es con el{" "}
          <span className="text-yellow-400 font-semibold">medio ambiente</span>,
          ofreciendo precios justos y un servicio confiable.
        </p>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black 
                          p-6 rounded-xl shadow-lg border border-gray-700 
                          hover:scale-105 hover:shadow-yellow-400/30 transition">
            <h2 className="text-xl font-semibold mb-3 
                           bg-clip-text text-transparent 
                           bg-gradient-to-r from-yellow-300 to-yellow-500">
              🌱 Responsabilidad
            </h2>
            <p className="text-gray-300">
              Reciclamos metales cuidando el planeta.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black 
                          p-6 rounded-xl shadow-lg border border-gray-700 
                          hover:scale-105 hover:shadow-yellow-400/30 transition">
            <h2 className="text-xl font-semibold mb-3 
                           bg-clip-text text-transparent 
                           bg-gradient-to-r from-yellow-300 to-yellow-500">
              💰 Transparencia
            </h2>
            <p className="text-gray-300">
              Precios claros y competitivos siempre.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black 
                          p-6 rounded-xl shadow-lg border border-gray-700 
                          hover:scale-105 hover:shadow-yellow-400/30 transition">
            <h2 className="text-xl font-semibold mb-3 
                           bg-clip-text text-transparent 
                           bg-gradient-to-r from-yellow-300 to-yellow-500">
              🚛 Servicio
            </h2>
            <p className="text-gray-300">
              Recolección a domicilio rápida y segura.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nosotros;
