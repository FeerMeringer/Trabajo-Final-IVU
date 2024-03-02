import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaPrincipal from '../components/paginaPrincipal/paginaPrincipal';
import UnidadUno from '../components/unidadUno/unidadUno';
import NavBar from '../components/navBar/navbar';
import Footer from '../components/footer/footer'; // Importa el componente Footer

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/unidad/1" element={<UnidadUno />} />
          {/* Agrega más rutas aquí según sea necesario */}
        </Routes>
        <Footer /> {/* Agrega el componente Footer */}
      </div>
    </Router>
  );
}





