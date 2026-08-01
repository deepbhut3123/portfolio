import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiLayers,
  FiSmartphone,
  FiZap,
} from "react-icons/fi";

const metrics = [
  { label: "Experience", value: "1+ yr" },
  { label: "Products", value: "5+" },
  { label: "Focus", value: "Web + App" },
];

const capabilities = [
  { icon: FiLayers, label: "ERP + CRM" },
  { icon: FiSmartphone, label: "Mobile Apps" },
  { icon: FiZap, label: "REST APIs" },
];

const stack = ["React", "React Native", "Expo", "Node.js", "MongoDB"];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
};

const reveal = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero = () => {
  return (
    <section className="hero hero-command" id="home">
      <motion.div
        className="hero-stage"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div className="hero-intro" variants={reveal}>
          <motion.p className="hero-kicker" variants={reveal}>
            <span />
            Full Stack Web & Mobile App Developer
          </motion.p>

          <motion.h1 variants={reveal}>
            I build operating systems for growing businesses.
          </motion.h1>

          <motion.p className="hero-lead" variants={reveal}>
            I design and develop web dashboards, ERP and CRM workflows, React
            Native mobile apps, and secure backend APIs that help real teams
            manage customers, orders, staff, payments, reports, and daily
            operations.
          </motion.p>

          <motion.div className="hero-actions" variants={reveal}>
            <motion.a
              href="#projects"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Work
              <FiArrowUpRight />
            </motion.a>
            <motion.a
              href="#contact"
              className="secondary"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start a Conversation
            </motion.a>
          </motion.div>

          <motion.div className="hero-stack" variants={container}>
            {stack.map((item) => (
              <motion.span key={item} variants={reveal}>
                {item}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="hero-visual" variants={reveal}>
          <motion.div
            className="visual-glow"
            animate={{ scale: [1, 1.08, 1], opacity: [0.28, 0.48, 0.28] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="console-card"
            whileHover={{ y: -8, rotate: -0.5 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
          >
            <div className="console-bar">
              <span />
              <span />
              <span />
              <p>product-builder.js</p>
            </div>
            <div className="console-lines">
              <p>
                <span>const</span> product = buildWorkflow(
              </p>
              <p className="indent">&quot;erp-crm-dashboard&quot;,</p>
              <p className="indent">&quot;mobile-app&quot;,</p>
              <p className="indent">&quot;secure-api&quot;</p>
              <p>);</p>
            </div>
          </motion.div>

          <motion.div
            className="floating-card floating-card-one"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <FiCheckCircle />
            <div>
              <strong>Role based</strong>
              <span>Admin, sales, staff, dealer</span>
            </div>
          </motion.div>

          <motion.div
            className="floating-card floating-card-two"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <FiSmartphone />
            <div>
              <strong>App ready</strong>
              <span>Expo and React Native flows</span>
            </div>
          </motion.div>

          <div className="capability-strip">
            {capabilities.map((item) => (
              <motion.div key={item.label} whileHover={{ y: -5 }}>
                <item.icon />
                <span>{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="hero-metrics" variants={container}>
          {metrics.map((metric) => (
            <motion.div key={metric.label} variants={reveal} whileHover={{ y: -4 }}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
