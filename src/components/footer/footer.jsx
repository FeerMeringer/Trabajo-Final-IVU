import React from 'react';
import './footer.css'; // Importa tu archivo CSS para el footer

export default function Footer() {
  return (
    <section className='centro'>
    <footer className="footer">
    <div className="footer-left">
      <h5>Redes Sociales:</h5>
      <ul>
        <li><a href="https://web.facebook.com/undec/?locale=es_LA&_rdc=1&_rdr" target="_blank"><img className='redes' src="https://i.ibb.co/Ky3M77M/redes-F-removebg-preview.png" alt="Facebook"/></a></li>
        <li><a href="https://www.instagram.com/undec.oficial/" target='_blank'><img className='redes' src="https://i.ibb.co/Tk9Yj32/redes-I-removebg-preview.png" alt="Instagram"/></a></li>
        <li><a href="https://twitter.com/UNdeC" target='_blank'><img className='redes' src="https://i.ibb.co/MnXxPM9/tweet-removebg-preview.png" alt="Twitter"/></a></li>
        <li><a href="https://www.undec.edu.ar/" target='_blank'><img className='redes' src="https://i.ibb.co/nPWh5GL/logo-Undec-removebg-preview.png" alt="Página de la Uni"/></a></li>
      </ul>
    </div>
    <div className="footer-center">
      <h5>Desarrolladores:</h5>
      <ul>
        <li>Fernanda Meringer</li>
        <li>Benjamin Vega</li>
        <li>Luisana Martinez Illanes</li>
        <li>Martin Sebastián Alive</li>
      </ul>
    </div>
    <div className="footer-right">
      <h5>Dirección:</h5>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483.969270322753!2d-67.49738392517027!3d-29.165577791079183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x969d6386b24cc449%3A0x333d899b8667c241!2sUniversidad%20Nacional%20de%20Chilecito%20(UNdeC)!5e0!3m2!1ses-419!2sar!4v1709511985172!5m2!1ses-419!2sar"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
</footer>
</section>

  );
}
