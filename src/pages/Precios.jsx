
function Precios() {
  return (
    <section id="precios" className="py-16 bg-gradient-to-b from-gray-700 via-gray-800 to-gray-700 text-gray-200">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Título */}
        <h1 className="text-4xl font-extrabold mb-10 
                       bg-clip-text text-transparent 
                       bg-gradient-to-r from-yellow-300 to-yellow-500 drop-shadow-lg">
          💰 Precios de Referencia
        </h1>

        {/* Texto descriptivo */}
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Los precios de los metales varían según el mercado. Aquí te mostramos
          valores de referencia, ¡contáctanos para una cotización exacta!
        </p>

        {/* Tarjetas de precios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cobre */}
          <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black 
                          p-6 rounded-xl shadow-lg border border-yellow-500 
                          hover:scale-105 hover:shadow-yellow-400/30 transition">
            <h2 className="text-xl font-semibold mb-3 
                           bg-clip-text text-transparent 
                           bg-gradient-to-r from-yellow-300 to-yellow-500">
              🟠 Cobre
            </h2>
            <p className="text-2xl font-bold text-yellow-400">$X.XXX / kg</p>
          </div>

          {/* Aluminio */}
          <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black 
                          p-6 rounded-xl shadow-lg border border-yellow-500 
                          hover:scale-105 hover:shadow-yellow-400/30 transition">
            <h2 className="text-xl font-semibold mb-3 
                           bg-clip-text text-transparent 
                           bg-gradient-to-r from-yellow-300 to-yellow-500">
              🔵 Aluminio
            </h2>
            <p className="text-2xl font-bold text-yellow-400">$X.XXX / kg</p>
          </div>

          {/* Hierro */}
          <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black 
                          p-6 rounded-xl shadow-lg border border-yellow-500 
                          hover:scale-105 hover:shadow-yellow-400/30 transition">
            <h2 className="text-xl font-semibold mb-3 
                           bg-clip-text text-transparent 
                           bg-gradient-to-r from-yellow-300 to-yellow-500">
              ⚫ Hierro
            </h2>
            <p className="text-2xl font-bold text-yellow-400">$X.XXX / kg</p>
          </div>
        </div>

        {/* Botón */}
        <button
          className="mt-10 bg-gradient-to-r from-yellow-400 to-orange-500 
                     text-gray-900 px-6 py-3 rounded-md font-semibold 
                     shadow-lg hover:scale-105 hover:shadow-yellow-500/50 
                     transition cursor-pointer"
        >
          Solicitar Cotización 📩
        </button>
      </div>
    </section>
  );
}

export default Precios;
