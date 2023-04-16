import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaQuoteLeft } from 'react-icons/fa';
import style from './styles/testimonial.module.css';

const Testimonial = () => {
  return (
    <div className={style.container}>
      <motion.h1 variants={textVariant()} className={style.title}>
        Testimonials
      </motion.h1>
      <motion.p variants={fadeIn("", "", 0.15, 1)} className={style.subtitle}>What my coding partners say about me -</motion.p>
      <div className={style.card_container}>
        <motion.div variants={fadeIn("right", "", 0.5, 0.5)} className={style.card_shadow}>
          <div className={style.card}>
          <FaQuoteLeft className={style.openquote} />
          <p className={style.para}>I highly recommend Barry for any software development role. During our recent collaboration, he consistently demonstrated exceptional coding skills and a strong work ethic. He is a pleasure to work with and his attention to detail and commitment to quality make him an excellent candidate for any software development team.</p>
          <div className={`${style.label} ${style.firstlabel}`}>
            <h2 className={style.name}>Wai Yan Phyo <span className={style.country}>(Myanmar)</span></h2>
            <a href='https://www.linkedin.com/in/oyhpnayiaw/' target='_blank' className={style.icon}><FaLinkedinIn /></a>
          </div>
          </div>
        </motion.div>
        <motion.div variants={fadeIn("right", "", 1, 0.5)} className={style.card_shadow}>
          <div className={style.card}>
          <FaQuoteLeft className={style.openquote} />
          <p className={style.para}>Barry is one of the brightest software developers I've ever met. I worked alongside him while building a single-page Web Application for movie display, and in that time he proved his commitment and determination over and over again. Barry is always challenging himself-- he's the type of person who reads documentation for fun, and his attention to detail is evident in all of the projects I've worked with him on.</p>
          <div className={style.label}>
            <h2 className={style.name}>Nwadinigwe Victor <span className={style.country}>(Nigeria)</span></h2>
            <a href='https://www.linkedin.com/in/victornwadinigwe/' target='_blank' className={style.icon}><FaLinkedinIn /></a>
          </div>
          </div>
        </motion.div>
        <motion.div variants={fadeIn("right", "", 1.5, 0.5)} className={style.card_shadow}>
          <div className={style.card}>
          <FaQuoteLeft className={style.openquote} />
          <p className={style.para}>Barry was my first coding partner. I remember how glad I was passing a week and spent creating a project and solving lots of programming challenges together. I really am comfortable with collaborating and coding with Barry. His ingenious ideas give me a lot of ideas solving a problem multiple ways.</p>
          <div className={`${style.label} ${style.lastlabel}`}>
            <h2 className={style.name}>Ahmed Hasan Rony <span className={style.country}>(India)</span></h2>
            <a href='https://www.linkedin.com/in/ahroniy/' target='_blank' className={style.icon}><FaLinkedinIn /></a>
          </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SectionWrapper(Testimonial, "testimonials");