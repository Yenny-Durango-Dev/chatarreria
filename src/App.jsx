import { useState } from "react";
import { MapPin, Phone, MessageCircle, Menu, X } from "lucide-react";

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <header className="bg-green-700 text-white shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">Chatarrería</h1>
          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6">
            <a href="#servicios" className="hover:text-gray-200 transition">
              Servicios
            </a>
            <a href="#contacto" className="hover:text-gray-200 transition">
              Contacto
            </a>
          </nav>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden bg-green-600 p-4 space-y-2">
            <a
              href="#servicios"
              className="block hover:text-gray-200"
              onClick={() => setMenuOpen(false)}
            >
              Servicios
            </a>
            <a
              href="#contacto"
              className="block hover:text-gray-200"
              onClick={() => setMenuOpen(false)}
            >
              Contacto
            </a>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section
        className="flex-1 flex flex-col justify-center items-center text-center p-8 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/2625896/pexels-photo-2625896.jpeg')" }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-2xl text-white max-w-2xl">
          <h2 className="text-3xl font-semibold mb-4">
            ¿Tienes chatarra en casa o empresa?
          </h2>
          <p className="mb-6">
            Llámanos y la recogemos a domicilio. Trabajamos con hierro, cobre,
            aluminio y mucho más.
          </p>
          <button
            className="bg-green-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-green-500 transition"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Cerrar formulario" : "Contáctanos"}
          </button>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="bg-white py-12 px-6 text-center">
        <h3 className="text-2xl font-bold mb-8">Nuestros servicios</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <img
              src="https://img.freepik.com/foto-gratis/disposicion-objetos-sucios-arrojados_23-2148996943.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Compra de chatarra"
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <h4 className="font-semibold mb-2">Compra de chatarra</h4>
            <p className="text-sm text-gray-600">
              Compramos todo tipo de chatarra: hierro, cobre, aluminio y más.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <img
              src="https://thumbs.dreamstime.com/b/un-hombre-con-carro-recoge-la-chatarra-112760172.jpg"
              alt="Recogida a domicilio"
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <h4 className="font-semibold mb-2">Recogida a domicilio</h4>
            <p className="text-sm text-gray-600">
              Vamos hasta tu casa o empresa a recoger tu material sin costo.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <img
              src="https://balanzasdigitalesperu.com/wp-content/uploads/2019/08/tscale-bw-300.jpg"
              alt="Pesaje certificado"
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <h4 className="font-semibold mb-2">Pesaje certificado</h4>
            <p className="text-sm text-gray-600">
              Utilizamos básculas certificadas para garantizar transparencia.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <img
              src="https://img.freepik.com/fotos-premium/hombre-da-dinero-mujer_438099-3659.jpg"
              alt="Pago inmediato"
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <h4 className="font-semibold mb-2">Pago inmediato</h4>
            <p className="text-sm text-gray-600">
              Recibe tu dinero en efectivo o transferencia al instante.
            </p>
          </div>
        </div>
      </section>

      {/* Formulario */}
      {showForm && (
        <section className="bg-gray-50 p-6">
          <h3 className="text-lg font-semibold mb-4 text-center">Déjanos tu mensaje</h3>
          <form className="max-w-md mx-auto space-y-4">
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full p-3 border rounded-xl"
            />
            <textarea
              placeholder="Escribe tu mensaje..."
              className="w-full p-3 border rounded-xl"
              rows="4"
            />
            <button className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-500 transition">
              Enviar
            </button>
          </form>
        </section>
      )}

      {/* Contacto */}
      <footer
        id="contacto"
        className="bg-green-700 text-white p-6 mt-auto text-center"
      >
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://wa.me/573000000000"
            target="_blank"
            className="flex items-center gap-2"
          >
            <MessageCircle /> WhatsApp
          </a>
          <a href="tel:+573000000000" className="flex items-center gap-2">
            <Phone /> Llamar
          </a>
          <a
            href="https://maps.google.com?q=chatarreria+ejemplo"
            target="_blank"
            className="flex items-center gap-2"
          >
            <MapPin /> Ubicación
          </a>
        </div>
        <p>© 2025 Chatarrería Ejemplo</p>
      </footer>
    </div>
  );
}
