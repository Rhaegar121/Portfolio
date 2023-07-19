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
        <p className={style.text}>Prior to pursuing this career, I was a third-year student at Maritime University. However, due to the closure of schools amidst the COVID-19 outbreak and the political situation in my country, I decided to drop out and explore my true passion. I discovered my aptitude for math and problem-solving during my academic journey, which led me to enroll in an online coding boot camp. Through this program, I gained hands-on experience developing real-world projects from scratch in a remote environment.</p>
        <p className={style.text}>In addition to my technical skills, I have actively contributed to the open-source community on GitHub for over a year. With more than 2000 contributions to 20 projects, I have gained valuable exposure to collaborative software development. Furthermore, my experience as a general secretary and social welfare officer at the Students&apos; Union of my university honed essential skills such as problem-solving, working under pressure, and effective communication, which I now apply in my role as a software engineer.</p>
        {/* <p className={style.text}>I can help you build a product, feature, or website. Look through some of my work and experience! If you like what you see and have a project you need to be coded for, don&apos;t hesitate to send a message to me.</p> */}
      </motion.div>
      <motion.div variants={slideIn('right', '', 0, 1)} className={style.img_container}>
        <div className={style.overlay} />
        <img className={style.img} src={mypicture} alt="Kaung Myat Kyaw" />
      </motion.div>
    </div>
  </>
);

export default SectionWrapper(About, 'about', '');
