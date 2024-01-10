import '../styles/MainPage.css';
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';
import '../styles/Querys.css';

function MainPage() {
  return (
    <div>
      <div className='mainPage-header'><Header/></div>
      <h1 className='center mainPage-title'>Computación</h1>
      <Content/>
      <Footer/>
    </div>
  );
}

export default MainPage;
