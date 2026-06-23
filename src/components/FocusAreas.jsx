import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../hoc';
import style from './styles/focusAreas.module.css';
import { focusAreas } from '../constants';

const FocusAreas = () => (
  <div className={style.container}>
    <motion.h1 variants={textVariant()} className={style.title}>
      What I Work On
    </motion.h1>
    <motion.p variants={fadeIn('', '', 0.15, 1)} className={style.subtitle}>
      A quick look at the engineering problems and systems I spend most of my time working on.
    </motion.p>
    <div className={style.card_container}>
      {focusAreas.map((area, index) => (
        <Tilt key={area.id} className={style.tilt}>
          <motion.div
            variants={fadeIn('right', 'tween', index * 0.8, 0.5)}
            className={style.card_shadow}
          >
            <div className={style.card_overlay}>
              <p className={style.text}>{area.text}</p>
            </div>
            <div className={style.card}>
              <div className={style.img_container}>
                <img
                  className={style.img}
                  src={area.icon}
                  alt=""
                  loading="lazy"
                />
              </div>
              <p className={style.name}>{area.title}</p>
            </div>
          </motion.div>
        </Tilt>
      ))}
    </div>
  </div>
);

export default SectionWrapper(FocusAreas, 'focus', 'my-0');
