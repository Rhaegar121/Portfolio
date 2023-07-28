/* eslint-disable */
import React from 'react';
import { motion } from 'framer-motion';
// import { Tilt } from 'react-tilt';
import { fadeIn, textVariant } from '../utils/motion';
import style from './styles/service.module.css';

const Service = () => (
  <div>
    <motion.h1 variants={textVariant()} className={style.title}>
      My services
    </motion.h1>
  </div>
);

export default Service;
