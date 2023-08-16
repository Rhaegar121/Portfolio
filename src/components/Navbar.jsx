import React, { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import { logo } from '../assets';
import { navLinks } from '../constants';
import style from './styles/navbar.module.css';

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [active, setActive] = useState('');
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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={style.navbar_container}>
      <nav className={`${style.navbar} ${scrolled ? 'fixed' : ''}`}>
        <button
          type="button"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="My logo" className={style.logo} />
        </button>

        {/* desktop navlink */}
        <ul className={style.navlink}>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={active === link.name ? 'text-cyan' : 'text-grey'}
            >
              <a
                href={link.url}
                className={style.font}
                onClick={() => setActive(link.name)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://drive.google.com/file/d/1gienfnTWEgMC_R2P7t-JVSQC9L_4lLxv/view?usp=sharing"
              target=" blank"
              className={style.resume_container}
            >
              <span className={style.resume_hover}>Resume</span>
              <span className={style.resume}>Resume</span>
            </a>
          </li>
        </ul>

        {/* hamburger menu */}
        <div
          className={style.hamburger}
          onClick={handleMenuClick}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleMenuClick();
            }
          }}
          role="button"
          tabIndex={0}
        >
          <span className={`${style.line} ${isOpen ? style.open : ''}`} />
          <span className={`${style.line} ${isOpen ? style.open : ''}`} />
          <span className={`${style.line} ${isOpen ? style.open : ''}`} />
        </div>

        {/* mobile menu */}
        <ul
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className={`${style.mobilemenu} ${isOpen ? 'h-screen opacity-100' : 'h-0'}`}
        >
          {navLinks.map((link, index) => (
            <li
              key={link.id}
              className={`${active === link.name ? style.mobile_active : 'text-grey'} ${index === 0 ? 'mt-32' : ''}`}
            >
              <motion.a
                href={link.url}
                className={style.mobile_font}
                variants={fadeIn('right', '', index * 0.2, 1)}
                initial="hidden"
                whileInView="show"
                onClick={() => {
                  setActive(link.name);
                  handleMenuClick();
                }}
              >
                {link.name}
              </motion.a>
            </li>
          ))}
          <li>
            <motion.a
              variants={fadeIn('right', '', 1, 1)}
              initial="hidden"
              whileInView="show"
              href="https://drive.google.com/file/d/1gienfnTWEgMC_R2P7t-JVSQC9L_4lLxv/view?usp=sharing"
              target=" blank"
              className={`${style.resume_container} ${style.mobile_resume_container}`}
            >
              <span className={`${style.resume_hover} ${style.font}`}>
                Resume
              </span>
              <span className={`${style.resume} ${style.font}`}>Resume</span>
            </motion.a>
          </li>
        </ul>
      </nav>
      <motion.div className={style.progress_bar} style={{ scaleX: scrollYProgress }} />
    </div>
  );
};

export default Navbar;
