
function Contacto() {
  return (
    <section id="contacto" className="py-16 bg-gradient-to-b from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] text-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título principal */}
        <h1 className="text-4xl font-extrabold text-center mb-12 
                       bg-clip-text text-transparent 
                       bg-gradient-to-r from-yellow-300 to-yellow-500 drop-shadow-lg">
          📞 Contáctanos
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Info de contacto */}
          <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black 
                          p-6 rounded-2xl shadow-lg border border-gray-700">
            <h2 className="text-2xl font-semibold mb-6 
                           bg-clip-text text-transparent 
                           bg-gradient-to-r from-yellow-300 to-yellow-500">
              📍 Información
            </h2>
            <p className="mb-3 text-gray-300">🏠 Calle 123 #45-67, Medellín</p>
            <p className="mb-3 text-gray-300">📞 +57 300 123 4567</p>
            <p className="mb-3 text-gray-300">✉️ contacto@euklidez.com</p>
            <p className="mb-3 text-gray-300">🕒 Lun - Sáb: 8am - 6pm</p>
          </div>

          {/* Formulario */}
          <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black 
                          text-gray-200 rounded-2xl shadow-lg border border-gray-700 p-6">
            <h2 className="text-xl font-semibold mb-6 
                           bg-clip-text text-transparent 
                           bg-gradient-to-r from-yellow-300 to-yellow-500">
              Envíanos un mensaje ✍️
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Tu nombre"
                className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-2 
                           focus:ring-2 focus:ring-yellow-400 focus:outline-none text-gray-200"
              />
              <input
                type="email"
                placeholder="Tu correo"
                className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-2 
                           focus:ring-2 focus:ring-yellow-400 focus:outline-none text-gray-200"
              />
              <textarea
                placeholder="Tu mensaje"
                rows="4"
                className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-2 
                           focus:ring-2 focus:ring-yellow-400 focus:outline-none text-gray-200"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 
                           text-gray-900 font-semibold py-3 rounded-md shadow-md 
                           hover:scale-105 transition cursor-pointer"
              >
                Enviar 📤
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
