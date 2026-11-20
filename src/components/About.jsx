import React from 'react';
import { motion } from 'framer-motion';
import { aboutParagraphs } from '../constants/about';
import SectionWrapper from '../hoc';
import { textVariant, fadeIn } from '../utils/motion';
import RichText from './RichText';
import style from './styles/about.module.css';

const aboutDelays = [0.5, 1, 1.25, 1.5];

const About = () => (
  <>
    <motion.h1 variants={textVariant()} className={style.title}>
      About Me
    </motion.h1>
    <div className={style.para}>
      {aboutParagraphs.map((paragraph, index) => (
        <motion.p
          key={paragraph.slice(0, 24)}
          variants={fadeIn('', '', aboutDelays[index], 1)}
          className={style.text}
        >
          <RichText text={paragraph} />
        </motion.p>
      ))}
    </div>
  </>
);

export default SectionWrapper(About, 'about', '');
