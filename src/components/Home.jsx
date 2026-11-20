import React from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { motion } from 'framer-motion';
import { profileIntro } from '../constants/about';
import { fadeIn, staggerContainer } from '../utils/motion';
import style from './styles/home.module.css';

const Home = () => (
  <motion.section
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
  >
    <div className={style.container}>
      <p className={style.intro}>
        Hi, I&apos;m
        {' '}
        <motion.span variants={fadeIn('', '', 0.1, 1)} className={style.name}>
          {profileIntro.name}
        </motion.span>
      </p>
      <p className={style.intro}>
        Also known as
        {' '}
        <motion.span variants={fadeIn('', '', 0.3, 1)} className={style.name}>
          {profileIntro.alias}
        </motion.span>
      </p>
      <motion.p variants={fadeIn('', '', 0.5, 1)} className={style.desc}>
        {profileIntro.role}
      </motion.p>
      <motion.button
        variants={fadeIn('', '', 0.6, 1)}
        className={style.btn_container}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
          });
        }}
      >
        <span className={style.btn_hover}>
          Check out my work
        </span>
        <span className={style.btn}>
          Check out my work
        </span>
        <MdOutlineArrowForwardIos className={style.arrow} />
      </motion.button>
    </div>
  </motion.section>
);

export default Home;
