import Chatarra2 from "../assets/chatarra1.jpg";

const Inicio = () => {
  return (
    <section id="inicio" className="relative bg-[#303030]">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src={Chatarra2}
          alt="Chatarra metálica"
          className="w-full h-full object-cover"
        />
        {/* Overlay metálico */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#303030]/90 via-[#273848]/70 to-[#303030]/95"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        {/* Título con estilo metálico */}
        <h1
          className="text-4xl md:text-6xl font-extrabold 
                     bg-clip-text text-transparent 
                     bg-gradient-to-r from-[#D4D3CE] via-[#986F31] to-[#D4D3CE] 
                     drop-shadow-lg"
        >
          Reciclaje de Metales con Confianza
        </h1>

        {/* Texto */}
        <p className="mt-6 text-lg md:text-xl text-[#D4D3CE] max-w-2xl mx-auto">
          En{" "}
          <span className="font-semibold text-[#986F31]">
            Chatarrería La Paz
          </span>{" "}
          compramos y reciclamos metales de forma responsable, garantizando los
          mejores precios del mercado.
        </p>

        {/* Botones */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          {/* Botón principal */}
          <button
            className="bg-gradient-to-r from-[#986F31] to-[#D4D3CE] 
                       text-[#303030] px-6 py-3 rounded-md font-semibold 
                       shadow-lg hover:scale-105 hover:shadow-[#986F31]/50 
                       transition cursor-pointer"
          >
            Cotizar ahora
          </button>

          {/* Botón secundario */}
          <button
            className="bg-transparent border-2 border-[#986F31] 
                       text-[#986F31] px-6 py-3 rounded-md font-semibold 
                       shadow-lg hover:bg-[#986F31] hover:text-[#303030] 
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
