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
    <header className="fixed top-0 left-0 w-full z-50 bg-[#2E7D32] shadow-md">
      <nav className="flex items-center justify-between px-6 lg:px-12 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/LogoChatarreria.png"
            alt="Logo"
            className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
          />
          <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-wide">
            Chatarreria Los Puentes - 24 Horas
          </span>
        </div>

        {/* Links Desktop */}
        <ul className="hidden md:flex gap-8 lg:gap-12 text-white font-medium text-lg">
          {links.map((link) => (
            <li key={link.to} className="relative group">
              <Link
                to={link.to}
                smooth={true}
                duration={600}
                offset={-100}
                className="cursor-pointer transition-colors hover:text-[#FFD600]"
              >
                {link.name}
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#FFD600] transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={30} />
        </button>
      </nav>

      {/* Overlay móvil */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-[#2E7D32] shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-white/20">
          <span className="text-2xl font-bold text-white">Menú</span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-[#FFD600]"
          >
            <X size={32} />
          </button>
        </div>

        <ul className="flex flex-col gap-6 px-8 py-10 text-xl sm:text-2xl text-white font-semibold">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={600}
                offset={-100}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:text-[#FFD600] transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Fondo oscuro al abrir menú */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
