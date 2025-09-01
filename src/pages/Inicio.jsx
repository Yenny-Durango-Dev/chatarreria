import Chatarra1 from "../../public/chatarra1.jpg";

const Inicio = () => {
  return (
    <section id="inicio" className="relative bg-black">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src={Chatarra1}
          alt="Chatarra metálica"
          className="w-full h-full object-cover"
        />
        {/* Overlay metálico */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-gray-900/70 to-black/90"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        {/* Título con estilo metálico */}
        <h1
          className="text-4xl md:text-6xl font-extrabold 
                     bg-clip-text text-transparent 
                     bg-gradient-to-r from-gray-200 via-gray-400 to-gray-100 
                     drop-shadow-lg"
        >
          Reciclaje de Metales con Confianza
        </h1>

        {/* Texto */}
        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          En{" "}
          <span className="font-semibold text-yellow-400">
            Chatarrería Euklidez
          </span>{" "}
          compramos y reciclamos metales de forma responsable, garantizando los
          mejores precios del mercado.
        </p>

        {/* Botones */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          {/* Botón principal */}
          <button
            className="bg-gradient-to-r from-yellow-400 to-orange-500 
                       text-gray-900 px-6 py-3 rounded-md font-semibold 
                       shadow-lg hover:scale-105 hover:shadow-yellow-500/50 
                       transition cursor-pointer"
          >
            Cotizar ahora
          </button>

          {/* Botón secundario */}
          <button
            className="bg-transparent border-2 border-yellow-400 
                       text-yellow-400 px-6 py-3 rounded-md font-semibold 
                       shadow-lg hover:bg-yellow-400 hover:text-gray-900 
                       transition cursor-pointer"
          >
            Contacto rápido
          </button>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
