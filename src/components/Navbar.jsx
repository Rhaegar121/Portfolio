import React from 'react';
import logo from '../assets/logo-no-background.png';
import style from './styles/navbar.module.css';

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div>
        <img src={logo} alt='logo' className={style.logo} />
      </div>
      <ul className={style.navlink}>
        <li>About</li>
        <li>Work</li>
        <li>Testimonials</li>
        <li>Contact</li>
        <li>Resume</li>
      </ul>
    </nav>
  )
}

export default Navbar