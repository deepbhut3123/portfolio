import { motion } from "framer-motion";

const projectGrid = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const projectCard = {
  hidden: (index) => ({
    opacity: 0,
    x: index % 2 === 0 ? -34 : 34,
    y: 36,
    rotate: index % 2 === 0 ? -1.5 : 1.5,
  }),
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const toolChip = {
  hidden: { opacity: 0, scale: 0.88, y: 8 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.24 },
  },
};

const Projects = () => {
  const projects = [
    {
      title: "Veerraaj Foods ERP & Mobile App",
      details:
        "Built a web ERP and Expo mobile app for Veerraaj Foods covering routes, shops, retailer bills, dealer products, dealer bills, payments, statements, stock, expenses, attendance, users, and role-based dashboards for admin, dealer, staff, delivery, and retailer workflows.",
      tools: "React.js, TypeScript, Ant Design, React Native, Expo, Node.js, MongoDB",
    },
    {
      title: "Corbital Enterprise Workforce App",
      details:
        "Built an Expo mobile app and Express backend for employee operations, including secure login, user management, attendance with location logs, monthly targets, value entries, holidays, admin dashboards, and downloadable salary PDF reports calculated from attendance, holidays, fixed salary, variable salary, and target achievement.",
      tools: "React Native, Expo, Node.js, Express.js, MongoDB, JWT, PDFKit",
    },
    {
      title: "Ewa4ever Beauty Salon",
      details:
        "Created end-to-end booking system with real-time appointment scheduling, cross-platform mobile experience, and multilingual support for users.",
      tools: "Next.js, React Native, Node.js, MongoDB",
    },
    {
      title: "Employee ERP Management",
      details:
        "Worked across Task Management, CRM, HRMS, and Attendance modules with REST APIs, role-based access control, and performance-focused data handling.",
      tools: "MongoDB, Express.js, React.js, Node.js",
    },
    {
      title: "Analytixware",
      details:
        "Built interactive dashboards for business insights with filtering, data visualization, and responsive UI focused on usability and speed.",
      tools: "HTML, CSS, JavaScript, Bootstrap",
    },
  ];

  return (
    <section id="projects">
      <motion.div
        className="section-head projects-head"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.55 }}
      >
        <p className="eyebrow">Selected Work</p>
        <h2>Web and mobile products built in real team environments</h2>
        <p className="section-note">
          These projects include production web dashboards, ERP systems, mobile
          apps, APIs, and workflow tools developed for office and client
          delivery.
        </p>
      </motion.div>

      <motion.div
        className="projects-grid"
        variants={projectGrid}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className={`project-card ${index < 2 ? "project-card-featured" : ""}`}
            custom={index}
            variants={projectCard}
            whileHover={{
              y: -10,
              scale: 1.015,
              transition: { duration: 0.22 },
            }}
          >
            <div className="project-card-top">
              <span className="project-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="project-type">
                {project.title.toLowerCase().includes("mobile") ||
                project.tools.toLowerCase().includes("react native")
                  ? "Web + Mobile"
                  : "Web Product"}
              </span>
            </div>

            <div className="project-copy">
              <h3>{project.title}</h3>
              <p>{project.details}</p>
            </div>

            <motion.div
              className="project-tools"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.035,
                    delayChildren: 0.14,
                  },
                },
              }}
            >
              {project.tools.split(", ").map((tool) => (
                <motion.span key={tool} variants={toolChip}>
                  {tool}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
