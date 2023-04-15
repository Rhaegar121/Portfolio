import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';
import { BsPersonCircle } from 'react-icons/bs';
import style from './styles/testimonial.module.css';

const Testimonial = () => {
  return (
    <div className={style.container}>
      <motion.h1 variants={textVariant()} className={style.title}>
        Testimonials
      </motion.h1>
      <p className={style.subtitle}>What other people say about me</p>
      <div className={style.card_container}>
        <div className={style.card}>
          <span className={style.openquote}></span>
          <p className={style.para}></p>
          <div className={style.label}>
            <h2 className={style.name}></h2>
            <BsPersonCircle className={style.icon} />
          </div>
        </div>
        <div className={style.card}>
          <span className={style.openquote}></span>
          <p className={style.para}></p>
          <div className={style.label}>
            <h2 className={style.name}></h2>
            <BsPersonCircle className={style.icon} />
          </div>
        </div>
        <div className={style.card}>
          <span className={style.openquote}></span>
          <p className={style.para}></p>
          <div className={style.label}>
            <h2 className={style.name}></h2>
            <BsPersonCircle className={style.icon} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Testimonial, "testimonials");