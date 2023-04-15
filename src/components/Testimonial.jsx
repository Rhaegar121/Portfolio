import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';
// import style from './styles/testimonial.module.css';

const Testimonial = () => {
  return (
    <div>
      <motion.h1 variants={textVariant()}>
        Testimonials
      </motion.h1>
    </div>
  )
}

export default SectionWrapper(Testimonial, "testimonials");