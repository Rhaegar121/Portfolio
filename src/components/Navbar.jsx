import React from 'react';
import logo from '../assets/logo-no-background.png';
import style from './styles/navbar.module.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <Link
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <img src={logo} alt='logo' className={style.logo} />
      </Link>
      <ul className={style.navlink}>
        <li className={style.font}>
          <a href={`#about`}>About</a>
        </li>
        <li className={style.font}>
        <a href={`#work`}>Work</a>
        </li>
        <li className={style.font}>
        <a href={`#testimonials`}>Testimonials</a>
        </li>
        <li className={style.font}>
        <a href={`#contact`}>Contact</a>
        </li>
        <li className={style.font}>
        <a href={`#resume`}>Resume</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar