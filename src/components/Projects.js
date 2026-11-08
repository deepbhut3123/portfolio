import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "JB Corporations CRM & Sales Platform",
      details:
        "Developed a full-stack internal CRM for leads, customers, products, categories, quotations, sales orders, reports, role-based access, global search, and WhatsApp workflows, with PDF generation and CSV lead exports.",
      tools: "React.js, Vite, Ant Design, Node.js, Express.js, MongoDB, JWT, WhatsApp API",
    },
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
    <section id="projects" className="projects-section">
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

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 72, clipPath: "inset(0 0 24% 0)" }}
            whileInView={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
            <div className="project-tools">
              {project.tools.split(", ").map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
            <div className="project-graphic" aria-hidden="true">
              <span className="project-graphic-ring" />
              <span className="project-graphic-number">{String(index + 1).padStart(2, "0")}</span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
