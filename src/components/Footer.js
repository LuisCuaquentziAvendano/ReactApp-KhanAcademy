import '../styles/Footer.css';

function Footer() {
  const column1 = [
    'Acerca de',
    'Noticias',
    'Impacto',
    'Nuestro equipo',
    'Nuestros pasantes',
    'Nuestros especialistas en contenido',
    'Nuestro liderazgo',
    'Nuestros patrocinadores',
    'Nuestros colaboradores',
    'Nuestras finanzas',
    'Bolsa de trabajo',
    'Pasantías'
  ];
  const column2 = [
    'Contacto',
    'Centro de ayuda',
    'Comunidad de apoyo',
    'Comparte tu historia',
    'Prensa',
  ];
  const column3 = [
    'Cursos',
    'Matemáticas',
    'Matemáticas: Cursos de preparación',
    'Matemáticas por grado',
    'Ciencia',
    'Econmía y finanzas',
    'Computación',
    'Mentalidad de Crecimiento',
    'Khan para Maestros'
  ];
  return (
    <div className='footer'>
      <div className='center footer-all-columns'>

        <div className='center footer-column footer-text'>
          <p>Nuestra misión es proporcionar una educación gratuita de clase mundial para cualquier persona en cualquier lugar.</p>
          <br className='footer-breakLine'/>
          <p>Khan Academy es una organización sin fines de lucro 501(c)(3). ¡Haz una donación o hazte voluntario hoy mismo!</p>
        </div>

        <div className='center footer-column'>
          {column1.map((text, index) => (
            <a className='footer-link'
                href='/'
                key={index}>
              {text}
            </a>
          ))}
        </div>

        <div className='center footer-column'>
          {column2.map((text, index) => (
            <a className='footer-link'
                href='/'
                key={index}>
              {text}
            </a>
          ))}
          <div className='footer-notShow footer-link'>0</div>
          <a className='footer-link' href='/' >
            Descarga nuestras apps
          </a>
        </div>

        <div className='center footer-column'>
          {column3.map((text, index) => (
            <a className='footer-link'
                href='/'
                key={index}>
              {text}
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Footer;
