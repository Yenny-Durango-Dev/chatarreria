import { useState } from "react";
import { MapPin, Phone, Clock, Mail } from "lucide-react"; // íconos bonitos
import ChatarreriaLaPaz from "../assets/chatarrerialapaz.png";

function Contacto() {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const telefono = "573128136299";
    const texto = `Hola, soy ${nombre}. ${mensaje}`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="contacto"
      className="py-16 bg-gradient-to-b from-[#303030] via-[#273848] to-[#303030] text-[#D4D3CE]"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Título principal */}
        <h1
          className="text-4xl font-extrabold text-center mb-12 
                     bg-clip-text text-transparent 
                     bg-gradient-to-r from-[#986F31] to-[#D4D3CE] drop-shadow-md"
        >
          📞 Contáctanos
        </h1>

        {/* Grid: Info + Formulario */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          {/* Info de contacto */}
          <div
            className="p-6 rounded-2xl shadow-lg 
                       border-2 border-[#986F31] 
                       bg-gradient-to-br from-[#273848] to-[#303030]"
          >
            <h2
              className="text-2xl font-semibold mb-6 
                         bg-clip-text text-transparent 
                         bg-gradient-to-r from-[#986F31] to-[#D4D3CE]"
            >
              📍 Información
            </h2>
            <ul className="space-y-5 text-[#D4D3CE]">
              <li className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-[#986F31]" />
                <span>Cl. 57 # 53-32, La Candelaria, Medellín, Antioquia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-[#986F31]" />
                <a href="tel:+573128136299" className="hover:text-[#986F31]">+57 312 8136299</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-[#986F31]" />
                <a href="mailto:euklidezorozco@gmail.com" className="hover:text-[#986F31]">euklidezorozco@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-[#986F31]" />
                <span>Todos los días: 8:00am – 6:00pm</span>
              </li>
            </ul>

            {/* Extra: mini CTA */}
            <div className="mt-6 text-center">
              <a
                href="https://wa.me/573128136299"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-[#986F31] to-[#273848] 
                           px-6 py-3 rounded-lg shadow-md font-semibold 
                           hover:scale-105 transition text-[#D4D3CE]"
              >
                💬 Escríbenos por WhatsApp
              </a>
            </div>
          </div>

          {/* Formulario con WhatsApp */}
          <div
            className="p-6 rounded-2xl shadow-lg 
                       border-2 border-[#986F31] 
                       bg-gradient-to-br from-[#273848] to-[#303030]"
          >
            <h2
              className="text-xl font-semibold mb-6 
                         bg-clip-text text-transparent 
                         bg-gradient-to-r from-[#986F31] to-[#D4D3CE]"
            >
              Envíanos un mensaje ✍️
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full bg-[#303030] border border-[#986F31] rounded-md px-4 py-2 
                           focus:ring-2 focus:ring-[#986F31] focus:outline-none text-[#D4D3CE]"
                required
              />
              <textarea
                placeholder="Tu mensaje"
                rows="4"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                className="w-full bg-[#303030] border border-[#986F31] rounded-md px-4 py-2 
                           focus:ring-2 focus:ring-[#986F31] focus:outline-none text-[#D4D3CE]"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#986F31] to-[#273848] 
                           text-[#D4D3CE] font-semibold py-3 rounded-md shadow-md 
                           hover:scale-105 transition cursor-pointer"
              >
                Enviar 📤
              </button>
            </form>
          </div>
        </div>

        {/* Sección: Mapa + Foto */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 
                     p-6 rounded-2xl shadow-lg border-2 border-[#986F31] 
                     bg-gradient-to-br from-[#273848] to-[#303030]"
        >
          {/* Mapa */}
          <div className="rounded-lg overflow-hidden shadow-md h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.054753691836!2d-75.5691816385345!3d6.256517658454762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44298406bd539b%3A0x4678b83ff92255b8!2sChatarrer%C3%ADa%20y%20Excedentes%20la%20paz!5e0!3m2!1ses!2sco!4v1756837848141!5m2!1ses!2sco"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Foto del lugar (misma altura del mapa) */}
          <div className="rounded-lg overflow-hidden shadow-md h-[350px]">
            <img
              src={ChatarreriaLaPaz}
              alt="Chatarrería La Paz"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
