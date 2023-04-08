import React from 'react'
import style from './styles/home.module.css'
import { MdOutlineArrowForwardIos } from 'react-icons/md';

const Home = () => {
  return (
    <div className={style.container}>
      <p className={style.intro}>Hi, I'm <span className={style.name}>Kaung Myat Kyaw</span></p>
      <p className={style.intro}>But you can call me <span className={style.name}>Barry</span></p>
      <p className={style.desc}>I am a full-stack web developer</p>
      <button className={style.btn}>
        Check out my work
        <MdOutlineArrowForwardIos 
        className={style.arrow}
        />
      </button>
    </div>
  )
}

export default Home