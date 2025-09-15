import Nevera from "../assets/nevera.png";
import Lavadora from "../assets/lavadora.png";
import Portatil from "../assets/portatil.png";
import Televisor from "../assets/televisor.png";
import Electrodomesticos from "../assets/electrodomesticos.png";
import Metales from "../assets/metales.png";
import Construccion from "../assets/construccion.png";
import Cobre from "../assets/cobre.png";
import Aluminio from "../assets/aluminio.png";
import Hierro from "../assets/hierro.png";

// Datos mejorados para el carrusel, más organizados
const materialesExtra = [
  {
    nombre: "Neveras y Congeladores",
    img: Nevera,
    descripcion: "Para chatarra y reciclaje"
  },
  {
    nombre: "Lavadoras",
    img: Lavadora,
    descripcion: "Equipos que ya no funcionan"
  },
  {
    nombre: "Computadores y Portátiles",
    img: Portatil,
    descripcion: "Compramos equipos viejos y dañados"
  },
  {
    nombre: "Televisores",
    img: Televisor,
    descripcion: "Recibimos todo tipo de televisores"
  },
  {
    nombre: "Cobre, Bronce y Aluminio",
    img: Metales,
    descripcion: "Metales valiosos para reciclar"
  },
  {
    nombre: "Motores Eléctricos",
    img: Electrodomesticos,
    descripcion: "De electrodomésticos, bombas, etc."
  },
  {
    nombre: "Material de Patio y Construcción",
    img: Construccion,
    descripcion: "Andamios, tubería metálica, serchas y más"
  }
];

function Precios() {
  return (
    <section id="precios" className="py-16 bg-white text-[#333]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Título */}
        <h1 className="text-4xl font-extrabold mb-10 text-[#2E7D32] drop-shadow-md">
          💰 Precios de Referencia
        </h1>

        {/* Texto descriptivo */}
        <p className="mb-6 max-w-2xl mx-auto text-lg text-[#555]">
          Los precios de los metales varían según el mercado. Contáctanos por WhatsApp y te damos una cotización ajustada y al detalle de lo que quieras vender.
        </p>

        {/* Tarjetas de precios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-10">
          {/* Cobre */}
          <div
            className="relative rounded-xl shadow-lg text-white overflow-hidden hover:scale-105 transition"
            style={{ backgroundImage: `url(${CobreImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative p-6 z-10">
              <h2 className="text-xl font-semibold mb-3 text-[#FFD600]">🟠 Cobre</h2>
              <p className="text-lg font-medium">
                Precio según material <br /> 📲 Solicita tu cotización
              </p>
            </div>
          </div>

          {/* Aluminio */}
          <div
            className="relative rounded-xl shadow-lg text-white overflow-hidden hover:scale-105 transition"
            style={{ backgroundImage: `url(${AluminioImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative p-6 z-10">
              <h2 className="text-xl font-semibold mb-3 text-[#FFD600]">🔵 Aluminio</h2>
              <p className="text-lg font-medium">
                Precio según material <br /> 📲 Solicita tu cotización
              </p>
            </div>
          </div>

          {/* Hierro */}
          <div
            className="relative rounded-xl shadow-lg text-white overflow-hidden hover:scale-105 transition"
            style={{ backgroundImage: `url(${HierroImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative p-6 z-10">
              <h2 className="text-xl font-semibold mb-3 text-[#FFD600]">⚫ Hierro</h2>
              <p className="text-lg font-medium">
                Precio según material <br /> 📲 Solicita tu cotización
              </p>
            </div>
          </div>
        </div>

        {/* Sección de materiales */}
        <div className="mt-16 max-w-4xl mx-auto space-y-6">
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-[#2E7D32] mb-4 text-center">
              También recibimos:
            </h3>
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[#2E7D32]/60 scrollbar-track-gray-200">
              {materialesExtra.map((item, index) => (
                <div
                  key={index}
                  className="min-w-[220px] bg-white border border-[#2E7D32]/30 rounded-xl shadow-md flex-shrink-0 hover:shadow-lg hover:scale-105 transition"
                >
                  <img
                    src={item.img}
                    alt={item.nombre}
                    className="w-full h-40 object-cover rounded-t-xl"
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-[#2E7D32]">{item.nombre}</h4>
                    <p className="text-sm text-[#555]">{item.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Botón */}
        <a
          href="https://wa.me/573128136299"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 bg-[#FFD600] text-[#2E7D32] px-6 py-3 rounded-md font-semibold shadow-lg hover:scale-105 transition cursor-pointer"
        >
          Solicitar Cotización 📩
        </a>
      </div>
    </section>
  );
}

export default Precios;