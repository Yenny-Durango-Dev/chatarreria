import { Facebook, Instagram, Phone, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#2E7D32] text-white mt-10 border-t border-black/20 shadow-inner">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Columna 1: Info empresa */}
        <div>
          <h2 className="text-2xl font-extrabold mb-4 text-white">
            Chatarrería Los Puentes
          </h2>
          <p className="text-sm opacity-90">
            Reciclamos metales con responsabilidad ambiental.
          </p>
          <p className="text-sm mt-3 opacity-70">
            © 2025 Chatarrería Los Puentes. Todos los derechos reservados.
          </p>
        </div>

        {/* Columna 2: Contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contacto</h3>

          {/* Correo */}
          <a
            href="mailto:euklidezorozco@gmail.com"
            className="flex items-center gap-2 hover:text-[#FFD600] transition-colors"
          >
            <Mail size={16} /> euklidezorozco@gmail.com
          </a>

          {/* Teléfono */}
          <a
            href="https://wa.me/573017910078"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#FFD600] transition-colors"
          >
            <Phone size={16} /> +57 301 7910079
          </a>

          <p className="mt-3 opacity-80">🕒 Horarios</p>
          <p>Lunes - Domingo</p>
          <p>Servicio 24/7</p>
        </div>

        {/* Columna 3: Enlaces rápidos */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Enlaces</h3>
          <ul className="space-y-2">
            {["inicio", "servicios", "precios", "nosotros", "contacto"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="cursor-pointer relative hover:text-[#FFD600] transition-colors group"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#FFD600] transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
