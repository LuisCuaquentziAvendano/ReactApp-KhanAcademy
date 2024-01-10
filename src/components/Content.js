import Section from './Section.js';
import animacion from '../images/animacion.jpeg';
import ciencias from '../images/ciencias.png';
import principios from '../images/principios.png';
import programacion from '../images/programacion.png';

function Content() {
  const section1 = [
    'Introducción a JS: dibujo y animación',
    'JS avanzado: juegos y visualizaciones',
    'HTML/JS: hacer páginas web interactivas',
    'Introducción a HTML/CSS: hacer páginas web',
    'JS avanzado: simulaciones naturales',
    'Conoce al profesional',
    'Introducción a SQL: consulta y gestión de los datos',
    'HTML/JS: hacer páginas web interactivas con jQuery'
  ];
  const section2 = [
    'Algoritmos',
    'Criptografía',
    'Teoría de la información'
  ];
  const section3 = [
    'Información digital',
    'Análisis de datos',
    'Preparación para el examen',
    'Internet',
    'Simulaciones',
    'Mapeos a estándares de CSP AP',
    'Programación',
    'Seguridad de datos en línea',
    'Algoritmos',
    'Innovaciones en computación'
  ];
  const section4 = [
    'Orientación',
    'Efectos',
    'Modelado de personajes',
    'El arte de la iluminación',
    'Patrones',
    'Multitudes',
    'Simulación',
    'Articular',
    'Escenarios y puestas en escena',
    'La ciencia del color',
    'Animación',
    'Renderizado',
    'Cámaras virtuales',
    'Modelado del ambiente'
  ];
  return (
    <div className='content'>
      <Section title='Programación de computadoras'
                subjects={section1}
                image={programacion} />
      <Section title='Ciencias de la computación'
                subjects={section2}
                image={ciencias} />
      <Section title='Principios de ciencias de la computación avanzados (AP Computer Science Principles)'
                subjects={section3}
                image={principios} />
      <Section title='Animación digital'
                subjects={section4}
                image={animacion} />
    </div>
  );
}

export default Content;
