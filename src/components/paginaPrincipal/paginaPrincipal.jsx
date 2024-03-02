import React from 'react';
import { Carousel } from 'react-bootstrap';
import './paginaPrincipal.css';

export default function PaginaPrincipal() {
  return (
    <div className='pagina'>
      <h1 className='tituloPrincipal'>Introducción a la Vida Universitaria</h1>
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block"
              src="https://i.ibb.co/nRyHBLz/img9-1.jpg"
              alt="First slide"
              width="700"
              height="400"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src="https://i.ibb.co/d7pPhZ9/img3-1.jpg"
              alt="Second slide"
              width="700"
              height="400"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src="https://i.ibb.co/P4KN4ck/img4-1.jpg"
              alt="Third slide"
              width="700"
              height="400"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src="https://i.ibb.co/sjnrZt7/img5.png"
              alt="First slide"
              width="700"
              height="400"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="container">
        <div className="image-container">
          <img src="https://i.ibb.co/LNgyJ8n/img10.jpg" alt="Imagen de la vida universitaria" />
        </div>
        <div className="text-container">
          <h2>¡Bienvenido a la Universidad!</h2>
          <p>Ingresar a la universidad marca el comienzo de una nueva aventura llena de desafíos y oportunidades emocionantes. Este recurso está aquí para acompañarte en tu primer año y ayudarte a navegar por la vida universitaria. Prepárate para aprender, crecer y descubrir todo lo que la universidad tiene para ofrecer.</p>
        </div>
      </div>
      <div className="containerDos">
  <div className="text-containerA">
    <h2>Programa de Tutorías: Acompañamiento Universitario</h2>
    <p>El Programa de Tutorías ofrece orientación y apoyo integral a los estudiantes durante su primer año universitario. A través de sesiones presenciales y virtuales, se brinda asesoramiento en aspectos académicos, emocionales y profesionales, facilitando la adaptación al entorno universitario y promoviendo el éxito estudiantil.</p>
  </div>
  <div className="image-container">
    <img src="https://i.ibb.co/7rtKT3J/img12.png" alt="Imagen de la vida universitaria" />
  </div>
</div>



      <div className="tabla-container">
        <h2 className='segundoTitulo'>Equipo docente del servicio de tutorias estudiantiles</h2>
        <table className="tabla">
          <tbody>
            <tr>
              <td>Coordinadora</td>
              <td>Monica Moyano</td>
              <td>tutoria@undec.edu.ar <br />
                mmoyano@undec.edu.ar</td>
            </tr>
            <tr>
              <td rowSpan="8">Tutores integrales</td>
              <td>Claudia Elena Palacios</td>
              <td>cpalacios@undec.edu.ar</td>
            </tr>
            <tr>
              <td>Carina Inés Zapata</td>
              <td>czapata@undec.edu.ar</td>
            </tr>
            <tr>
              <td>Vanessa Avalos</td>
              <td>mrvanessa22@gmail.com</td>
            </tr>
            <tr>
              <td>Estefanía Gaitán</td>
              <td>cgaitan@undec.edu.ar</td>
            </tr>
            <tr>
              <td>Jessica Elizabeth Álvarez</td>
              <td>jealvarez@undec.edu.ar</td>
            </tr>
            <tr>
              <td>Ángeles Caliva</td>
              <td>macaliva@undec.edu.ar</td>
            </tr>
            <tr>
              <td>Liliana Záttera</td>
              <td>ezattera@undec.edu.ar</td>
            </tr>
            <tr>
              <td>Ana Delia Valles</td>
              <td>avalles@undec.edu.ar</td>
            </tr>
            <tr>
              <td rowSpan="6">Tutores Diciplinares</td>
              <td>Maricel Yáñez</td>
              <td>gyanez@undec.edu.ar</td>
            </tr>
            <tr>
              <td>Diego Espinós</td>
              <td>despinosundec@gmail.com</td>
            </tr>
            <tr>
              <td>Guillermo Enzalate</td>
              <td>genzalate@undec.edu.ar</td>
            </tr>
            <tr>
              <td>Florencia Arena</td>
              <td>florenciaa.arenaa@gmail.com</td>
            </tr>
            <tr>
              <td>Fabián Gordillo</td>
              <td>fa01@live.com.ar</td>
            </tr>
            <tr>
              <td>Silvana Malek</td>
              <td>smalek@undec.edu.ar</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>

  );
}








