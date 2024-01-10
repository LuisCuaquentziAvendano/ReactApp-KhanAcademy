import '../styles/Section.css';

function Section( {subjects, image, title} ) {
  return (
    <div className='section'>
      <img className='section-image' src={image} alt={title} />
      <h2 className='section-title' >{title}</h2>
      <div className='center section-subjects' >
        {subjects.map((text, index) => (
          <div key={index} className='section-item'>
            <div className='section-shown-container'>
              <a href='/' className='section-shown'>
                {text}
              </a>
            </div>
            <p className='section-hidden'>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section;
