import React from 'react'
import style from './styles/home.module.css'

const Home = () => {
  return (
    <div className={style.container}>
      <p className={`${style.intro} text-cyan`}>Hi, I'm <span className={`${style.name} text-grey`}>Kaung Myat Kyaw</span></p>
      <p className={`${style.intro} text-cyan`}>But you can call me <span className={`${style.name} text-grey`}>Barry</span></p>
      <p className={`${style.desc} text-grey`}>I am a full-stack web developer</p>
      <button className={`${style.btn} text-cyan`}>Check out my work</button>
    </div>
  )
}

export default Home