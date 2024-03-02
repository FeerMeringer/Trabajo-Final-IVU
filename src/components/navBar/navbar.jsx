import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Enlace al componente PaginaPrincipal */}
        <h3><Link to="/">IVU</Link></h3>
      </div>
      <div className="navbar-center">
        <ol className="unidades">
          <li><Link to="/unidad/1">Unidad 1</Link></li>
          <li><Link to="/unidad/2">Unidad 2</Link></li>
          <li><Link to="/unidad/3">Unidad 3</Link></li>
          <li><Link to="/unidad/4">Unidad 4</Link></li>
        </ol>
      </div>
      <div className="navbar-right">
        <img src="https://i.ibb.co/3NBGfXk/logo-Undec.jpg" alt='logo' />
      </div>
    </nav>
  );
}




