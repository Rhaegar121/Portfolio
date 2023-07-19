import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
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
    <>
      <motion.p variants={fadeIn('', '', 0.75, 1)} className={style.title}>Here are a few technologies I`ve been working with recently:</motion.p>
      <motion.div variants={fadeIn('', '', 1.5, 1)} className={style.btn_container}>
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
      <motion.div variants={fadeIn('', '', 1.75, 1)} className={style.tech_container}>
        {stack === 'all' ? (
          technologies.map(({ name, icon }) => (
            <abbr title={name} key={name} className={style.tech}>
              <img className={style.tech_img} src={icon} alt={name} />
            </abbr>
          ))
        ) : (
          filteredTechnologies.map(({ name, icon }) => (
            <div key={name} className={style.tech}>
              <img className={style.tech_img} src={icon} alt={name} />
            </div>
          ))
        )}
      </motion.div>
    </>
  );
};

export default SectionWrapper(TechStack, '', '');
