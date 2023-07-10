import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { technologies } from '../constants';
import { fadeIn } from '../utils/motion';
import style from './styles/techstack.module.css';

const TechStack = () => {
  const [stack, setStack] = useState('all');

  const handlePageChange = (stack) => {
    setStack(stack);
  };

  const stacks = ['all', 'languages', 'frameworks', 'tools'];
  const filteredTechnologies = technologies.filter((technology) => technology.stack === stack);

  return (
    <div>
      <motion.p variants={fadeIn('', '', 0.15, 1)} className={style.title}>Here are a few technologies I`ve been working with recently:</motion.p>
      <motion.div variants={fadeIn('', '', 0.2, 1)} className={style.btn_container}>
        {stacks.map((currentStack) => (
          <button
            key={currentStack.name}
            type="button"
            className={currentStack === stack ? style.btn_active : style.btn}
            onClick={() => handlePageChange(currentStack)}
          >
            {currentStack}
          </button>
        ))}
      </motion.div>
      <motion.div variants={fadeIn('', '', 0.25, 1)} className={style.tech_container}>
        {stack === 'all' ? (
          technologies.map(({ name, icon }) => (
            <div key={name} className={style.tech}>
              <img className={style.tech_img} src={icon} alt={name} />
            </div>
          ))
        ) : (
          filteredTechnologies.map(({ name, icon }) => (
            <div key={name} className={style.tech}>
              <img className={style.tech_img} src={icon} alt={name} />
            </div>
          ))
        )}
      </motion.div>
    </div>
  );
};

export default TechStack;
