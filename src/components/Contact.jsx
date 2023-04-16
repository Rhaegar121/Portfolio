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
      <motion.form action="https://formspree.io/f/mgeqgkdd" method="post">
          <input
            type="text"
            placeholder="Full name"
            required
            maxlength="30"
            name="name"
          />
          <input
            type="email"
            placeholder="Email address"
            required
            name="email"
          />
          <span></span>
          <textarea
            cols="30"
            rows="10"
            placeholder="Say something"
            required
            maxlength="500"
            name="message"
          ></textarea>
          <button type="submit">Get in touch</button>
      </motion.form>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");