import React from 'react';
import {
  FiFacebook, FiLinkedin, FiInstagram, FiTwitter, FiGithub,
} from 'react-icons/fi';

import style from './styles/footer.module.css';

const Footer = () => (
  <>
    <div className={style.icon_container}>
      <a href="https://www.linkedin.com/in/kaungmyatkyaw/" target="_blank" className={style.overlay} rel="noreferrer">
        <FiLinkedin className={style.icon_hover} />
        <FiLinkedin className={style.icon} />
      </a>
      <a href="https://www.facebook.com/linthantkhai" target="_blank" className={style.overlay} rel="noreferrer">
        <FiFacebook className={style.icon_hover} />
        <FiFacebook className={style.icon} />
      </a>
      <a href="https://www.instagram.com/rhaegar_121/?hl=en" target="_blank" className={style.overlay} rel="noreferrer">
        <FiInstagram className={style.icon_hover} />
        <FiInstagram className={style.icon} />
      </a>
      <a href="https://twitter.com/Rhaegar121" target="_blank" className={style.overlay} rel="noreferrer">
        <FiTwitter className={style.icon_hover} />
        <FiTwitter className={style.icon} />
      </a>
      <a href="https://github.com/Rhaegar121" target="_blank" className={style.overlay} rel="noreferrer">
        <FiGithub className={style.icon_hover} />
        <FiGithub className={style.icon} />
      </a>
    </div>
    <abbr title="Source Code" className={style.p}>
      <a href="https://github.com/Rhaegar121/Portfolio" target="_blank" className={style.a} rel="noreferrer">
        Brought into being by
        {' '}
        <span className={style.span}>©</span>
        {' '}
        Kaung Myat Kyaw
      </a>
    </abbr>
  </>
);

export default Footer;
