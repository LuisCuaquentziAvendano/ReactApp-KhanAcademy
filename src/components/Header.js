import '../styles/Header.css';
import khanAcademy from '../images/khanAcademy.png';
import { GoTriangleDown } from 'react-icons/go';
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';

function Header() {
  const [inputValue, setInputValue] = useState('');
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted data:', inputValue);
  };
  const handleInputChange = (event) => {
    if (event.target.value === 'Enter')
      handleFormSubmit(event);
    else
      setInputValue(event.target.value);
  };
  const handleCloseSearch = () => {
    handleInputFocus(false);
    setInputValue('');
  };

  const [titleHover, setTitleHover] = useState(false);
  const handleTitleHover = (value) => {
    setTitleHover(value)
  }
  const [headerHover, setHeaderHover] = useState(false);
  const handleHeaderHover = (value) => {
    setHeaderHover(value)
  }
  const [inputFocus, setInputFocus] = useState(false);
  const handleInputFocus = (value) => {
    setInputFocus(value)
  }
  
  const notDisplay = {
    'display': 'none'
  };
  const displayImage = {
    'display': 'inline'
  };
  let headerFocusStyle = inputFocus
    ? {
      'justifyContent': 'flex-start',
      'gap': '5rem',
      'marginLeft': '6rem'
    }
    : {};
  const headerStyle = {
    ...headerFocusStyle,
    'color': headerHover || inputFocus ? '#1865f2' : 'white',
    'backgroundColor': headerHover || inputFocus ? 'transparent' : '#0b2149'
  };
  const inputStyle = {
    'width': '30vw',
    'color': '#757593'
  };

  return (
    <div style={headerStyle}
          className='center header'
          onMouseEnter={() => handleHeaderHover(true)}
          onMouseLeave={() => handleHeaderHover(false)}>
      <IoMdClose size='2rem'
                  fill='#6f9ff7'
                  style={inputFocus ? {} : notDisplay}
                  onClick={handleCloseSearch} />

      <div className='center header-bigGap'>
        <button style={inputFocus ? notDisplay : {}}
                className='center header-smallGap'>
          <p>Cursos</p>
          <div className='header-button-image'>
            <GoTriangleDown size='1.5rem'
                            fill={headerHover ? '#1865f2' : '#808ba0'} />
          </div>
        </button>

        <form className='center header-search'
              onSubmit={handleFormSubmit} >
          <input name='inputValue'
                  value={inputValue}
                  type='text'
                  placeholder={inputFocus ? 'Busca cursos, habilidades y videos' : 'Buscar'}
                  className='header-input'
                  onChange={handleInputChange}
                  onFocus={() => handleInputFocus(true)}
                  style={inputFocus ? inputStyle : {}} />
          <button style={inputFocus ? displayImage : {}}
                  type='submit'
                  className='header-input-image'>
            <CiSearch size='1.5rem' />
          </button>
        </form>
      </div>

      <a style={inputFocus ? notDisplay : {}}
          href='/'
          onMouseEnter={() => handleTitleHover(true)}
          onMouseLeave={() => handleTitleHover(false)}
          className='center header-center header-smallGap'>
        <img className='header-image'
              src={khanAcademy}
              alt='Khan Academy' />
        <h1 className='header-title'
            style={(headerHover && !titleHover) ? {'color': 'black'} : {}} >Khan Academy</h1>
      </a>

      <div style={inputFocus ? notDisplay : {}} className='center header-bigGap'>
        <a href='/'>Haz una donación</a>
        <a href='/'>Inicia sesión</a>
        <a href='/'>Regístrate</a>
      </div>
    </div>
  );
}

export default Header;
