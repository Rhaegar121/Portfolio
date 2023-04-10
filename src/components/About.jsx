import React from 'react';
import { SectionWrapper } from '../hoc';
import style from './styles/about.module.css';
import BallCanvas from './Ball';
import technologies from './tech';

const About = () => {
  return (
    <div>
      <h1 className={style.title}>About Me</h1>
      <p className={style.para}>My name is Kaung Myat Kyaw (Barry), and I've spent the last several months developing real-world projects from scratch in a remote environment. I worked as a general secretary and a social welfare officer at the Students' Union of my University for two years. It is not the same type of work as development, but it taught me some of the skills I now use every day as a developer: problem-solving, working under pressure, effective communication, and more.</p>
      <p className={style.para}>Here are a few technologies I`ve been working with recently:</p>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
      </div>
    </div>
  )
}

export default SectionWrapper(About, "about");