import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaQuoteLeft } from 'react-icons/fa';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../hoc';
import { testimonials } from '../constants';
import style from './styles/testimonial.module.css';

const Testimonial = () => {
  const [number, setNumber] = useState(1);
  const showPerPage = 1;
  const lastNumber = number * showPerPage;
  const firstNumber = lastNumber - showPerPage;
  const filterTestimonial = testimonials.slice(firstNumber, lastNumber);

  const prev = () => {
    setNumber((prevNumber) => (prevNumber === 1 ? testimonials.length : prevNumber - 1));
  };

  const next = () => {
    setNumber((prevNumber) => (prevNumber === testimonials.length ? 1 : prevNumber + 1));
  };

  return (
    <div className={style.container}>
      <motion.h1 variants={textVariant()} className={style.title}>
        Testimonials
      </motion.h1>
      <motion.p variants={fadeIn('', '', 0.15, 1)} className={style.subtitle}>What my coding partners say about me -</motion.p>
      <div className={style.card_container}>
        <button
          className="btn prev-btn"
          type="button"
          onClick={prev}
          disabled={false}
        >
          <BsArrowLeft />
        </button>
        {/* Testimonials card */}
        {filterTestimonial.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            // variants={fadeIn('right', 'tween', index * 0.8, 0.5)}
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
              <div className={style.header}>
                <FaQuoteLeft className={style.openquote} />
                <img className={style.img} src={testimonial.image} alt="profile" />
              </div>
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
                <abbr title="LinkedIn Profile">
                  <a
                    href={testimonial.linkedIn}
                    target="_blank"
                    className={style.icon}
                    rel="noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedinIn />
                  </a>
                </abbr>
              </div>
            </div>
          </motion.div>
        ))}
        <button
          className="btn next-btn"
          type="button"
          onClick={next}
          disabled={false}
        >
          <BsArrowRight />
        </button>
      </div>
      <motion.div variants={fadeIn('', '', 0.15, 1)} className={style.recommendationsLink}>
        <a href="https://www.linkedin.com/in/kaungmyatkyaw/details/recommendations/?detailScreenTabIndex=0" target="_blank" className={style.a} rel="noreferrer">More recommendations here</a>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Testimonial, 'testimonial', 'my-0');
