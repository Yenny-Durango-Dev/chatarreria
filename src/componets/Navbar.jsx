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
                   bg-gradient-to-r from-[#303030] via-[#273848] to-[#303030] 
                   border-b-2 border-[#986F31]/50"
      >
        {/* Logo */}
        <div
          className="text-2xl font-extrabold tracking-wide 
                     bg-clip-text text-transparent 
                     bg-gradient-to-r from-[#D4D3CE] to-[#986F31] drop-shadow-lg"
        >
          Chatarrería La Paz
        </div>

        {/* Links desktop */}
        <ul className="hidden md:flex gap-6 text-[#D4D3CE] font-medium">
          {links.map((link) => (
            <li key={link.to} className="relative group">
              <Link
                to={link.to}
                smooth={true}
                duration={600}
                offset={-80}
                className="cursor-pointer hover:text-[#986F31] transition-colors"
              >
                {link.name}
              </Link>
              {/* Línea inferior en hover */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#986F31] transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa (mobile) */}
        <button
          className="md:hidden text-[#D4D3CE]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-[#303030] to-[#273848] shadow-md">
          <ul className="flex flex-col gap-4 px-6 py-4 text-[#D4D3CE] font-medium">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer hover:text-[#986F31] transition-colors"
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
