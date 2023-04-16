import React from 'react';
import style from './styles/footer.module.css';
import { FiFacebook } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className={style.footer}>
        <div className={style.icon_container}>
        <div className={style.overlay}>
            <FiLinkedin className={style.icon_hover} />
            <FiLinkedin className={style.icon} />
        </div>
        <div className={style.overlay}>
            <FiFacebook className={style.icon_hover} />
            <FiFacebook className={style.icon} />
        </div>
        <div className={style.overlay}>
            <FiInstagram className={style.icon_hover} />
            <FiInstagram className={style.icon} />
        </div>
        <div className={style.overlay}>
            <FiTwitter className={style.icon_hover} />
            <FiTwitter className={style.icon} />
        </div>
        <div className={style.overlay}>
            <FiGithub className={style.icon_hover} />
            <FiGithub className={style.icon} />
        </div>
        </div>
        <div className={style.p}>
        <a href='https://github.com/Rhaegar121/Portfolio' target='_blank'  className={style.a}>Brought into being by <span className={style.span}>@ Kaung Myat Kyaw</span></a>
        </div>
    </div>
  )
}

export default Footer