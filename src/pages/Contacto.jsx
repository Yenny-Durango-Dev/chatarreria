import { useState } from "react";
import { Phone, Clock, Mail, MessageCircleCode, MapPin } from "lucide-react";

function Contacto() {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const telefono = "573042034373";
    const texto = `Hola, soy ${nombre}. ${mensaje}`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contacto" className="py-16 bg-gray-300 text-black">
      <div className="max-w-3xl mx-auto px-6">
        {/* Título principal */}
        <h1 className="text-4xl font-extrabold text-center mb-12 text-[#2E7D32]">
          📞 Contáctanos
        </h1>

        {/* Info de contacto */}
        <div className="p-8 rounded-2xl shadow-lg border-2 border-[#2E7D32] bg-white mb-10">
          <h2 className="text-3xl font-bold mb-8 text-[#2E7D32] text-center">
            📍 Información
          </h2>
          <ul className="space-y-6 text-xl">
            {/* WhatsApp */}
            <li className="flex items-center gap-4">
              <MessageCircleCode className="w-8 h-8 text-[#FFD600]" />
              <a
                href="https://wa.me/573042034373"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFD600] break-words"
              >
                +57 304 2034373 (WhatsApp)
              </a>
            </li>

            {/* Teléfono */}
            <li className="flex items-center gap-4">
              <Phone className="w-8 h-8 text-[#FFD600]" />
              <a
                href="tel:+573233540080"
                className="hover:text-[#FFD600] break-words"
              >
                +57 323 3540080 (Llamar)
              </a>
            </li>

            {/* Correo */}
            <li className="flex items-center gap-4">
              <Mail className="w-8 h-8 text-[#FFD600]" />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=chatarrerialospuentes312@gmail.com
&su=Consulta&body=Hola,%20quisiera%20más%20información."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFD600] break-words"
              >
                chatarrerialospuentes312@gmail.com

              </a>
            </li>

            {/* Dirección con Google Maps */}
            <li className="flex items-center gap-4">
              <MapPin className="w-8 h-8 text-[#FFD600]" />
              <a
                href="https://www.google.com/maps?q=Cl.+57b+%2354-151,+La+Candelaria,+Medellin,+Antioquia"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFD600] break-words"
              >
                Cl. 57b #54-151, La Candelaria, Medellín, Antioquia
              </a>
            </li>

            {/* Horario */}
            <li className="flex items-center gap-4">
              <Clock className="w-8 h-8 text-[#FFD600]" />
              <span className="leading-snug">
                Todos los días <br />
                <strong className="text-lg">24 horas, 7 días de la semana</strong>
              </span>
            </li>
          </ul>

          {/* CTA WhatsApp */}
          <div className="mt-8 text-center">
            <a
              href="https://wa.me/573042034373"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#2E7D32] px-8 py-4 rounded-lg shadow-md font-bold text-2xl text-white hover:bg-[#FFD600] hover:text-black transition"
            >
              💬 Escríbenos por WhatsApp
            </a>
          </div>
        </div>

        {/* Formulario */}
        <div className="p-8 rounded-2xl shadow-lg border-2 border-[#2E7D32] bg-white">
          <h2 className="text-3xl font-bold mb-8 text-[#2E7D32] text-center">
            ✍️ Envíanos un mensaje
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full border-2 border-[#2E7D32] rounded-md px-5 py-4 text-xl focus:ring-4 focus:ring-[#FFD600] focus:outline-none"
              required
            />
            <textarea
              placeholder="Tu mensaje"
              rows="5"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              className="w-full border-2 border-[#2E7D32] rounded-md px-5 py-4 text-xl focus:ring-4 focus:ring-[#FFD600] focus:outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#2E7D32] text-white font-bold py-4 rounded-md shadow-md hover:bg-[#FFD600] hover:text-black transition text-2xl cursor-pointer"
            >
              📤 Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
