import React, { useEffect, useState } from "react";
import { logo } from '../assets'
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
      if (scrollTop > 780) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="relative h-16">
    <nav className={`${style.navbar} ${scrolled ? 'fixed' : ''}`}>
      <Link onClick={() => { window.scrollTo(0, 0); }} >
        <img src={logo} alt='Rhaegar121' className={style.logo} />
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
          <a href='https://drive.google.com/file/d/12IxQRP5r8ODJ8Tv_aUZ4tCljZ85Z2--j/view?usp=sharing' target=" blank" className={style.font}>Resume</a>
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
      className={`${style.mobilemenu} ${isOpen ? "h-screen" : "h-0"}`}
    >
        <li 
          key="about"
          // className='mt-20'
          className={`${ active === "About" ? "text-cyan" : "text-grey" } mt-20`}
          onClick={() => {
            setActive("About");
            handleMenuClick();
          }}
        >
          <a href={`#about`} className={style.font}>About</a>
        </li>
        <li 
          key="work"
          className={ active === "Work" ? "text-cyan" : "text-grey" }
          onClick={() => {
            setActive("Work");
            handleMenuClick();
          }}
        >
          <a href={`#work`} className={style.font}>Work</a>
        </li>
        <li 
          key="testimonials"
          className={ active === "Testimonials" ? "text-cyan" : "text-grey" }
          onClick={() => {
            setActive("Testimonials");
            handleMenuClick();
          }}
        >
          <a href={`#testimonials`} className={style.font}>Testimonials</a>
        </li>
        <li 
          key="contact"
          className={ active === "Contact" ? "text-cyan" : "text-grey" }
          onClick={() => {
            setActive("Contact");
            handleMenuClick();
          }}
        >
          <a href={`#contact`} className={style.font}>Contact</a>
        </li>
        <li className={style.resume}>
          <a href='https://drive.google.com/file/d/12IxQRP5r8ODJ8Tv_aUZ4tCljZ85Z2--j/view?usp=sharing' target=" blank" className={style.font}>Resume</a>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar