import { useState, useEffect } from 'react'
import logo from '../assets/logo.svg'


function Header() {
  const [isToggled, setIsToggled] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('nav-open', isToggled);
  }, [isToggled]);

  function handleClick() {
    setIsToggled(!isToggled);
  }

  function handleLinkClick() {
    setIsToggled(false);
  }


  return (
    <header>
      <div className='logo'>
        <img src={logo} alt="" />
      </div>
      <button className="nav-toggle"
      aria-label="toggle navigation" onClick={handleClick}>
        <span className="hamburger"></span>
      </button>
      <nav className={isToggled ? "nav-open nav" : "nav"}>
        <ul className="nav__list">
          <li className="nav__item"><a href="#home" className="nav__link" onClick={handleLinkClick}>Home</a></li>
          <li className="nav__item"><a href="#services" className="nav__link" onClick={handleLinkClick}>My Services</a></li>
          <li className="nav__item"><a href="#about" className="nav__link" onClick={handleLinkClick}>About me</a></li>
          <li className="nav__item"><a href="#work" className="nav__link" onClick={handleLinkClick}>My Work</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
