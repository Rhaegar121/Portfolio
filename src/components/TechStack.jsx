import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
import { technologies } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import style from './styles/techstack.module.css';

const TechStack = () => {
  const [stack, setStack] = useState('all');

  const handlePageChange = (stack) => {
    setStack(stack);
  };

  const stacks = ['all', 'languages', 'frameworks', 'tools'];

  return (
    <>
      <motion.p variants={fadeIn('', '', 0.5, 1)} className={style.title}>Here are a few technologies I`ve been working with recently:</motion.p>
      <motion.div variants={textVariant()} className={style.btn_container}>
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
      <div className={style.tech_container}>
        {technologies.filter((technology) => technology.stack.includes(stack)).map((tech, index) => (
          <motion.abbr
            initial="hidden"
            whileInView="show"
            variants={fadeIn('up', '', index * 0.15, 0.5)}
            title={tech.name}
            key={tech.name}
            className={style.tech}
          >
            <img className={style.tech_img} src={tech.icon} alt={tech.name} loading="lazy" />
          </motion.abbr>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(TechStack, '', '');
