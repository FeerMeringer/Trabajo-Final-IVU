import React, { useState } from 'react';
import './unidadUno.css';

export default function UnidadUno() {
  const [modalContent, setModalContent] = useState(null);
  const [modalContentA, setModalContentA] = useState(null);
  const [modalTitle, setModalTitle] = useState('');

  
  const openModal = (content) => {
    setModalContent(content);
  };

  const openModalA = (content) => {
    setModalContentA(content);
  };

  const closeModal = () => {
    setModalContent('');
    setModalContentA('');
  };


  const events = [
    {
      date: '1968',
      title: 'Reunión del Consejo del Plata',
      description: 'Acuerdo para la descentralización territorial de las universidades nacionales en Argentina.',
    },
    {
      date: '1972',
      title: 'Creación de la Universidad Provincial de La Rioja',
      description: 'Mediante el Decreto N° 28.309/72 del Poder Ejecutivo Provincial.',
    },
    {
      date: '1993',
      title: 'Creación de la Universidad Nacional de La Rioja (UNLaR)',
      description: 'Sancionada por la Ley N° 24.299.',
    },
    {
      date: '2003',
      title: 'Creación de la UNdeC',
      description: 'La Universidad Nacional de Chilecito se crea en respuesta a una demanda social del Oeste de la Provincia de La Rioja.',
    },
    {
      date: '2006',
      title: 'Inicio de actividades de la UNdeC',
      description: 'Comienza sus actividades con 10 carreras de grado, 2050 estudiantes, 3 egresados, 172 docentes, 90 nodocentes y un pequeño campus en el distrito de Los Sarmientos.',
    },
    {
      date: '2010',
      title: 'Inicio de actividades del Colegio Nacional Agrotécnico',
      description: 'Se inicia la actividad académica en la localidad de Tilimuqui.',
    },
    {
      date: '2011',
      title: 'Elecciones de claustros',
      description: 'Se llevan a cabo por primera vez las elecciones de los claustros docente, nodocente y estudiantil.',
    },
    {
      date: '2017',
      title: 'Segunda Asamblea Universitaria',
      description: 'Reelección del Ing. Norberto Caminoa como Rector.',
    },
    {
      date: '2021',
      title: 'Cambio de Rectorado',
      description: 'El Dr. Antequera asume el Rectorado, con mandato vigente hasta marzo de 2023.',
    },
  ];
  const servicioIngreso = 'Planifica y organiza acciones para los aspirantes e ingresantes, incluyendo un curso de nivelación y acompañamiento durante el primer año.';
  const servicioTutorias ='Ofrece orientación y apoyo desde el ingreso hasta el primer año de cursada, con actividades para mejorar estrategias de estudio y resolver dudas académicas.';
  const servicioBecas = 'Proporciona información y acceso a becas nacionales vigentes, como Progresar, y ofrece asesoramiento sobre requisitos y trámites.';
  const areaAccesibilidad = 'Trabaja por la inclusión de estudiantes con discapacidad, ofreciendo apoyo, asesoramiento y promoviendo la sensibilización en la comunidad universitaria.';
  const servicioOrientacion = 'Brinda asesoramiento personalizado a estudiantes próximos a ingresar a la universidad y a aquellos que necesitan orientación sobre su elección vocacional.';
  const comisionGenero = 'Orientada a prevenir situaciones de violencia de género y promover una cultura institucional de equidad e igualdad.';
  const biblioteca = 'Ofrece servicios de consulta de material bibliográfico para estudiantes, docentes y personal de la universidad, incluyendo préstamo en sala y a domicilio, préstamo interbibliotecario, y orientación en la búsqueda de información.'; 



  const reglamentoIngreso = `
  Capítulo I. Ingreso.
  Artículo 2: Condiciones generales de ingreso: Para ingresar a la Universidad Nacional de
  Chilecito los estudiantes deberán haber aprobado el nivel medio de enseñanza. Presentar la
  documentación y llenar los formularios correspondientes en fechas y horarios estipuladas.
  Si tienes más de 25 años y no has completado el nivel secundario, consultar al Área de
  Ingreso: infoingreso@undec.edu.ar

`;

  const reglamentoLegajo = `
  Es muy importante presentar toda la documentación solicitada en el momento de
  inscribirte y completar “tu legajo”. Para recibir tu título de secundaria no tienes que adeudar
  ninguna materia previa de la secundaria.
  Es indispensable completar el legajo porque te permite ser estudiante de la universidad,
  por lo tanto, podrás:
  - inscribirte para rendir exámenes finales,
  - hacer salidas de campo (ya que siendo estudiante tienes seguro),
  - solicitar constancia como estudiante regular para presentar en la Obra Social y para la Asignación Familiar (continuidad de estudios).
  - y más... Inscripciones
  Antes de iniciar el cuatrimestre, lo fundamental es que te inscribas para cursar cada
  asignatura. Este trámite es online.
`;


  const reglamentoInscripciones = `
  Capítulo III. Inscripciones.
  Artículo 10: Inscripción inicial en las asignaturas: Los estudiantes se anotarán mediante
  formularios en las asignaturas iniciales del plan de estudios.
  Artículo 11: Inscripciones siguientes. El estudiante podrá inscribirse en las asignaturas (del
  segundo cuatrimestre) dándole cumplimiento al régimen de correlatividades del plan de
  estudio.
`;

  const reglamentoRegularidad = `
  Capítulo V. Régimen de regularidad.
  Artículo 15: Requisitos para alcanzar condición de estudiante regular: Contar con una
  asistencia del 75 % (setenta y cinco por ciento). Haber aprobado los exámenes parciales y/o
  integradores cuando correspondiere establecidos en la planificación de la asignatura. Los
  exámenes parciales en cada asignatura serán 2 (dos) y deberán contar con la posibilidad de 1
  (un) recuperatorio para cada parcial.
  Artículo 16: Duración de la regularidad: la misma tendrá una validez de DOS AÑOS (2)
  corridos de calendario académico y UN turno de examen. Finalizando dicho plazo y para
  recuperar tal condición.
`;

  // Continúa con el resto de los textos del reglamento de acuerdo a tus necesidades

  const reglamentoCorrelatividades = `
  Capítulo VI. Correlatividades.
  Artículo 20: Correlatividades para cursar: La aceptación de la inscripción en una asignatura
  mediante el régimen de regularidad deberá efectuarse respetando los requisitos de
  correlatividad previstos en el plan de estudios.
  Artículo 21: Correlatividades para rendir examen final: El régimen de correlatividad del plan
  de estudio deberá respetarse para dar exámenes finales.
`;

  const reglamentoEvaluaciones = `
  Capítulo IX. Evaluaciones.
  Artículo 29: Promoción sin examen final: Este sistema consiste en dar la asignatura por
  aprobada sin la obligación de rendir examen final a aquellos estudiantes que en los exámenes
  parciales obtengan una calificación igual o superior a 7 (siete) puntos.
  Artículo 30: Exámenes libres: Se aplicará prueba escrita y oral. La calificación final será el
  promedio de las calificaciones de las dos pruebas, siempre que ambas hayan resultado
  aprobadas.
`;


  return (
    <div className='unidadUno'>
      <h1>UNdeC: historia y organización</h1>
      <div className="timeline">
        {events.map((event, index) => (
          <div className="event" key={index}>
            <h3 onClick={() => openModal(event.description)}>{event.date}</h3>
            <div className="content">
              <p>{event.title}</p>
            </div>
          </div>
        ))}
        {modalContent && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <p>{modalContent}</p>
            </div>
          </div>
        )}
      </div>

      <div className='tarjetas'>
        <h2 className='tituloDos'>Oferta Académica</h2>
        <div className="card">
          <img src="https://i.ibb.co/r3xVbRG/img13.jpg" alt="Placeholder Image" />
          <div className="card-content">
            <h3>Escuela de Ciencias
              Naturales /
              Dra. Susana Beatriz
              Popich</h3>
            <table>
              <tbody>
                <tr>
                  <td>Ing. Agronómica</td>
                  <td>Ing. Juan José Meleh</td>
                </tr>
                <tr>
                  <td>Licenciatura en Enología</td>
                  <td>Dr. Rodolfo Griguol</td>
                </tr>
                <tr>
                  <td>Sommelier Universitario</td>
                  <td>Dr. Rodolfo Griguol</td>
                </tr>
                <tr>
                  <td>Tecnicatura Universitaria en Análisis de
                    Alimentos</td>
                  <td>Dra. Mariana Varas</td>
                </tr>
                <tr>
                  <td>Licenciatura en Ciencias Biológicas</td>
                  <td>Dra. Susana BeatrizPopich</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card">
          <img src="https://i.ibb.co/r3xVbRG/img13.jpg" />
          <div className="card-content">
            <h3>Escuela de Ciencias
              Humanas y de la Salud /
              Lic. Irene Soteras</h3>
            <table>
              <tbody>
                <tr>
                  <td>Profesorado Universitario en Biología</td>
                  <td>Lic. Irene Soteras</td>
                </tr>
                <tr>
                  <td>Profesorado de Nivel Medio y Superior en
                    Economía</td>
                  <td>Lic. Irene Soteras</td>
                </tr>
                <tr>
                  <td>Ciclo de Licenciatura en Educación Primaria</td>
                  <td>Lic. Irene Soteras</td>
                </tr>
                <tr>
                  <td>Ciclo de Licenciatura en Nivel Inicial</td>
                  <td>Lic. Irene Soteras</td>
                </tr>
                <tr>
                  <td>Ciclo de Licenciatura en Educación Especial</td>
                  <td>Lic. Irene Soteras</td>
                </tr>
                <tr>
                  <td>Licenciatura en Enfermería</td>
                  <td>Lic. Mirta Seco</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card">
          <img src="https://i.ibb.co/r3xVbRG/img13.jpg" />
          <div className="card-content">
            <h3>Escuela de Ciencias
              Sociales / Ab. Pablo
              Flaim</h3>
            <table>
              <tbody>
                <tr>
                  <td>Licenciatura en Turismo y Desarrollo Social</td>
                  <td>Lic. Omar Palacios</td>
                </tr>
                <tr>
                  <td>Tecnicatura Universitaria en Gestión de Emprendimientos Turísticos</td>
                  <td>Lic. Omar Palacios</td>
                </tr>
                <tr>
                  <td>Guía Universitario de Turismo</td>
                  <td>Lic. Omar Palacios</td>
                </tr>
                <tr>
                  <td>Licenciatura en Comunicación Social</td>
                  <td>Lic. Marcos Icardi</td>
                </tr>
                <tr>
                  <td>Abogacía</td>
                  <td>Ab. Norma González Ribot</td>
                </tr>
                <tr>
                  <td>Licenciatura en Economía</td>
                  <td>Dra. Gabriela Starobinsky </td>
                </tr>
                <tr>
                  <td>Tecnicatura Universitaria en Administración</td>
                  <td>Dra. Gabriela Starobinsky</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card">
          <img src="https://i.ibb.co/r3xVbRG/img13.jpg" />
          <div className="card-content">
            <h3>Escuela de Ingeniería / Ing. Enrique Nicolás Martínez</h3>
            <table>
              <tbody>
                <tr>
                  <td>Ingeniería en Sistemas</td>
                  <td>Ing. Enrique Nicolás Martínez</td>
                </tr>
                <tr>
                  <td>Tecnicatura Universitaria en Desarrollo de Aplicaciones Web</td>
                  <td>Ing. Enrique Nicolás Martínez</td>
                </tr>
                <tr>
                  <td>Licenciatura en Sistemas</td>
                  <td>Ing. Enrique Nicolás Martínez</td>
                </tr>
                <tr>
                  <td>Ingeniería Mecatrónica</td>
                  <td>Ing. Elvio Sigampa Páez</td>
                </tr>
                <tr>
                  <td>Tecnicatura Universitaria en Topología</td>
                  <td>Ing. Julio Salerno</td>
                </tr>
                <tr>
                  <td>Ingeniería en Agrimensura</td>
                  <td>Ing. Julio Salerno</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="map-container">
  <h2 className='tituloDos'>Reglamento De Alumnos</h2>
  <div className="reglamento-buttons">
    <button  onClick={() => openModal(reglamentoIngreso)}>Ingreso</button>
    <button className='legajo' onClick={() => openModal(reglamentoLegajo)}>Legajo</button>
    <button onClick={() => openModal(reglamentoInscripciones)}>Inscripciones</button>
    <div>
    <img className='reglas' src="https://i.ibb.co/k8XtG3B/reglas.png" alt="" />
  </div>
    <button className='legajo' onClick={() => openModal(reglamentoRegularidad)}>Regularidad</button>
    <button onClick={() => openModal(reglamentoCorrelatividades)}>Correlatividades</button>
    <button className='legajo' onClick={() => openModal(reglamentoEvaluaciones)}>Evaluaciones</button>
  </div>

  {modalContentA && (
    <div className="modalA">
      <div className="modal-contentA">
        <span className="closeA" onClick={closeModal}>&times;</span>
        <p>{modalContentA}</p>
      </div>
    </div>
  )}
</div>
<div className="map-container">
  <h2 className='tituloDos'>Servicios de la UNdeC para los estudiantes</h2>
  <div className="reglamento-buttons">
    <button  onClick={() => openModal(servicioIngreso)}>Servicio de Ingreso</button>
    <button className='legajo' onClick={() => openModal(servicioTutorias)}>Servicio de Tutorías Estudiantiles</button>
    <button onClick={() => openModal(servicioBecas)}>Servicio de Becas</button>
    <div>
    <div className="containerB">
  <img className='reglas' src="https://i.ibb.co/phmct93/biblio.jpg" alt="" />
  <button className='areaButton' onClick={() => openModal(biblioteca)}>Biblioteca</button>
</div>
    
  </div>
    <button className='legajo' onClick={() => openModal(areaAccesibilidad)}>Área de Accesibilidad y Discapacidad</button>
    <button onClick={() => openModal(servicioOrientacion)}>Servicio de Orientación Vocacional</button>
    <button className='legajo' onClick={() => openModal(comisionGenero)}>Comisión de Género y Diversidad</button>
  </div>

  {modalContentA && (
    <div className="modalA">
      <div className="modal-contentA">
        <span className="closeA" onClick={closeModal}>&times;</span>
        <p>{modalContentA}</p>
      </div>
    </div>
  )}
</div>
</div>
  );
}
