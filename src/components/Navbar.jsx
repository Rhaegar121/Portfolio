import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import { logo } from '../assets';
import style from './styles/navbar.module.css';

const Navbar = () => {
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
          <li
            key="about"
            className={active === 'About' ? 'text-cyan' : 'text-grey'}
          >
            <a
              href="#about"
              className={style.font}
              onClick={() => setActive('About')}
            >
              About
            </a>
          </li>
          <li
            key="service"
            className={active === 'Service' ? 'text-cyan' : 'text-grey'}
          >
            <a
              href="#service"
              className={style.font}
              onClick={() => setActive('Service')}
            >
              Service
            </a>
          </li>
          <li
            key="work"
            className={active === 'Work' ? 'text-cyan' : 'text-grey'}
          >
            <a
              href="#work"
              className={style.font}
              onClick={() => setActive('Work')}
            >
              Work
            </a>
          </li>
          <li
            key="testimonials"
            className={active === 'Testimonials' ? 'text-cyan' : 'text-grey'}
          >
            <a
              href="#testimonials"
              className={style.font}
              onClick={() => setActive('Testimonials')}
            >
              Testimonials
            </a>
          </li>
          <li
            key="contact"
            className={active === 'Contact' ? 'text-cyan' : 'text-grey'}
          >
            <a
              href="#contact"
              className={style.font}
              onClick={() => setActive('Contact')}
            >
              Contact
            </a>
          </li>
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
          <li
            key="about"
            className={`${
              active === 'About' ? style.mobile_active : 'text-grey'
            } mt-20`}
          >
            <motion.a
              href="#about"
              className={style.mobile_font}
              variants={fadeIn('right', '', 0.15, 1)}
              initial="hidden"
              whileInView="show"
              onClick={() => {
                setActive('About');
                handleMenuClick();
              }}
            >
              About
            </motion.a>
          </li>
          <li
            key="service"
            className={active === 'Service' ? style.mobile_active : 'text-grey'}
          >
            <motion.a
              href="#service"
              className={style.mobile_font}
              variants={fadeIn('right', '', 0.25, 1)}
              initial="hidden"
              whileInView="show"
              onClick={() => {
                setActive('Service');
                handleMenuClick();
              }}
            >
              Service
            </motion.a>
          </li>
          <li
            key="work"
            className={active === 'Work' ? style.mobile_active : 'text-grey'}
          >
            <motion.a
              href="#work"
              className={style.mobile_font}
              variants={fadeIn('right', '', 0.35, 1)}
              initial="hidden"
              whileInView="show"
              onClick={() => {
                setActive('Work');
                handleMenuClick();
              }}
            >
              Work
            </motion.a>
          </li>
          <li
            key="testimonials"
            className={
              active === 'Testimonials' ? style.mobile_active : 'text-grey'
            }
          >
            <motion.a
              href="#testimonials"
              className={style.mobile_font}
              variants={fadeIn('right', '', 0.45, 1)}
              initial="hidden"
              whileInView="show"
              onClick={() => {
                setActive('Testimonials');
                handleMenuClick();
              }}
            >
              Testimonials
            </motion.a>
          </li>
          <li
            key="contact"
            className={active === 'Contact' ? style.mobile_active : 'text-grey'}
          >
            <motion.a
              href="#contact"
              className={style.mobile_font}
              variants={fadeIn('right', '', 0.55, 1)}
              initial="hidden"
              whileInView="show"
              onClick={() => {
                setActive('Contact');
                handleMenuClick();
              }}
            >
              Contact
            </motion.a>
          </li>
          <li>
            <motion.a
              variants={fadeIn('right', '', 0.65, 1)}
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
    </div>
  );
};

export default Navbar;
