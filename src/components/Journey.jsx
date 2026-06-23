import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
import { journeyMilestones } from '../constants';
import { textVariant, fadeIn } from '../utils/motion';
import style from './styles/journey.module.css';

const Journey = () => (
  <>
    <motion.h1 variants={textVariant()} className={style.title}>
      My Journey
    </motion.h1>
    <motion.p variants={fadeIn('', '', 0.15, 1)} className={style.subtitle}>
      A non-traditional path into software engineering — shaped by deliberate choices,
      consistent learning, and real production work.
    </motion.p>
    <ol className={style.timeline} aria-label="Career journey timeline">
      {journeyMilestones.map((milestone, index) => (
        <motion.li
          key={milestone.id}
          variants={fadeIn('up', 'tween', index * 0.12, 0.55)}
          className={style.milestone}
        >
          <span className={style.marker} aria-hidden="true" />
          <article className={style.card}>
            <time className={style.period} dateTime={milestone.dateTime}>
              {milestone.period}
            </time>
            <h3 className={style.heading}>{milestone.title}</h3>
            <p className={style.description}>{milestone.description}</p>
            <ul className={style.tags} aria-label="Milestone categories">
              {milestone.tags.map((tag) => (
                <li key={tag} className={style.tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        </motion.li>
      ))}
    </ol>
  </>
);

export default SectionWrapper(Journey, 'journey', 'mt-16');
