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
        Hey there — I&apos;m
        {' '}
        <strong>Kaung Myat Kyaw (Barry)</strong>
        , a software engineer who enjoys building reliable products, solving messy technical problems, and making systems faster, cleaner, and easier to maintain.
      </motion.p>
      <motion.p variants={fadeIn('', '', 1, 1)} className={style.text}>
        I currently work across
        {' '}
        <strong>backend systems, cloud workflows, data pipelines, and product features</strong>
        {' '}
        in a fully remote startup environment. Over the past few years, I&apos;ve worked with technologies like
        {' '}
        <strong>Ruby on Rails, PostgreSQL, React/Nuxt.js, Android, AWS Step Functions, and AWS Glue</strong>
        , contributing to production systems that support reporting, workflow automation, integrations, and mobile applications. A big part of what I enjoy is performance and reliability work—whether that means optimizing slow SQL queries, improving backend APIs, migrating workflows to AWS-native services, or reducing repeated manual processes through better system design.
      </motion.p>
      <motion.p variants={fadeIn('', '', 1.25, 1)} className={style.text}>
        What I bring most is a mix of
        {' '}
        <strong>adaptability, curiosity, and persistence</strong>
        . I like understanding how systems work end-to-end, learning unfamiliar tools when needed, and turning unclear or inefficient processes into something more robust and scalable. My non-traditional background has shaped how I approach engineering: stay resourceful, keep learning, and focus on solving real problems in practical ways.
      </motion.p>
      <motion.p variants={fadeIn('', '', 1.5, 1)} className={style.text}>
        Outside of tech, I&apos;m also interested in
        {' '}
        <strong>math, movies, music, and thoughtful product design</strong>
        —the kinds of things that keep me curious and often inspire how I think about software too.
      </motion.p>
    </div>
  </>
);

export default SectionWrapper(About, 'about', '');
