import React, { useState } from "react";
import style from "./styles/work.module.css";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import Popup from "./Popup";

const Work = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handlePopupClick = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handlePopupClose = () => {
    setSelectedProject(null);
    setOpen(false);
  };

  return (
    <div>
      <motion.h1 variants={textVariant()} className={style.title}>
        My Recent Works
      </motion.h1>
      <div className={style.project_container}>
        {/* Projects Card */}
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            variants={fadeIn("up", "spring", index * 0.4, 0.75)}
            index={index}
            className={style.card}
          >
            <img className={style.img} src={project.img} alt="project sample" />
            <div className={style.card_overlay}>
              <div className={style.card_text}>
                <div className={style.text}>
                  <h2 className={style.name}>{project.name}</h2>
                  <p className={style.tech}>
                    {project.tech.map((i) => (
                      <span className={style.tech_list}>{`#${i}`}</span>
                    ))}
                  </p>
                </div>
                <button className={style.btn} onClick={() => handlePopupClick(project)}>
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Popup Window */}
      {isOpen && (
        <div className={style.popup}>
          <Popup handleClose={handlePopupClose} project={selectedProject} />
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Work, "work");
