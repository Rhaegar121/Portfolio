import React, { useState } from 'react';
import { technologies } from '../constants';
import { fadeIn } from '../utils/motion';
import style from './styles/techstack.module.css';

const TechStack = () => {
  const [stack, setStack] = useState('languages');

  const handlePageChange = (stack) => {
    setStack(stack);
  };

  const stacks = ['languages', 'frameworks', 'tools'];

  return (
    <div>
      <motion.p variants={fadeIn("", "", 0.15, 1)} className={style.title}>Here are a few technologies I`ve been working with recently:</motion.p>
      <motion.div variants={fadeIn("", "", 0.25, 1)} className={style.tech_container}>
        {technologies.map((technology) => (
          <div key={technology.name} className={style.tech} >
            <img className={style.tech_img} src={technology.icon} alt={technology.name} />
          </div>
          ))}
      </motion.div>
    </div>
  )
}

export default TechStack;