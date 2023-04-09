import React from 'react';
import { SectionWrapper } from '../hoc';
import style from './styles/about.module.css';

const About = () => {
  return (
    <div className='h-screen'>
      <h1 className={style.title}>About Me</h1>
      <p>My name is Kaung Myat Kyaw (Barry), and I'm currently completing a full-stack development course at Microverse, a remote software development school that uses pair programming and real-world projects to teach development.</p>
      <p>I've spent the last several months developing real-world projects from scratch in a remote environment. I worked as a general secretary and a social welfare officer at the Students' Union of my University for two years. It is not the same type of work as development, but it taught me some of the skills I now use every day as a developer: problem-solving, working under pressure, effective communication, and more.</p>
      <p></p>
    </div>
  )
}

export default SectionWrapper(About, "about");