import Chatarra2 from "../assets/chatarra1.jpg";

const Inicio = () => {
  return (
    <section id="inicio" className="relative bg-white">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src={Chatarra2}
          alt="Chatarra metálica"
          className="w-full h-full object-cover"
        />
        {/* Overlay oscuro para contraste */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        {/* Título */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Reciclaje de Metales con Confianza
        </h1>

        {/* Texto */}
        <p className="mt-6 text-lg md:text-xl text-white max-w-2xl mx-auto">
          En{" "}
          <span className="font-semibold text-[#FFD600]">
            Chatarrería Los Puentes
          </span>{" "}
          compramos y reciclamos metales como cobre, bronce, aluminio, hierro y
          más. Servicio a domicilio los{" "}
          <span className="text-[#FFD600] font-semibold">
            7 días de la semana
          </span>{" "}
          y los mejores precios del mercado.
        </p>

        {/* Botones */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          {/* Botón principal */}
          <a
            href="https://wa.me/573128136299?text=Hola,%20quiero%20una%20cotización%20de%20material"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2E7D32] text-white px-6 py-3 rounded-md font-semibold 
                       shadow-lg hover:bg-[#FFD600] hover:text-black 
                       transition cursor-pointer"
          >
            Cotizar ahora 📲
          </a>

          {/* Botón secundario */}
          <a
            href="#contacto"
            className="border-2 border-[#FFD600] text-[#FFD600] px-6 py-3 
                       rounded-md font-semibold shadow-lg 
                       hover:bg-[#FFD600] hover:text-black 
                       transition cursor-pointer"
          >
            Contacto rápido
          </a>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
