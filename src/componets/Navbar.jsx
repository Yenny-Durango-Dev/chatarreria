import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 border-b-2 border-gray-600">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400 drop-shadow-lg">
          Chatarrería Euklidez
        </div>

        {/* Links desktop */}
        <ul className="hidden md:flex gap-6 text-gray-200 font-medium">
          {["Inicio", "Servicios", "Precios", "Nosotros", "Contacto"].map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-yellow-400 transition-colors relative"
            >
              {item}
              {/* Línea de brillo al pasar el mouse */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa (mobile) */}
        <button
          className="md:hidden text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-gray-800 to-gray-900 shadow-md">
          <ul className="flex flex-col gap-4 px-6 py-4 text-gray-200 font-medium">
            <li className="cursor-pointer hover:text-yellow-400 transition-colors">Inicio</li>
            <li className="cursor-pointer hover:text-yellow-400 transition-colors">Servicios</li>
            <li className="cursor-pointer hover:text-yellow-400 transition-colors">Precios</li>
            <li className="cursor-pointer hover:text-yellow-400 transition-colors">Nosotros</li>
            <li className="cursor-pointer hover:text-yellow-400 transition-colors">Contacto</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
