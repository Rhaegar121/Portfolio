import React from 'react';
import style from './styles/footer.module.css';
import { FiFacebook } from 'react-icons/fi';
// import { FiLinkedin } from 'react-icons/fi';
// import { FiInstagram } from 'react-icons/fi';
// import { FiTwitter } from 'react-icons/fi';
// import { FiGithub } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className={style.icon_container}>
        <div className={style.overlay}><FiFacebook className={style.icon} /></div>
        <div className={style.overlay}><FiFacebook className={style.icon} /></div>
        <div className={style.overlay}><FiFacebook className={style.icon} /></div>
        <div className={style.overlay}><FiFacebook className={style.icon} /></div>
        <div className={style.overlay}><FiFacebook className={style.icon} /></div>
    </div>
  )
}

export default Footer