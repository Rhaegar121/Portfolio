import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
import { technologies } from '../constants';
import { fadeIn } from '../utils/motion';
import style from './styles/techstack.module.css';

const TechStack = () => (
  <>
    <motion.p variants={fadeIn('', '', 0.5, 1)} className={style.title}>Here are a few technologies I`ve been working with recently:</motion.p>
    <div className={style.tech_container}>
      {technologies.map((tech, index) => (
        <motion.abbr
          initial="hidden"
          whileInView="show"
          variants={fadeIn('up', '', index * 0.15, 0.5)}
          title={tech.name}
          key={tech.name}
          className={style.tech}
        >
          <img className={style.tech_img} src={tech.icon} alt={tech.name} loading="lazy" />
        </motion.abbr>
      ))}
    </div>
  </>
);

export default SectionWrapper(TechStack, '', '');
