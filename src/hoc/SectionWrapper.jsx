import { motion } from "framer-motion";
import style from './style.module.css'
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName, boolean) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: boolean, amount: 0.25 }}
        className={style.container}
      >
        <span id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

const ContactWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={style.contact}
      >
        <span id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export { SectionWrapper, ContactWrapper };