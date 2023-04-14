import React from "react";
import style from "./styles/popup.module.css";

const Popup = ({ handleClose, project }) => {
  return (
    <div className={style.popup_overlay}>
      <div className={style.popup_container}>
        <button className={style.close_btn} onClick={handleClose}>
          Close
        </button>
        <img className={style.img} src={project.img} alt="project sample" />
        <div className={style.content}>
          <h2 className={style.name}>{project.name}</h2>
          <p className={style.description}>{project.description}</p>
          <p className={style.tech}>
            {project.tech.map((i) => (
              <span className={style.tech_list}>{`#${i}`}</span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Popup;