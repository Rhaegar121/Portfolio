/* eslint-disable */
import React from 'react';
import { motion } from 'framer-motion';
// import { Tilt } from 'react-tilt';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../hoc';
import style from './styles/service.module.css';

const Service = () => (
  <div>
    <motion.h1 variants={textVariant()} className={style.title}>
      My services
    </motion.h1>
    <motion.p variants={fadeIn('', '', 0.15, 1)} className={style.subtitle}>What I can do for you -</motion.p>
  </div>
);

export default SectionWrapper(Service, 'services', 'my-0');
