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
        <p className="text-[#9A9FA3] mb-6 max-w-2xl mx-auto">
          Los precios de los metales varían según el mercado y el tipo de
          material. Contáctanos por WhatsApp y ajustamos la cotización al
          detalle de lo que quieras vender.
        </p>
        <p className="text-[#9A9FA3] mt-6 text-center max-w-2xl mx-auto">
          💡 Recuerda: el valor final depende del peso, la pureza y el estado del material.
          Pesamos tu chatarra en básculas certificadas para que siempre recibas un pago justo.
        </p>

        <p className="text-[#9A9FA3] mt-6 text-center max-w-2xl mx-auto">
          ⏰ Atendemos los 7 días de la semana – solicita tu cotización rápida por WhatsApp.
        </p>

        {/* Tarjetas de precios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-10">
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
            <p className="text-lg font-medium text-[#EBBE62]">
              Precio según material
              <br />📲 Solicita tu cotización
            </p>
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
            <p className="text-lg font-medium text-[#9A9FA3]">
              Precio según material
              <br />📲 Solicita tu cotización
            </p>
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
            <p className="text-lg font-medium text-[#CC744D]">
              Precio según material
              <br />📲 Solicita tu cotización
            </p>
          </div>
        </div>

        {/* Sección de materiales y servicios */}
        <div className="mt-16 text-left max-w-4xl mx-auto space-y-6">
          <h2
            className="text-2xl font-bold text-center 
                       bg-clip-text text-transparent 
                       bg-gradient-to-r from-[#EBBE62] to-[#CC744D]"
          >
            ♻️ Materiales que Compramos
          </h2>
          <ul className="grid md:grid-cols-2 gap-3 list-disc list-inside text-[#C7C7C7]">
            <li>Cobre, bronce, aluminio, plomo</li>
            <li>Radiadores de aluminio, cobre, bronce y mixtos</li>
            <li>Motores eléctricos</li>
            <li>Archivo y material de patio</li>
            <li>Tubería metálica, tacos, serchas, andamios</li>
            <li>Concretadoras, varillas y saldos industriales</li>
          </ul>
        </div>

        {/* Botón */}
        <a
          href="https://wa.me/573128136299"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 bg-gradient-to-r from-[#EBBE62] to-[#CC744D] 
                     text-[#1A1A1A] px-6 py-3 rounded-md font-semibold 
                     shadow-lg hover:scale-105 hover:shadow-[#EBBE62]/50 
                     transition cursor-pointer"
        >
          Solicitar Cotización 📩
        </a>
      </div>
    </section>
  );
}

export default Precios;
