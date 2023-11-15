import React from 'react';
import PropTypes from 'prop-types';
import { TfiClose } from 'react-icons/tfi';
import { motion } from 'framer-motion';
import { zoomIn } from '../utils/motion';
import style from './styles/popup.module.css';
import Carousel from './Carousel';

const Popup = ({ handleClose, project }) => (
  <motion.div
    className={style.overlay}
    initial="hidden"
    animate="show"
    exit={{ opacity: 0, scale: 0, transition: { type: 'tween', duration: 0.5 } }}
    variants={zoomIn(0, 0.5)}
  >
    <div className={style.container}>
      <TfiClose className={style.close_btn} onClick={handleClose} />
      <Carousel carousel={project.carousel} />
      <div className={style.content}>
        <h2 className={style.name}>{project.name}</h2>
        <p className={style.tech}>
          {project.tech.map((i) => (
            <span key={i} className={style.tech_list}>{`#${i}`}</span>
          ))}
        </p>
        <p className={style.description}>{project.desc}</p>
        <div className={style.link}>
          <a href={project.source_link} target="_blank" className={`${style.source_link} ${style.btn_container}`} rel="noreferrer">
            <span className={style.btn_hover}>View Source</span>
            <span className={style.btn}>View Source</span>
          </a>
          {project.id !== 2 && project.id !== 5 ? (
            <a href={project.live_link} target="_blank" className={`${style.live_link} ${style.btn_container}`} rel="noreferrer">
              <span className={style.btn_hover}>View Live</span>
              <span className={style.btn}>View Live</span>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  </motion.div>
);

Popup.propTypes = {
  handleClose: PropTypes.func.isRequired,
  project: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Popup;
