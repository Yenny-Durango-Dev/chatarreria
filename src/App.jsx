import React from 'react'
import Navbar from './componets/Navbar'
import Footer from './componets/Footer'
import Inicio from './pages/Inicio'
import Servicios from './pages/Servicios'
import Precios from './pages/Precios'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'

function App() {
  return (
    <main>
      <Navbar />
      <Inicio />
      <Servicios />
      <Precios />
      <Nosotros />
      <Contacto />
      <Footer />
    </main>
  )
}

export default App