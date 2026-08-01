import { motion } from "framer-motion";

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const timelineCard = {
  hidden: (index) => ({
    opacity: 0,
    x: index % 2 === 0 ? -42 : 42,
    y: 22,
  }),
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
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
    <section id="about">
      <motion.div
        className="section-head"
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <p className="eyebrow">About Me</p>
        <h2>From internship tasks to web and mobile product ownership</h2>
        <p>
          Full Stack Developer with 1+ year practical delivery experience in
          web apps, mobile apps, ERP systems, marketplace flows, and
          automation-driven platforms. I enjoy turning business requirements
          into reliable features that work smoothly across screens and devices.
        </p>
      </motion.div>

      <motion.div
        className="exp-list"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12 } },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
      >
        {experiences.map((item, index) => (
          <motion.div
            key={item.role + item.duration}
            className="exp-card"
            custom={index}
            variants={timelineCard}
            whileHover={{ y: -7, scale: 1.01 }}
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
    </section>
  );
};

export default Experience;
