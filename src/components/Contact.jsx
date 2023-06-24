import React, { useState } from 'react';
import { SectionWrapper } from '../hoc';
import { motion } from "framer-motion";
import { fadeIn, textVariant, zoomIn } from "../utils/motion";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import style from './styles/contact.module.css';
import 'leaflet/dist/leaflet.css';

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
      <div className={style.container}>
      <motion.form
        // variants={zoomIn(0.15, 0.75)}
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
          <button type="submit" className={style.btn_container}>
            <span className={style.btn_hover}>Get in touch</span>
            <span className={style.btn}>Get in touch</span>
          </button>
      </motion.form>
      <div className={style.mapContainer}>
        <MapContainer center={[16.839148, 96.173453]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
            attribution="© OpenStreetMap contributors"
          />
          <Marker position={[16.839148, 96.173453]}>
            <Popup>
              Wanna have a virtual coffee? <br /> Send me a message.
            </Popup>
          </Marker>
          <div className={style.info}>
            <p>Kaung Myat Kyaw</p>
            <p>Yangon, Myanmar</p>
          </div>
        </MapContainer>
      </div>
      </div>
    </>
  )
}

export default SectionWrapper(Contact, "contact", "my-0");