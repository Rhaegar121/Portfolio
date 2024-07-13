import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
import style from './styles/about.module.css';
import { textVariant, fadeIn } from '../utils/motion';

const About = () => (
  <>
    <motion.h1 variants={textVariant()} className={style.title}>
      About Me
    </motion.h1>
    <div className={style.para}>
      <motion.p variants={fadeIn('', '', 0.5, 1)} className={style.text}>
        Hey there! I&apos;m
        {' '}
        <a
          href="https://www.linkedin.com/in/kaungmyatkyaw/"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          Kaung Myat Kyaw (Barry),
        </a>
        {' '}
        a passionate software engineer specializing in React and Ruby on Rails. I thrive on delivering state-of-the-art software solutions. When I&apos;m not coding, you&apos;ll find me exploring the fascinating worlds of Math, Movies, and Music.
      </motion.p>
      <motion.p variants={fadeIn('', '', 1, 1)} className={style.text}>
        My journey into software development was anything but ordinary. As a former third-year student at Maritime University, I made a bold decision to drop out and pursue my true passion. That led me to Microverse, a remote software development school, where I honed my skills through pair programming and real-world projects. I completed the boot camp with unwavering dedication, amassing over
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
        in just one year. My experience in the Students&apos; Union further sharpened my problem-solving and communication abilities.
      </motion.p>
      <motion.p variants={fadeIn('', '', 1.25, 1)} className={style.text}>
        Ready to bring your project to life? Reach out—I&apos;m excited to collaborate!
        {' '}
        <a
          href="https://drive.google.com/file/d/1tciorak3ZNmMrPPnG_b9eSMnv94fY61_/view?usp=sharing"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          Check out my resume
        </a>
        {' '}
        for more insights into my journey and qualifications.
      </motion.p>
    </div>
  </>
);

export default SectionWrapper(About, 'about', '');
