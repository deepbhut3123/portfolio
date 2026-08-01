import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact">
      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 34, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.span
          className="contact-pulse"
          animate={{ scale: [1, 1.22, 1], opacity: [0.28, 0.48, 0.28] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        />
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
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.42 }}
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
      </motion.div>
    </section>
  );
};

export default Contact;
