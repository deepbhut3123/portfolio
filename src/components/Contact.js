import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="scroll-section scroll-section-right"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="contact-copy">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12, duration: 0.35 }}
        >
          Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 80, clipPath: "inset(0 0 20% 0)" }}
          whileInView={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
          viewport={{ once: true }}
          transition={{ delay: 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          Let&apos;s build something meaningful
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.28, duration: 0.42 }}
        >
          I&apos;m open to full-time roles and freelance product work in full stack
          web development, React Native mobile app development, ERP systems, and
          workflow automation.
        </motion.p>
        <motion.div
          className="contact-actions"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.35 } },
          }}
        >
          <motion.a
            className="primary"
            href="mailto:deepbhut3123@gmail.com"
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            deepbhut3123@gmail.com
          </motion.a>
          <motion.a
            className="outline"
            href="tel:+919427939657"
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            +91 94279 39657
          </motion.a>
          <motion.a
            className="outline"
            href="https://www.linkedin.com/in/deep-bhut-5747891bb/"
            target="_blank"
            rel="noreferrer"
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            LinkedIn
          </motion.a>
        </motion.div>
        </div>
        <motion.div
          className="contact-visual"
          initial={{ opacity: 0, scale: 0.8, rotate: -18 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="contact-visual-halo" aria-hidden="true" />
          <span className="contact-orbit contact-orbit-outer" aria-hidden="true" />
          <span className="contact-orbit contact-orbit-middle" aria-hidden="true" />
          <span className="contact-orbit contact-orbit-inner" aria-hidden="true" />
          <span className="contact-satellite contact-satellite-one" aria-hidden="true"><i /></span>
          <span className="contact-satellite contact-satellite-two" aria-hidden="true"><i /></span>
          <span className="contact-satellite contact-satellite-three" aria-hidden="true"><i /></span>
          <a className="contact-visual-link" href="mailto:deepbhut3123@gmail.com" aria-label="Email Deep Bhut">
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
