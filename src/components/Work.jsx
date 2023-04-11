import React from 'react'
import style from './styles/work.module.css'
import { SectionWrapper } from '../hoc'

const Work = () => {
  return (
    <div className='h-screen'>
      <h1 className={style.title}>My Recent Works</h1>
    </div>
  )
}

export default SectionWrapper(Work, "work");