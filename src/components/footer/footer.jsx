import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'; // Importa tu archivo CSS para el footer

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        {/* Enlace a la página principal */}
        <h3><Link to="/">IVU</Link></h3>
      </div>
      <div className="footer-center">
        <p>Derechos de autor © 2024 IVU. Todos los derechos reservados.</p>
      </div>
      <div className="footer-right">
        <p>Contacto: ejemplo@ivu.com</p>
      </div>
    </footer>
  );
}
