import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName, margin) => function HOC() {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`max-w-[90%] mx-auto ${margin}`}
    >
      <span id={idName}>
          &nbsp;
      </span>

      <Component />
    </motion.section>
  );
};

export default SectionWrapper;
