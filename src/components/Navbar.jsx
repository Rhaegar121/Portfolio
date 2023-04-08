import React, { useEffect, useState } from "react";
import logo from '../assets/logo-no-background.png';
import style from './styles/navbar.module.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={style.navbar}>
      <Link onClick={() => { window.scrollTo(0, 0); }} >
        <img src={logo} alt='logo' className={style.logo} />
      </Link>
      <ul className={style.navlink}>
        <li 
          key="about"
          className={`${ active === "About" ? "text-cyan" : "text-grey" } ${style.font}`}
          onClick={() => setActive("About")}
        >
          <a href={`#about`}>About</a>
        </li>
        <li 
          key="work"
          className={`${ active === "Work" ? "text-cyan" : "text-grey" } ${style.font}`}
          onClick={() => setActive("Work")}
        >
          <a href={`#work`}>Work</a>
        </li>
        <li 
          key="testimonials"
          className={`${ active === "Testimonials" ? "text-cyan" : "text-grey" } ${style.font}`}
          onClick={() => setActive("Testimonials")}
        >
          <a href={`#testimonials`}>Testimonials</a>
        </li>
        <li 
          key="contact"
          className={`${ active === "Contact" ? "text-cyan" : "text-grey" } ${style.font}`}
          onClick={() => setActive("Contact")}
        >
          <a href={`#contact`}>Contact</a>
        </li>
        <li className={`${style.resume} ${style.font}`}>
          <a href={`#resume`}>Resume</a>
        </li>
      </ul>
      <ul className={style.hamburger} onClick={handleMenuClick}>
        <li className={`${style.line} ${isOpen ? style.open : ""}`}></li>
        <li className={`${style.line} ${isOpen ? style.open : ""}`}></li>
        <li className={`${style.line} ${isOpen ? style.open : ""}`}></li>
      </ul>
    </nav>
  )
}

export default Navbar