import React from 'react';
import logo from '../assets/logo-no-background.png';
import style from './styles/navbar.module.css';

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={logo} alt='logo' className={style.logo} />
      </div>
    </nav>
  )
}

export default Navbar