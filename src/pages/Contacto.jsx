import { useState } from "react";
import { Phone, Clock, Mail } from "lucide-react"; // íconos bonitos

function Contacto() {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const telefono = "573017910078";
    const texto = `Hola, soy ${nombre}. ${mensaje}`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contacto" className="py-16 bg-gray-300 text-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título principal */}
        <h1 className="text-4xl font-extrabold text-center mb-12 text-[#2E7D32]">
          📞 Contáctanos
        </h1>

        {/* Grid: Info + Formulario */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          {/* Info de contacto */}
          <div className="p-6 rounded-2xl shadow-lg border-2 border-[#2E7D32] bg-white">
            <h2 className="text-2xl font-semibold mb-6 text-[#2E7D32]">
              📍 Información
            </h2>
            <ul className="space-y-5">
              <li className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-[#FFD600]" />
                <a href="tel:+573017910078" className="hover:text-[#FFD600]">
                  +57 301 7910079
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-[#FFD600]" />
                <a
                  href="mailto:euklidezorozco@gmail.com"
                  className="hover:text-[#FFD600]"
                >
                  euklidezorozco@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-[#FFD600]" />
                <span>Todos los días: 24 horas, los 7 días de la semana</span>
              </li>
            </ul>

            {/* Extra: mini CTA */}
            <div className="mt-6 text-center">
              <a
                href="https://wa.me/573017910078"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#2E7D32] px-6 py-3 rounded-lg shadow-md font-semibold text-white hover:bg-[#FFD600] hover:text-black transition"
              >
                💬 Escríbenos por WhatsApp
              </a>
            </div>
          </div>

          {/* Formulario con WhatsApp */}
          <div className="p-6 rounded-2xl shadow-lg border-2 border-[#2E7D32] bg-white">
            <h2 className="text-xl font-semibold mb-6 text-[#2E7D32]">
              Envíanos un mensaje ✍️
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full border border-[#2E7D32] rounded-md px-4 py-2 focus:ring-2 focus:ring-[#FFD600] focus:outline-none"
                required
              />
              <textarea
                placeholder="Tu mensaje"
                rows="4"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                className="w-full border border-[#2E7D32] rounded-md px-4 py-2 focus:ring-2 focus:ring-[#FFD600] focus:outline-none"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#2E7D32] text-white font-semibold py-3 rounded-md shadow-md hover:bg-[#FFD600] hover:text-black transition cursor-pointer"
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
