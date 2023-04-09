import React from 'react';
import { SectionWrapper } from '../hoc';
import style from './styles/about.module.css';

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const About = () => {
  return (
    <div className='h-screen'>
      <h1 className={style.title}>About Me</h1>
      <p className={style.para}>My name is Kaung Myat Kyaw (Barry), and I've spent the last several months developing real-world projects from scratch in a remote environment. I worked as a general secretary and a social welfare officer at the Students' Union of my University for two years. It is not the same type of work as development, but it taught me some of the skills I now use every day as a developer: problem-solving, working under pressure, effective communication, and more.</p>
      <p className={style.para}>Here are a few technologies I`ve been working with recently:</p>
    </div>
  )
}

export default SectionWrapper(About, "about");