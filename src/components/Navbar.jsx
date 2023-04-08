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
        <li className={style.font}>About</li>
        <li className={style.font}>Work</li>
        <li className={style.font}>Testimonials</li>
        <li className={style.font}>Contact</li>
        <li className={style.font}>Resume</li>
      </ul>
    </nav>
  )
}

export default Navbar