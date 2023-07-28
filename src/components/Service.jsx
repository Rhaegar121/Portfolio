/* eslint-disable */
import React from 'react';
import { motion } from 'framer-motion';
// import { Tilt } from 'react-tilt';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../hoc';
import style from './styles/service.module.css';
import { services } from '../constants';

const Service = () => (
  <div>
    <motion.h1 variants={textVariant()} className={style.title}>
      My services
    </motion.h1>
    <motion.p variants={fadeIn('', '', 0.15, 1)} className={style.subtitle}>What I can do for you -</motion.p>
    <div className={style.card_container}>
        {/* Services card */}
        {services.map((service, index) => (
            <motion.div
                key={service.id}
                variants={fadeIn('right', 'tween', index * 0.8, 0.5)}
                className={style.card_shadow}
            >
                <div className={style.card}>
                    <img className={style.img} src={service.icon} alt={service.title} />
                    <p className={style.name}>{service.title}</p>
                    <p className={style.text}>{service.text}</p>
                </div>
            </motion.div>
        ))}
    </div>
  </div>
);

export default SectionWrapper(Service, 'services', 'my-0');
