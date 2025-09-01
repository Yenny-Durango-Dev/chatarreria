import React from "react";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 mt-10 border-t border-gray-600">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Columna 1: Info empresa */}
        <div>
          <h2 className="text-xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400">
            Chatarrería Euklidez
          </h2>
          <p className="text-sm text-gray-300">
            Reciclamos metales con responsabilidad ambiental.
          </p>
          <p className="text-sm mt-2 text-gray-400">
            © 2025 Chatarrería Euklidez. Todos los derechos reservados.
          </p>
        </div>

        {/* Columna 2: Contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-100">Contacto</h3>
          <p className="flex items-center gap-2"><MapPin size={16} /> Calle 123 #45-67, Medellín</p>
          <p className="flex items-center gap-2"><Phone size={16} /> +57 300 123 4567</p>
          <p className="flex items-center gap-2"><Mail size={16} /> contacto@euklidez.com</p>
          <p className="mt-2 text-gray-400">🕒 Lun - Sáb: 8am - 6pm</p>
        </div>

        {/* Columna 3: Enlaces rápidos */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-100">Enlaces</h3>
          <ul className="space-y-2">
            {["Inicio", "Servicios", "Precios", "Nosotros", "Contacto"].map((item) => (
              <li key={item} className="hover:text-yellow-400 cursor-pointer transition-colors">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Línea inferior con redes */}
      <div className="border-t border-gray-700 mt-6 pt-4 flex justify-center gap-6 text-gray-400">
        <Facebook className="cursor-pointer hover:text-yellow-400 transition" />
        <Instagram className="cursor-pointer hover:text-yellow-400 transition" />
      </div>
    </footer>
  );
}

export default Footer;
