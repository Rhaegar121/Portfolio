import React from 'react';
import { SectionWrapper } from '../hoc';
import style from './styles/about.module.css';
import BallCanvas from './Ball';
import { technologies } from '../constants';
import { motion } from "framer-motion";
import { textVariant, fadeIn, slideIn } from '../utils/motion';
import mypicture from '../assets/mypicture.jpg';

const About = () => {
  return (
    <div>
      <motion.h1 variants={textVariant()} className={style.title}>About Me</motion.h1>
      <div className={style.content}>
        <motion.p variants={slideIn("left", "", 0, 1)} className={style.para}>My name is <span className={style.name}>Kaung Myat Kyaw (Barry)</span>, and I've spent the last several months developing real-world projects from scratch in a remote environment. I worked as a general secretary and a social welfare officer at the Students' Union of my University for two years. It is not the same type of work as development, but it taught me some of the skills I now use every day as a developer: problem-solving, working under pressure, effective communication, and more.</motion.p>
        <motion.div variants={slideIn("right", "", 0, 1)} className={style.img_container}>
          <div className={style.overlay}></div>
          <img className={style.img} src={mypicture} alt="my picture" />
        </motion.div>
      </div>
      <motion.p variants={fadeIn("", "", 0.15, 1)} className={style.subtitle}>Here are a few technologies I`ve been working with recently:</motion.p>
      <motion.div variants={fadeIn("", "", 0.5, 1)} className={style.ball_container}>
      {technologies.map((technology) => (
        <div className={style.ball} key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
      </motion.div>
    </div>
  )
}

export default SectionWrapper(About, "about");