import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
import style from './styles/about.module.css';
import { textVariant, slideIn } from '../utils/motion';
import mypicture from '../assets/mypicture.jpg';

const About = () => (
  <>
    <motion.h1 variants={textVariant()} className={style.title}>About Me</motion.h1>
    <div className={style.content}>
      <motion.div variants={slideIn('left', '', 0, 1)} className={style.para}>
        <p className={style.text}>
          My name is
          {' '}
          <a href="https://www.linkedin.com/in/kaungmyatkyaw/" target="_blank" className={style.link} rel="noreferrer">Kaung Myat Kyaw (Barry)</a>
          {' '}
          and I am a passionate software engineer specializing in delivering state-of-the-art software solutions in React and Ruby on Rails. I love Math, Coding, Movies, and all kinds of Music.
        </p>
        <p className={style.text}>I&apos;m a proud graduate of Microverse, where I&apos;ve been working on a full-stack travel agency website using Next.js. My journey from Maritime University to software development wasn&apos;t straightforward - the challenges of COVID-19 and our political landscape redirected me toward my true passion.</p>
        <p className={style.text}>A top performer in math with the highest GPA in my matriculation, I transitioned this analytical prowess to coding, completing my boot camp without hitches. My commitment to the tech community is reflected in my 2500+ contributions on GitHub within a single year. Additionally, my roles in the Students&apos; Union honed my problem-solving and communication abilities.</p>
      </motion.div>
      <motion.div variants={slideIn('right', '', 0, 1)} className={style.img_container}>
        <div className={style.overlay} />
        <img className={style.img} src={mypicture} alt="Kaung Myat Kyaw" />
      </motion.div>
    </div>
  </>
);

export default SectionWrapper(About, 'about', '');
