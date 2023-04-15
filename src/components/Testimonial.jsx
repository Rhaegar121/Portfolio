import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';
import { BsPersonCircle } from 'react-icons/bs';
// import style from './styles/testimonial.module.css';

const Testimonial = () => {
  return (
    <div>
      <motion.h1 variants={textVariant()}>
        Testimonials
      </motion.h1>
      <p>What other people say about me</p>
      <div>
        <div>
          <span></span>
          <p></p>
          <div>
            <h2></h2>
            <BsPersonCircle />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Testimonial, "testimonials");