import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';
import { BsPersonCircle } from 'react-icons/bs';
import { FaQuoteLeft } from 'react-icons/fa';
import style from './styles/testimonial.module.css';

const Testimonial = () => {
  return (
    <div className={style.container}>
      <motion.h1 variants={textVariant()} className={style.title}>
        Testimonials
      </motion.h1>
      <p className={style.subtitle}>What other people say about me</p>
      <div className={style.card_container}>
        <div className={style.card_shadow}>
          <div className={style.card}>
          <FaQuoteLeft className={style.openquote} />
          <p className={style.para}>I highly recommend Barry for any software development role. During our recent collaboration, he consistently demonstrated exceptional coding skills and a strong work ethic. He is a pleasure to work with and his attention to detail and commitment to quality make him an excellent candidate for any software development team.</p>
          <div className={style.label}>
            <h2 className={style.name}>Wai Yan Phyo</h2>
            <BsPersonCircle className={style.icon} />
          </div>
          </div>
        </div>
        <div className={style.card_shadow}>
          <div className={style.card}>
          <FaQuoteLeft className={style.openquote} />
          <p className={style.para}>I highly recommend Barry for any software development role. During our recent collaboration, he consistently demonstrated exceptional coding skills and a strong work ethic. He is a pleasure to work with and his attention to detail and commitment to quality make him an excellent candidate for any software development team.</p>
          <div className={style.label}>
            <h2 className={style.name}>Wai Yan Phyo</h2>
            <BsPersonCircle className={style.icon} />
          </div>
          </div>
        </div>
        <div className={style.card_shadow}>
          <div className={style.card}>
          <FaQuoteLeft className={style.openquote} />
          <p className={style.para}>I highly recommend Barry for any software development role. During our recent collaboration, he consistently demonstrated exceptional coding skills and a strong work ethic. He is a pleasure to work with and his attention to detail and commitment to quality make him an excellent candidate for any software development team.</p>
          <div className={style.label}>
            <h2 className={style.name}>Wai Yan Phyo</h2>
            <BsPersonCircle className={style.icon} />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Testimonial, "testimonials");