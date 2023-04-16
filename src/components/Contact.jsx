import React from 'react';
import { SectionWrapper } from '../hoc';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import style from './styles/contact.module.css';

const Contact = () => {
  return (
    <div>
      <motion.h1 variants={textVariant()} className={style.title}>
        Contact
      </motion.h1>
      <motion.p variants={fadeIn("", "", 0.15, 1)} className={style.subtitle}>
        I'm always excited to hear about new opportunities and collaborations. Don't hesitate to reach out and let's make something great.
      </motion.p>
      <motion.form action="https://formspree.io/f/mgeqgkdd" method="post" className={style.form}>
          <input
            type="text"
            placeholder="Name"
            required
            maxLength="30"
            name="name"
            className={style.input}
          />
          <input
            type="email"
            placeholder="Email"
            required
            name="email"
            className={style.input}
          />
          <span className={style.error}></span>
          <textarea
            cols="30"
            rows="10"
            placeholder="Say something"
            required
            maxLength="500"
            name="message"
            className={`${style.input} ${style.textarea}`}
          ></textarea>
          <button type="submit" className={style.btn}>Get in touch</button>
      </motion.form>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");