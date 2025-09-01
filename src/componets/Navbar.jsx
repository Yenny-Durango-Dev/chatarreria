import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Inicio", to: "inicio" },
    { name: "Servicios", to: "servicios" },
    { name: "Precios", to: "precios" },
    { name: "Nosotros", to: "nosotros" },
    { name: "Contacto", to: "contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav
        className="flex items-center justify-between px-6 py-4 shadow-md 
                   bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 
                   border-b-2 border-gray-600"
      >
        {/* Logo */}
        <div
          className="text-2xl font-extrabold tracking-wide 
                     bg-clip-text text-transparent 
                     bg-gradient-to-r from-gray-100 to-gray-400 drop-shadow-lg"
        >
          Chatarrería Euklidez
        </div>

        {/* Links desktop */}
        <ul className="hidden md:flex gap-6 text-gray-200 font-medium">
          {links.map((link) => (
            <li key={link.to} className="relative group">
              <Link
                to={link.to}
                smooth={true}
                duration={600}
                offset={-80} // ajusta según la altura del navbar
                className="cursor-pointer hover:text-yellow-400 transition-colors"
              >
                {link.name}
              </Link>
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
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  onClick={() => setIsOpen(false)} // cerrar menú al dar clic
                  className="cursor-pointer hover:text-yellow-400 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
