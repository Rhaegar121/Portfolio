import React from 'react';
import logo from '../assets/logo-no-background.png';

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={logo} alt='logo' className='logo' />
      </div>
    </nav>
  )
}

export default Navbar