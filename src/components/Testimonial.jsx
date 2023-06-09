import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { FaLinkedinIn, FaQuoteLeft } from 'react-icons/fa';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../hoc';

import { testimonials } from '../constants';
import style from './styles/testimonial.module.css';

const Testimonial = () => (
  <div className={style.container}>
    <motion.h1 variants={textVariant()} className={style.title}>
      Testimonials
    </motion.h1>
    <motion.p variants={fadeIn('', '', 0.15, 1)} className={style.subtitle}>What my coding partners say about me -</motion.p>
    <div className={style.card_container}>
      {/* Testimonials card */}
      {testimonials.map((testimonial, index) => (
        <Tilt key={testimonial.id} className={style.tilt}>
          <motion.div
            variants={fadeIn('right', 'tween', index * 0.8, 0.5)}
            className={style.card_shadow}
          >
            <div
              className={style.card}
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
            >
              <FaQuoteLeft className={style.openquote} />
              <p className={style.para}>{testimonial.text}</p>
              <div className={`${style.label} ${style.firstlabel}`}>
                <p className={style.name}>
                  {testimonial.name}
                  {' '}
                  <span className={style.country}>
                    (
                    {testimonial.country}
                    )
                  </span>
                </p>
                <a
                  href={testimonial.linkedIn}
                  target="_blank"
                  className={style.icon}
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </motion.div>
        </Tilt>
      ))}
    </div>
    <motion.div variants={fadeIn('', '', 0.15, 1)} className={style.recommendationsLink}>
      <a href="https://www.linkedin.com/in/kaungmyatkyaw/details/recommendations/?detailScreenTabIndex=0" target="_blank" className={style.a} rel="noreferrer">More recommendations here</a>
    </motion.div>
  </div>
);

export default SectionWrapper(Testimonial, 'testimonials', 'my-0');
