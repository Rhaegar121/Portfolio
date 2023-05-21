import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { ContactWrapper } from '../hoc';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaQuoteLeft } from 'react-icons/fa';
import { testimonials  } from '../constants';
import style from './styles/testimonial.module.css';

const Testimonial = () => {
  return (
    <div className={style.container}>
      <motion.h1 variants={textVariant()} className={style.title}>
        Testimonials
      </motion.h1>
      <motion.p variants={fadeIn("", "", 0.15, 1)} className={style.subtitle}>What my coding partners say about me -</motion.p>
      <div className={style.card_container}>
        {/* Testimonials card */}
        {testimonials.map((testimonial, index) => (
          <motion.div 
          key={testimonial.id}
          variants={fadeIn("right", "tween", index * 0.8, 0.5)} 
          className={style.card_shadow}>
            <div className={style.card}>
            <FaQuoteLeft className={style.openquote} />
            <p className={style.para}>{testimonial.text}</p>
            <div className={`${style.label} ${style.firstlabel}`}>
              <h2 className={style.name}>{testimonial.name} <span className={style.country}>({testimonial.country})</span></h2>
              <a href={testimonial.linkedIn} target='_blank' className={style.icon}><FaLinkedinIn /></a>
            </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div variants={fadeIn("", "", 0.15, 1)} className={style.recommendationsLink}>
        <a href='https://www.linkedin.com/in/kaungmyatkyaw/details/recommendations/?detailScreenTabIndex=0' target='_blank' className={style.a}>More recommendations here</a>
      </motion.div>
    </div>
  )
}

export default ContactWrapper(Testimonial, "testimonials");