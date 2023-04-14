import React from 'react'
import style from './styles/work.module.css'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, img, name, tech }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.4, 0.75)} className={style.card}>
      <img className={style.img} src={img} alt="project sample" />
          <div className={style.card_overlay}>
            <div className={style.card_text}>
              <div className={style.text}>
                <h2 className={style.name}>{name}</h2>
                <p className={style.tech}>
                  {tech.map((i) => (
                    <span className={style.tech_list}>{`#${i}`}</span>
                  ))}
                </p>
              </div>
            <button className={style.btn}>Learn More</button>
          </div>
      </div>
    </motion.div>
  )
}

const Work = () => {
  return (
    <div>
      <motion.h1 variants={textVariant()} className={style.title}>My Recent Works</motion.h1>
      <div className={style.project_container}>
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Work, "work");