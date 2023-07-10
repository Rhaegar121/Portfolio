import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import style from './styles/about.module.css';
import TechStack from './TechStack';
import { textVariant, slideIn } from '../utils/motion';
import mypicture from '../assets/mypicture.jpg';

const About = () => (
  <div>
    <motion.h1 variants={textVariant()} className={style.title}>About Me</motion.h1>
    <div className={style.content}>
      <motion.div variants={slideIn('left', '', 0, 1)} className={style.para}>
        <p className={style.text}>
          My name is
          {' '}
          <a href="https://www.linkedin.com/in/kaungmyatkyaw/" target="_blank" className={style.link} rel="noreferrer">Kaung Myat Kyaw (Barry)</a>
          {' '}
          and I am a passionate software engineer for delivering state-of-the-art software solutions in React and Ruby on Rails. I&apos;ve spent the last several months developing real-world projects from scratch in a remote environment. I love Math, Coding, Movies, and all kinds of Music.
        </p>
        <p className={style.text}>I also worked as a general secretary and a social welfare officer at the Students&apos; Union of my University for two years. It is not the same type of work as development, but it taught me some of the skills I now use every day as a developer: problem-solving, working under pressure, effective communication, and more.</p>
        <p className={style.text}>I can help you build a product, feature, or website. Look through some of my work and experience! If you like what you see and have a project you need to be coded for, don&apos;t hesitate to send a message to me.</p>
      </motion.div>
      <motion.div variants={slideIn('right', '', 0, 1)} className={style.img_container}>
        <div className={style.overlay} />
        <img className={style.img} src={mypicture} alt="Kaung Myat Kyaw" />
      </motion.div>
    </div>
    <TechStack />
  </div>
);

export default SectionWrapper(About, 'about', 'my-8');
