import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#2E7D32] text-white mt-12 border-t border-black/20 shadow-inner">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        
        {/* Columna 1: Info empresa */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-white leading-snug">
            Chatarrería Los Puentes
          </h2>
          <p className="text-lg sm:text-xl opacity-90 leading-relaxed">
            Reciclamos metales con responsabilidad ambiental.
          </p>
          <p className="text-sm sm:text-base mt-4 opacity-70">
            © 2025 Chatarrería Los Puentes. <br />Todos los derechos reservados.
          </p>
        </div>

        {/* Columna 2: Contacto */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
            📞 Contacto
          </h3>

          <ul className="space-y-4 text-lg sm:text-xl">
            <li>
              <a
                href="https://www.google.com/maps?q=Cl.+57b+%2354-151,+La+Candelaria,+Medellín,+Antioquia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#FFD600] transition-colors justify-center md:justify-start"
              >
                <MapPin size={22} /> Cl. 57b #54-151, La Candelaria, Medellín
              </a>
            </li>

            <li>
              <a
                href="https://wa.me/573042034373"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#FFD600] transition-colors justify-center md:justify-start"
              >
                <Phone size={22} /> WhatsApp: +57 304 2034373
              </a>
            </li>

            <li>
              <a
                href="tel:+573233540080"
                className="flex items-center gap-3 hover:text-[#FFD600] transition-colors justify-center md:justify-start"
              >
                <Phone size={22} /> Llamar: +57 323 3540080
              </a>
            </li>

            <li>
              <a
                href="mailto:chatarrerialospuentes312@gmail.com"
                className="flex items-center gap-3 hover:text-[#FFD600] transition-colors justify-center md:justify-start"
              >
                <Mail size={22} /> chatarrerialospuentes312@gmail.com
              </a>
            </li>
          </ul>

          <div className="mt-6 text-lg sm:text-xl opacity-90">
            <p>🕒 Horarios</p>
            <p>Lunes - Domingo</p>
            <p className="font-semibold">Servicio 24/7</p>
          </div>
        </div>

        {/* Columna 3: Enlaces rápidos */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
            🔗 Enlaces
          </h3>
          <ul className="space-y-4">
            {["inicio", "servicios", "precios", "nosotros", "contacto"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="cursor-pointer relative text-lg sm:text-xl hover:text-[#FFD600] transition-colors group"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                    <span className="absolute left-0 -bottom-1 w-0 h-1 bg-[#FFD600] transition-all group-hover:w-full"></span>
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
