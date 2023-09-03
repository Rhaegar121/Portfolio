import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
import style from './styles/about.module.css';
import { textVariant, slideIn } from '../utils/motion';
import mypicture from '../assets/mypicture.jpg';

const About = () => (
  <>
    <motion.h1 variants={textVariant()} className={style.title}>
      About Me
    </motion.h1>
    <div className={style.content}>
      <motion.div variants={slideIn('left', '', 0, 1)} className={style.para}>
        <p className={style.text}>
          My name is
          {' '}
          <a
            href="https://www.linkedin.com/in/kaungmyatkyaw/"
            target="_blank"
            className={style.link}
            rel="noreferrer"
          >
            Kaung Myat Kyaw (Barry)
          </a>
          {' '}
          and I am a passionate software engineer specializing in delivering
          state-of-the-art software solutions in React and Ruby on Rails. I love
          Math, Coding, Movies, and all kinds of Music.
        </p>
        <p className={style.text}>
          My journey into the world of software development has been both unique
          and transformative. Before transitioning to this career, I was a
          third-year student at Maritime University. However, due to the
          COVID-19 outbreak and the political situation in my country, I decided
          to drop out and explore my true passion.
        </p>
        <p className={style.text}>
          What truly set my path apart was my decision to join Microverse, a
          remote software development school. There, I immersed myself in pair
          programming and real-world projects, mastering the skills required to
          thrive in this dynamic field. I completed the boot camp without a
          hitch, showcasing my dedication and determination to succeed. My
          commitment to the tech community is reflected in my
          {' '}
          <a
            href="https://github.com/Rhaegar121"
            target="_blank"
            className={style.link}
            rel="noreferrer"
          >
            {' '}
            2500+ contributions on GitHub
          </a>
          {' '}
          within a single year. Additionally, my roles in the Students&apos;
          Union honed my problem-solving and communication abilities.
        </p>
      </motion.div>
      <motion.div
        variants={slideIn('right', '', 0, 1)}
        className={style.img_container}
      >
        <div className={style.overlay} />
        <img className={style.img} src={mypicture} alt="Kaung Myat Kyaw" />
      </motion.div>
    </div>
  </>
);

export default SectionWrapper(About, 'about', '');
