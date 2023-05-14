import React from "react";
import style from "./styles/popup.module.css";
import { AiOutlineClose } from 'react-icons/ai';
import Carousel from "./Carousel";

const Popup = ({ handleClose, project }) => {
  return (
    <div className={style.overlay}>
      <div className={style.container}>
        <AiOutlineClose className={style.close_btn} onClick={handleClose} />
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
            <a href={project.live_link} target="_blank" className={`${style.live_link} ${style.btn}`}>View Live</a>
            <a href={project.source_link} target="_blank" className={`${style.source_link} ${style.btn}`}>View Source</a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;