function Precios() {
  return (
    <section
      id="precios"
      className="py-16 bg-gradient-to-b from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] text-[#C7C7C7]"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Título */}
        <h1
          className="text-4xl font-extrabold mb-10 
                     bg-clip-text text-transparent 
                     bg-gradient-to-r from-[#EBBE62] to-[#9A9FA3] drop-shadow-lg"
        >
          💰 Precios de Referencia
        </h1>

        {/* Texto descriptivo */}
        <p className="text-[#9A9FA3] mb-12 max-w-2xl mx-auto">
          Los precios de los metales varían según el mercado. Aquí te mostramos
          valores de referencia, ¡contáctanos para una cotización exacta!
        </p>

        {/* Tarjetas de precios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cobre */}
          <div
            className="bg-gradient-to-br from-[#2A2A2A] via-[#1A1A1A] to-[#2A2A2A] 
                       p-6 rounded-2xl shadow-lg border border-[#EBBE62] 
                       hover:scale-105 hover:shadow-[#EBBE62]/40 transition"
          >
            <h2
              className="text-xl font-semibold mb-3 
                         bg-clip-text text-transparent 
                         bg-gradient-to-r from-[#EBBE62] to-[#BAA473]"
            >
              🟠 Cobre
            </h2>
            <p className="text-2xl font-bold text-[#EBBE62]">$X.XXX / kg</p>
          </div>

          {/* Aluminio */}
          <div
            className="bg-gradient-to-br from-[#2A2A2A] via-[#1A1A1A] to-[#2A2A2A] 
                       p-6 rounded-2xl shadow-lg border border-[#9A9FA3] 
                       hover:scale-105 hover:shadow-[#9A9FA3]/40 transition"
          >
            <h2
              className="text-xl font-semibold mb-3 
                         bg-clip-text text-transparent 
                         bg-gradient-to-r from-[#9A9FA3] to-[#C7C7C7]"
            >
              🔵 Aluminio
            </h2>
            <p className="text-2xl font-bold text-[#9A9FA3]">$X.XXX / kg</p>
          </div>

          {/* Hierro */}
          <div
            className="bg-gradient-to-br from-[#2A2A2A] via-[#1A1A1A] to-[#2A2A2A] 
                       p-6 rounded-2xl shadow-lg border border-[#CC744D] 
                       hover:scale-105 hover:shadow-[#CC744D]/40 transition"
          >
            <h2
              className="text-xl font-semibold mb-3 
                         bg-clip-text text-transparent 
                         bg-gradient-to-r from-[#CC744D] to-[#9F665F]"
            >
              ⚫ Hierro
            </h2>
            <p className="text-2xl font-bold text-[#CC744D]">$X.XXX / kg</p>
          </div>
        </div>

        {/* Botón */}
        <button
          className="mt-10 bg-gradient-to-r from-[#EBBE62] to-[#CC744D] 
                     text-[#1A1A1A] px-6 py-3 rounded-xl font-semibold 
                     shadow-lg hover:scale-105 hover:shadow-[#EBBE62]/50 
                     transition cursor-pointer"
        >
          Solicitar Cotización 📩
        </button>
      </div>
    </section>
  );
}

export default Precios;
