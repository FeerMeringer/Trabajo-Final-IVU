import React, { useState } from 'react';
import './unidadCuatro.css'

export default function UnidadCuatro() {
  const [abierto, setAbierto] = useState(false);
  const [abiertoA, setAbiertoA] = useState(false);
  const [abiertoB, setAbiertoB] = useState(false);
  const [abiertoC, setAbiertoC] = useState(false);
  const [abiertoD, setAbiertoD] = useState(false);

  const titulo = "Lectura Comprensiva y Subrayado de Textos";
  const descripcion = "La lectura comprensiva y el subrayado de textos son dos prácticas esenciales en el proceso de estudio. La lectura comprensiva va más allá de simplemente pasar los ojos por las palabras; implica una comprensión profunda del contenido. Se divide en tres fases: antes, durante y después de la lectura. Antes de leer, es crucial establecer objetivos y comprender la estructura del texto. Durante la lectura, se deben hacer preguntas, marcar palabras clave y relacionar la información con el conocimiento previo. Después de la lectura, se realiza un resumen y se responden preguntas.Por otro lado, el subrayado de textos es una técnica que complementa la lectura comprensiva. Permite resaltar las partes más importantes del texto utilizando diferentes colores y estilos para indicar distintos tipos de información. Esto facilita la revisión y el repaso del material, ya que se puede identificar rápidamente la información clave. En conjunto, estas prácticas fomentan un aprendizaje más efectivo al mejorar la comprensión, la retención y la aplicación de la información.";
  const tituloUno = 'Glosario';
  const descripcionUno = 'El glosario es una herramienta fundamental para comprender y retener información en la universidad. Consiste en un conjunto de palabras clave acompañadas de sus definiciones, ordenadas alfabéticamente. Al crear un glosario, los estudiantes pueden definir términos específicos de sus asignaturas y ampliar su vocabulario. Esta técnica de estudio es importante porque ayuda a manejar la comprensión global del texto y facilita la consulta de conceptos clave cuando sea necesario. Para hacer un glosario efectivo, es crucial seguir algunos pasos clave:Leer atentamente el texto y identificar las palabras que necesitan ser definidas.Ordenar y transcribir las palabras en un cuaderno.Buscar los significados de las palabras y escribir sus definiciones utilizando tus propias palabras. Organizar el glosario por asignatura para facilitar su consulta.Para crear un glosario, necesitarás materiales básicos como un cuaderno, lapiceras y un diccionario, además de acceso al texto específico de la asignatura y tus apuntes. Esta técnica te ayudará a mejorar tu comprensión de los textos universitarios y a consolidar tu aprendizaje.'
  const tituloDos = 'Resumen'
  const descripcionDos = 'Un resumen es una versión abreviada que contiene los puntos clave y conceptos principales de un texto. Se utiliza como técnica de estudio y aprendizaje por varias razones: Simplifica la información, centrándose en lo más importante. Desarrolla el enfoque, la concentración y la capacidad lectora. Facilita la comprensión al reescribir el contenido con tus propias palabras.Independiza la información del texto original, reduciendo los tiempos de estudio.Permite a los docentes evaluar la comprensión de los estudiantes. Para hacer un resumen efectivo, sigue estos pasos: Dispon de un cuaderno o dispositivo para registrar el nombre y autor del texto. Marca los conceptos principales y definiciones, usando resaltadores o anotaciones. Señala palabras desconocidas y busca su significado. Transcribe la información destacada, eliminando conectores y detalles innecesarios. Revisa y corrige el resumen, asegurándote de que sea coherente y claro, y de que la ortografía sea correcta. Puedes leerlo en voz alta o compartirlo con un compañero. Marca el texto según tu estilo personal para estudiarlo más fácilmente.'
  const tituloTres = 'Toma de Apuntes';
  const descripcionTres = 'Tomar apuntes en clase es crucial para aprovechar el tiempo y consolidar el aprendizaje. Permite registrar la información clave, seguir la clase con atención y repasar el contenido posteriormente. Los apuntes sirven como registro escrito de lo tratado en clase, ayudan a recordar explicaciones y son material de estudio para exámenes. Para tomar buenos apuntes: Utiliza un cuaderno para cada materia y comienza cada sesión con la fecha y el tema. Escucha con atención y selecciona lo más importante para anotar. Escribe de forma clara y ordenada, dejando espacio para subrayar o ampliar más tarde. Puedes tomar apuntes literales o interactivos, adaptándote a tu estilo y facilitando la comprensión. Si algo no queda claro, pregunta al docente y registra las respuestas. Revisa y amplía tus apuntes después de la clase para corregir errores o agregar información relevante. Tomar apuntes es una tarea individual que implica diversas operaciones mentales, por lo que cada persona tiene su propio estilo. Es esencial consultar los apuntes para preparar exámenes y asegurarse de que sean lo más claros posible.';
  const tituloCuatro = 'Organización del Tiempo';
  const descripcionCuatro = 'La gestión del tiempo es una habilidad vital para los estudiantes universitarios. Implica más que simplemente estudiar antes de los exámenes: es una rutina diaria de estudio equilibrada. Comienza con un organizador semanal que detalla actividades regulares y plazos de entrega. Identificar momentos óptimos para estudiar y mantener el material organizado son clave. La flexibilidad también es crucial para adaptarse a imprevistos. En resumen, una buena gestión del tiempo requiere planificación, disciplina y adaptabilidad.';

  return (
    <section className='imagenFondoCuatro'>
    <div className='unidadCuatro'>
      <h1> Tecnicas De Estudio</h1>
      <div className='tecnicas'>
      <h3>¿Qué son Las tecnicas De Estudio?</h3>
      <p>Las técnicas de estudio son estrategias y métodos utilizados por los estudiantes para mejorar su proceso de aprendizaje y rendimiento académico. Estas técnicas abarcan una variedad de enfoques, desde la organización del tiempo y la toma de apuntes hasta la lectura comprensiva, el subrayado de textos, la elaboración de resúmenes y la práctica de la memoria, entre otros. El objetivo principal de las técnicas de estudio es optimizar la comprensión, retención y aplicación del material de estudio, lo que ayuda a los estudiantes a alcanzar sus objetivos educativos de manera más efectiva.</p>
      </div>
    <div className="cardA">
      <h2 onClick={() => setAbierto(!abierto)}>{titulo}</h2>
      {abierto && <p>{descripcion}</p>}
    </div>
    <div className="cardA">
      <h2 onClick={() => setAbiertoA(!abiertoA)}>{tituloUno}</h2>
      {abiertoA && <p>{descripcionUno}</p>}
    </div>
    <div className="cardA">
      <h2 onClick={() => setAbiertoB(!abiertoB)}>{tituloDos}</h2>
      {abiertoB && <p>{descripcionDos}</p>}
    </div>
    <div className="cardA">
      <h2 onClick={() => setAbiertoC(!abiertoC)}>{tituloTres}</h2>
      {abiertoC && <p>{descripcionTres}</p>}
    </div>
    <div className="cardA">
      <h2 onClick={() => setAbiertoD(!abiertoD)}>{tituloCuatro}</h2>
      {abiertoD && <p>{descripcionCuatro}</p>}
    </div>
    </div>
    </section>
  );
}



