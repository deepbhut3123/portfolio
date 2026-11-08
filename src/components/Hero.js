import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiArrowDownRight, FiArrowUpRight, FiCheckCircle, FiLayers, FiSmartphone, FiZap } from "react-icons/fi";
import PortfolioScene from "./PortfolioScene";

const metrics = [
  { label: "Business Apps", value: "5+" },
  { label: "Delivery Focus", value: "Web + App" },
  { label: "Client Ready", value: "ERP/CRM" },
];

const capabilities = [
  { icon: FiLayers, label: "Business Systems" },
  { icon: FiSmartphone, label: "Mobile Workflows" },
  { icon: FiZap, label: "Secure APIs" },
];

const stack = ["React", "React Native", "Expo", "Node.js", "MongoDB"];

export default function Hero() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const copyY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -60]);

  return (
    <section className="hero" id="home" ref={ref}>
      <div className="hero-main">
        <motion.div className="hero-intro" style={{ y: copyY }}>
          <motion.p className="hero-kicker" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <span className="status-dot" /> Client-focused full stack product developer
          </motion.p>
          <div className="hero-heading-mask">
            <motion.h1 initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}>
              I build business apps that simplify daily operations.
            </motion.h1>
          </div>
          <motion.p className="hero-lead" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }}>
            I help growing businesses turn manual work into clean web dashboards, mobile apps, ERP and CRM workflows, and secure backend systems for orders, staff, payments, reports, and customer management.
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.58 }}>
            <a href="#projects" className="button button-primary">View Client Work <FiArrowUpRight /></a>
            <a href="#contact" className="button button-outline">Discuss a Project <FiArrowUpRight /></a>
          </motion.div>
        </motion.div>
        <div className="hero-artwork">
          <div className="artwork-grid" />
          <div className="artwork-orbit artwork-orbit-one" />
          <div className="artwork-orbit artwork-orbit-two" />
          <PortfolioScene />
          <div className="artwork-label artwork-label-top"><span>01 / 05</span> Crafted for real workflows</div>
          <div className="artwork-code">
            <span>product-builder.js</span>
            <code>const product = buildWorkflow(<br />&nbsp;&nbsp;"erp-crm-dashboard",<br />&nbsp;&nbsp;"mobile-app",<br />&nbsp;&nbsp;"secure-api"<br />);</code>
          </div>
          <div className="artwork-label artwork-label-bottom"><FiCheckCircle /> Role based <span>Admin, staff, dealer, customer</span></div>
          <div className="artwork-tag"><FiSmartphone /> App ready <span>Field teams and customer flows</span></div>
        </div>
      </div>
      <div className="hero-bottom">
        <div className="hero-metrics">
          {metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
        </div>
        <div className="hero-stack">
          {stack.map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>
      <div className="hero-footer">
        <div className="capability-strip">{capabilities.map((item) => <div key={item.label}><item.icon /><span>{item.label}</span></div>)}</div>
        <a className="hero-scroll-cue" href="#about">Scroll to explore <FiArrowDownRight /></a>
      </div>
    </section>
  );
}
