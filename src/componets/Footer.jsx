import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                       text-gray-200 mt-10 border-t border-gray-700 shadow-inner">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Columna 1: Info empresa */}
        <div>
          <h2 className="text-2xl font-extrabold mb-4 
                         bg-clip-text text-transparent 
                         bg-gradient-to-r from-gray-100 to-gray-400 drop-shadow-lg">
            Chatarrería Euklidez
          </h2>
          <p className="text-sm text-gray-300">
            Reciclamos metales con responsabilidad ambiental.
          </p>
          <p className="text-sm mt-3 text-gray-500">
            © 2025 Chatarrería Euklidez. Todos los derechos reservados.
          </p>
        </div>

        {/* Columna 2: Contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-4 
                         bg-clip-text text-transparent 
                         bg-gradient-to-r from-yellow-300 to-yellow-500">
            Contacto
          </h3>
          <p className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
            <MapPin size={16} /> Calle 123 #45-67, Medellín
          </p>
          <p className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
            <Phone size={16} /> +57 300 123 4567
          </p>
          <p className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
            <Mail size={16} /> contacto@euklidez.com
          </p>
          <p className="mt-3 text-gray-400">🕒 Lun - Sáb: 8am - 6pm</p>
        </div>

        {/* Columna 3: Enlaces rápidos */}
        <div>
          <h3 className="text-lg font-semibold mb-4 
                         bg-clip-text text-transparent 
                         bg-gradient-to-r from-yellow-300 to-yellow-500">
            Enlaces
          </h3>
          <ul className="space-y-2">
            {["Inicio", "Servicios", "Precios", "Nosotros", "Contacto"].map((item) => (
              <li
                key={item}
                className="cursor-pointer relative hover:text-yellow-400 transition-colors"
              >
                {item}
                {/* Línea brillante al hacer hover */}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Línea inferior con redes */}
      <div className="border-t border-gray-700 mt-8 pt-5 flex justify-center gap-6 text-gray-400">
        <div className="p-2 rounded-full bg-gray-800 hover:bg-yellow-400 hover:text-gray-900 transition cursor-pointer">
          <Facebook size={20} />
        </div>
        <div className="p-2 rounded-full bg-gray-800 hover:bg-yellow-400 hover:text-gray-900 transition cursor-pointer">
          <Instagram size={20} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
