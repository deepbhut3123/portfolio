import { motion } from "framer-motion";
import { FiBarChart2, FiDatabase, FiMonitor, FiRepeat, FiServer, FiSmartphone } from "react-icons/fi";

const skillGroups = [
  {
    title: "Business Dashboards",
    icon: FiMonitor,
    level: 92,
    skills: ["Admin Panels", "CRM", "ERP", "Reports", "React.js"],
  },
  {
    title: "Mobile Apps",
    icon: FiSmartphone,
    level: 88,
    skills: ["React Native", "Expo", "Field Teams", "Customer Apps"],
  },
  {
    title: "Backend Systems",
    icon: FiServer,
    level: 90,
    skills: ["REST APIs", "Node.js", "Express.js", "JWT", "Roles"],
  },
  {
    title: "Data & Reports",
    icon: FiDatabase,
    level: 84,
    skills: ["MongoDB", "Statements", "PDF Reports", "Filters"],
  },
  {
    title: "Workflow Automation",
    icon: FiRepeat,
    level: 78,
    skills: ["Approvals", "Notifications", "AI Support", "Operations"],
  },
  {
    title: "Launch Support",
    icon: FiBarChart2,
    level: 82,
    skills: ["Git", "API Integration", "Deployment", "Maintenance"],
  },
];

const reveal = {
  hidden: { opacity: 0, x: 56, clipPath: "inset(0 0 0 12%)" },
  show: {
    opacity: 1,
    x: 0,
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="scroll-section scroll-section-right"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="services-layout">
        <motion.div
          className="section-head skills-head"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
        >
          <p className="eyebrow">Services</p>
          <h2>What I can build for your business</h2>
          <p className="section-note">
            From planning the workflow to building the dashboard, mobile app,
            database, APIs, and reports, I focus on software that supports daily
            business operations.
          </p>
          <span className="services-decor" aria-hidden="true" />
        </motion.div>

        <motion.div
          className="skills-radar"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.08 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          {skillGroups.map((group, index) => (
            <motion.article key={group.title} className="service-row" variants={reveal}>
              <div className="service-row-heading">
                <span className="service-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="service-icon"><group.icon aria-hidden="true" /></span>
              </div>
              <div className="service-copy">
                <h4>{group.title}</h4>
                <div className="service-chips">
                  {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </div>
              <div className="service-meter" aria-label={`${group.level}%`}>
                <svg viewBox="0 0 100 100" aria-hidden="true">
                  <circle className="service-meter-track" cx="50" cy="50" r="42" />
                  <motion.circle
                    className="service-meter-fill"
                    cx="50" cy="50" r="42"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: group.level / 100 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.2, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  />
                </svg>
                <strong>{group.level}%</strong>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
