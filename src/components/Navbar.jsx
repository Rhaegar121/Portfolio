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
      const scrollTop = window.pageYOffset;
      if (scrollTop > 810) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
    <nav className={`${style.navbar} ${scrolled ? style.fixed : ''}`}>
      <Link onClick={() => { window.scrollTo(0, 0); }} >
        <img src={logo} alt='logo' className={style.logo} />
      </Link>

      {/* desktop navlink */}
      <ul className={style.navlink}>
        <li 
          key="about"
          className={ active === "About" ? "text-cyan" : "text-grey" }
          onClick={() => setActive("About")}
        >
          <a href={`#about`} className={style.font}>About</a>
        </li>
        <li 
          key="work"
          className={ active === "Work" ? "text-cyan" : "text-grey" }
          onClick={() => setActive("Work")}
        >
          <a href={`#work`} className={style.font}>Work</a>
        </li>
        <li 
          key="testimonials"
          className={ active === "Testimonials" ? "text-cyan" : "text-grey" }
          onClick={() => setActive("Testimonials")}
        >
          <a href={`#testimonials`} className={style.font}>Testimonials</a>
        </li>
        <li 
          key="contact"
          className={ active === "Contact" ? "text-cyan" : "text-grey" }
          onClick={() => setActive("Contact")}
        >
          <a href={`#contact`} className={style.font}>Contact</a>
        </li>
        <li className={style.resume}>
          <a href={`#resume`} className={style.font}>Resume</a>
        </li>
      </ul>

      {/* hamburger menu */}
      <ul className={style.hamburger} onClick={handleMenuClick}>
        <li className={`${style.line} ${isOpen ? style.open : ""}`}></li>
        <li className={`${style.line} ${isOpen ? style.open : ""}`}></li>
        <li className={`${style.line} ${isOpen ? style.open : ""}`}></li>
      </ul>

      {/* mobile menu */}
      <ul 
      className={`${style.mobilemenu} ${isOpen ? "h-80" : "h-0"}`}
    >
        <li 
          key="about"
          className={ active === "About" ? "text-cyan" : "text-grey" }
          onClick={() => setActive("About")}
        >
          <a href={`#about`} className={style.font}>About</a>
        </li>
        <li 
          key="work"
          className={ active === "Work" ? "text-cyan" : "text-grey" }
          onClick={() => setActive("Work")}
        >
          <a href={`#work`} className={style.font}>Work</a>
        </li>
        <li 
          key="testimonials"
          className={ active === "Testimonials" ? "text-cyan" : "text-grey" }
          onClick={() => setActive("Testimonials")}
        >
          <a href={`#testimonials`} className={style.font}>Testimonials</a>
        </li>
        <li 
          key="contact"
          className={ active === "Contact" ? "text-cyan" : "text-grey" }
          onClick={() => setActive("Contact")}
        >
          <a href={`#contact`} className={style.font}>Contact</a>
        </li>
        <li className={style.resume}>
          <a href={`#resume`} className={style.font}>Resume</a>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar