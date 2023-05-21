import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from "./components/Header";
import Intro from './components/Intro';
import Services from './components/Services';
import About from './components/About';
import Work from './components/Work';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);
  const { t, i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div className="App">
      <Header  t={t} handleClick={handleClick}/>
      <div className="langChoose">
        <button onClick={() => handleClick('en')} className='lang-button'>En</button>
        <button onClick={() => handleClick('rus')} className='lang-button'>Rus</button>
      </div>
      <Intro t={t} handleClick={handleClick}/>
      <Services t={t} handleClick={handleClick}/>
      <About t={t} handleClick={handleClick}/>
      <Work t={t} handleClick={handleClick}/>
      <Footer t={t} handleClick={handleClick}/>
    </div>
  );
}

export default App;

