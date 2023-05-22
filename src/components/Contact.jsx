import React, { useState } from 'react';
import { SectionWrapper } from '../hoc';
import { motion } from "framer-motion";
import { fadeIn, textVariant, zoomIn } from "../utils/motion";
import style from './styles/contact.module.css';

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const isValid = form.checkValidity();
    if (isValid) {
      // Submit the form
      form.submit();
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <>
      <motion.h1 variants={textVariant()} className={style.title}>
        Get in Touch!
      </motion.h1>
      <motion.p variants={fadeIn("", "", 0.15, 1)} className={style.subtitle}>
        I'm always excited to hear about new opportunities and collaborations. Don't hesitate to reach out and let's make something great.
      </motion.p>
      <motion.form
        variants={zoomIn(0.15, 0.75)}
        onSubmit={handleSubmit}
        action="https://formspree.io/f/mgeqgkdd"
        method="post"
        className={style.form}
      >
          <input
            type="text"
            placeholder="Name"
            required
            maxLength="30"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={style.input}
          />
          <input
            type="email"
            placeholder="Email"
            required
            name="email"
            value={form.email}
            onChange={handleChange}
            className={style.input}
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="Say something"
            required
            maxLength="500"
            name="message"
            value={form.message}
            onChange={handleChange}
            className={`${style.input} ${style.textarea}`}
          ></textarea>
          <button type="submit" className={style.btn}>Get in touch</button>
      </motion.form>
    </>
  )
}

export default SectionWrapper(Contact, "contact", false, "my-0");