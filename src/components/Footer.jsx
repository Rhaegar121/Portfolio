import React from 'react';
import style from './styles/footer.module.css';
import { FiFacebook } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';

const Footer = () => {
    return (
        <>
            <div className={style.icon_container}>
                <a href='https://www.linkedin.com/in/kaungmyatkyaw/' target='_blank' className={style.overlay}>
                    <FiLinkedin className={style.icon_hover} />
                    <FiLinkedin className={style.icon} />
                </a>
                <a href='https://www.facebook.com/linthantkhai' target='_blank' className={style.overlay}>
                    <FiFacebook className={style.icon_hover} />
                    <FiFacebook className={style.icon} />
                </a>
                <a href='https://www.instagram.com/rhaegar_121/?hl=en' target='_blank' className={style.overlay}>
                    <FiInstagram className={style.icon_hover} />
                    <FiInstagram className={style.icon} />
                </a>
                <a href='https://twitter.com/Rhaegar121' target='_blank' className={style.overlay}>
                    <FiTwitter className={style.icon_hover} />
                    <FiTwitter className={style.icon} />
                </a>
                <a href='https://github.com/Rhaegar121' target='_blank' className={style.overlay}>
                    <FiGithub className={style.icon_hover} />
                    <FiGithub className={style.icon} />
                </a>
            </div>
            <div className={style.p}>
                <a href='https://github.com/Rhaegar121/Portfolio' target='_blank' className={style.a}>Brought into being by <span className={style.span}>©</span> Kaung Myat Kyaw</a>
            </div>
        </>
    )
}

export default Footer