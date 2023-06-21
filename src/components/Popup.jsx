import React from "react";
import style from "./styles/popup.module.css";
import { TfiClose } from 'react-icons/tfi';
import Carousel from "./Carousel";

const Popup = ({ handleClose, project }) => {
  return (
    <div className={style.overlay}>
      <div className={style.container}>
        <TfiClose className={style.close_btn} onClick={handleClose} />
        <Carousel carousel={project.carousel} />
        <div className={style.content}>
            <h2 className={style.name}>{project.name}</h2>
            <p className={style.tech}>
                {project.tech.map((i) => (
                    <span className={style.tech_list}>{`#${i}`}</span>
                ))}
            </p>
            <p className={style.description}>{project.desc}</p>
        <div className={style.link}>
            <a href={project.live_link} target="_blank" className={`${style.live_link} ${style.btn_container}`}>
              <span className={style.btn_hover}>View Live</span>
              <span className={style.btn}>View Live</span>
            </a>
            <a href={project.source_link} target="_blank" className={`${style.source_link} ${style.btn_container}`}>
              <span className={style.btn_hover}>View Source</span>
              <span className={style.btn}>View Source</span>
            </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;