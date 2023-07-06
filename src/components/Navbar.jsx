import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
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
    <div className={style.navbar_container}>
    <nav className={`${style.navbar} ${scrolled ? 'fixed' : ''}`}>
      <Link onClick={() => { window.scrollTo(0, 0); }} >
        <img src={logo} alt='My logo' className={style.logo} />
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
        <li>
          <a href='https://drive.google.com/file/d/1gINzceqIwshNpYO_NqCS3vSQKAL1t_Hg/view?usp=sharing' target=" blank" className={style.resume_container}>
            <span className={style.resume_hover}>Resume</span>
            <span className={style.resume}>Resume</span>
          </a>
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
      variants={staggerContainer()}
      initial="hidden"
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`${style.mobilemenu} ${isOpen ? "h-screen flex" : "h-0"}`}
    >
        <li 
          key="about"
          className={`${ active === "About" ? style.mobile_active : "text-grey" } mt-20`}
          onClick={() => {
            setActive("About");
            handleMenuClick();
          }}
        >
          <motion.a
          href={`#about`}
          className={style.mobile_font}
          variants={fadeIn("right", "", 0.15, 1)}
          initial="hidden"
          whileInView='show'
          >About</motion.a>
        </li>
        <li 
          key="work"
          className={ active === "Work" ? style.mobile_active : "text-grey" }
          onClick={() => {
            setActive("Work");
            handleMenuClick();
          }}
        >
          <motion.a
          href={`#work`}
          className={style.mobile_font}
          variants={fadeIn("right", "", 0.25, 1)}
          initial="hidden"
          whileInView='show'
          >Work</motion.a>
        </li>
        <li 
          key="testimonials"
          className={ active === "Testimonials" ? style.mobile_active : "text-grey" }
          onClick={() => {
            setActive("Testimonials");
            handleMenuClick();
          }}
        >
          <motion.a
          href={`#testimonials`}
          className={style.mobile_font}
          variants={fadeIn("right", "", 0.35, 1)}
          initial="hidden"
          whileInView='show'
          >Testimonials</motion.a>
        </li>
        <li 
          key="contact"
          className={ active === "Contact" ? style.mobile_active : "text-grey" }
          onClick={() => {
            setActive("Contact");
            handleMenuClick();
          }}
        >
          <motion.a
          href={`#contact`}
          className={style.mobile_font}
          variants={fadeIn("right", "", 0.45, 1)}
          initial="hidden"
          whileInView='show'
          >Contact</motion.a>
        </li>
        <li>
          <motion.a
          variants={fadeIn("right", "", 0.55, 1)}
          initial="hidden"
          whileInView='show'
          href='https://drive.google.com/file/d/1gINzceqIwshNpYO_NqCS3vSQKAL1t_Hg/view?usp=sharing' 
          target=" blank" 
          className={`${style.resume_container} ${style.mobile_resume_container}`}
          >
            <span className={`${style.resume_hover} ${style.font}`}>Resume</span>
            <span className={`${style.resume} ${style.font}`}>Resume</span>
          </motion.a>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar