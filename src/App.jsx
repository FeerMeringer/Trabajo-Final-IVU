import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaPrincipal from './components/paginaPrincipal/paginaPrincipal';
import UnidadUno from './components/unidadUno/unidadUno';
import UnidadDos from './components/unidadDos/unidadDos';
import UnidadTres from './components/unidadTres/unidadTres';
import UnidadCuatro from './components/unidadCuatro/unidadCuatro';
import NavBar from './components/navBar/navbar';
import Footer from './components/footer/footer';

export default function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/unidad/1" element={<UnidadUno />} />
          <Route path="/unidad/2" element={<UnidadDos />} />
          <Route path="/unidad/3" element={<UnidadTres />} />
          <Route path="/unidad/4" element={<UnidadCuatro />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}



