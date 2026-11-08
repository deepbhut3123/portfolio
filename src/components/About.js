import { motion } from "framer-motion";

const sectionReveal = {
  hidden: { opacity: 0, y: 55, clipPath: "inset(0 0 18% 0)" },
  show: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const timelineCard = {
  hidden: {
    opacity: 0,
    y: 65,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Web & Mobile App Developer",
      company: "Encrypted Infoweb",
      duration: "Jul 2025 - Present",
      details:
        "Designing REST APIs, building React.js web dashboards, developing React Native mobile app screens, and managing secure MongoDB-backed services with authentication and middleware.",
    },
    {
      role: "MERN Stack & Mobile App Developer Intern",
      company: "Encrypted Infoweb",
      duration: "Jan 2025 - Jun 2025",
      details:
        "Worked on API development, frontend-backend integration, CRUD flows, React interfaces, mobile app workflows, and state management using React hooks and Context API.",
    },
    {
      role: "Front-End Intern",
      company: "Avadh Web",
      duration: "Jul 2024 - Aug 2024",
      details:
        "Built responsive interfaces, assisted with debugging and performance improvements, and supported cross-browser compatibility.",
    },
  ];

  return (
    <motion.section
      id="about"
      className="scroll-section scroll-section-left"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="section-head"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <p className="eyebrow">Why Work With Me</p>
        <h2>Practical systems for teams that need work to move faster</h2>
        <p>
          I work with businesses that need reliable software for real daily
          operations: orders, staff activity, customers, stock, payments,
          reports, attendance, and admin control. My focus is simple: understand
          the workflow clearly, build the right screens and APIs, and deliver a
          system your team can actually use.
        </p>
      </motion.div>

      <motion.div
        className="exp-list"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.16 } },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
      >
        {experiences.map((item) => (
          <motion.div
            key={item.role + item.duration}
            className="exp-card"
            variants={timelineCard}
          >
            <span className="exp-marker" />
            <h3>{item.role}</h3>
            <span>
              {item.company} | {item.duration}
            </span>
            <p>{item.details}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Experience;
