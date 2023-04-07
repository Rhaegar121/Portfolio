import React from 'react'

const Home = () => {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center z-0 bg-transparent'>
      <p className='uppercase secondary text-2xl text-white'>Hi, I'm <span className='secondary text-cyan'>Kaung Myat Kyaw</span></p>
      <p className='uppercase secondary text-2xl text-white'>But you can call me <span className='secondary text-cyan'>Barry</span></p>
      <p>I am a full-stack web developer</p>
      <button>Check out my work</button>
    </div>
  )
}

export default Home