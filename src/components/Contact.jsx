import React from 'react';
import { SectionWrapper } from '../hoc';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import style from './styles/contact.module.css';

const Contact = () => {
  return (
    <div className='h-screen'>
      <motion.h1 variants={textVariant()} className={style.title}>
        Contact
      </motion.h1>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");