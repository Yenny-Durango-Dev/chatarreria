import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#303030] text-[#D4D3CE] mt-10 border-t border-[#273848] shadow-inner">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Columna 1: Info empresa */}
        <div>
          <h2 className="text-2xl font-extrabold mb-4 
                         bg-clip-text text-transparent 
                         bg-gradient-to-r from-[#D4D3CE] to-[#986F31] drop-shadow-lg">
            Chatarrería La Paz
          </h2>
          <p className="text-sm text-[#D4D3CE]/80">
            Reciclamos metales con responsabilidad ambiental.
          </p>
          <p className="text-sm mt-3 text-[#D4D3CE]/60">
            © 2025 Chatarrería La Paz. Todos los derechos reservados.
          </p>
        </div>

        {/* Columna 2: Contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-4 
                         bg-clip-text text-transparent 
                         bg-gradient-to-r from-[#986F31] to-[#D4D3CE]">
            Contacto
          </h3>

          {/* Dirección con link a Google Maps */}
          <a
            href="https://www.google.com/maps?q=Cl.+57+%23+53-32,+La+Candelaria,+Medellín,+Antioquia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#986F31] transition-colors"
          >
            <MapPin size={16} /> Cl. 57 # 53-32, La Candelaria, Medellín
          </a>

          {/* Teléfono con link a WhatsApp */}
          <a
            href="https://wa.me/573128136299"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#986F31] transition-colors"
          >
            <Phone size={16} /> +57 312 8136299
          </a>

          <p className="mt-3 text-[#D4D3CE]/70">🕒Horarios</p>
        </div>

        {/* Columna 3: Enlaces rápidos */}
        <div>
          <h3 className="text-lg font-semibold mb-4 
                         bg-clip-text text-transparent 
                         bg-gradient-to-r from-[#986F31] to-[#D4D3CE]">
            Enlaces
          </h3>
          <ul className="space-y-2">
            {["inicio", "servicios", "precios", "nosotros", "contacto"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="cursor-pointer relative hover:text-[#986F31] transition-colors group"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#986F31] transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Línea inferior con redes */}
      <div className="border-t border-[#273848] mt-8 pt-5 flex justify-center gap-6 text-[#D4D3CE]/70">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-[#273848] hover:bg-[#986F31] hover:text-[#303030] transition cursor-pointer"
        >
          <Facebook size={20} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-[#273848] hover:bg-[#986F31] hover:text-[#303030] transition cursor-pointer"
        >
          <Instagram size={20} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
