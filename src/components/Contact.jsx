import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
import { fadeIn, textVariant, slideIn } from '../utils/motion';
import contact from '../assets/contact.svg';
import style from './styles/contact.module.css';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
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
        name: '',
        email: '',
        message: '',
      });
    }
  };

  return (
    <>
      <motion.h1 variants={textVariant()} className={style.title}>
        Get in Touch!
      </motion.h1>
      <motion.p variants={fadeIn('', '', 0.15, 1)} className={style.subtitle}>
        I&apos;m always excited to hear about new opportunities and collaborations. Don&apos;t hesitate to reach out and let&apos;s make something great.
      </motion.p>
      <div className={style.container}>
        <motion.form
          variants={slideIn('left', '', 0, 1)}
          onSubmit={handleSubmit}
          action="https://formspree.io/f/mgeqgkdd"
          method="post"
          className={style.form_container}
        >
          <div className={style.form}>
            <h4 className={style.form_title}>Contact Me</h4>
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
              placeholder="Your message"
              required
              maxLength="500"
              name="message"
              value={form.message}
              onChange={handleChange}
              className={`${style.input} ${style.textarea}`}
            />
            <button type="submit" className={style.btn_container}>
              <span className={style.btn_hover}>Get in touch</span>
              <span className={style.btn}>Get in touch</span>
            </button>
          </div>
        </motion.form>
        <motion.div variants={slideIn('right', '', 0, 1)} className={style.img_container}>
          <img src={contact} alt="contact" className={style.img} loading="lazy" />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, 'contact', 'my-0');
