import React from "react";
import style from "./styles/home.module.css";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const Home = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className={style.container}>
        <p className={style.intro}>
          Hi, I'm{" "}
          <motion.span variants={fadeIn("", "", 0.1, 1)} className={style.name}>
            Kaung Myat Kyaw
          </motion.span>
        </p>
        <p className={style.intro}>
          But you can call me{" "}
          <motion.span variants={fadeIn("", "", 0.3, 1)} className={style.name}>
            Barry
          </motion.span>
        </p>
        <motion.p variants={fadeIn("", "", 0.5, 1)} className={style.desc}>
          I am a full-stack web developer
        </motion.p>
        <motion.button
          variants={fadeIn("", "", 0.6, 1)}
          className={style.btn}
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
        >
          Check out my work
          <MdOutlineArrowForwardIos className={style.arrow} />
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Home;
