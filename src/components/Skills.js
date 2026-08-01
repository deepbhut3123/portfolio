import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    level: 92,
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Mobile",
    level: 88,
    skills: ["React Native", "Expo", "App Navigation", "Mobile UI"],
  },
  {
    title: "Backend",
    level: 90,
    skills: ["Node.js", "Express.js", "REST APIs", "JWT", "Middleware"],
  },
  {
    title: "Database",
    level: 84,
    skills: ["MongoDB", "Schema Design", "CRUD", "Indexing"],
  },
  {
    title: "Automation",
    level: 78,
    skills: ["ChatGPT API", "Prompt Engineering", "Workflow Automation"],
  },
  {
    title: "Tools",
    level: 82,
    skills: ["Git", "Firebase", "API Integration", "Deployment Builds"],
  },
];

const reveal = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.46, ease: [0.22, 1, 0.36, 1] },
  },
};

const Skills = () => {
  return (
    <section id="skills">
      <motion.div
        className="section-head skills-head"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.55 }}
      >
        <p className="eyebrow">Technical Skills</p>
        <h2>Core technologies I work with</h2>
      </motion.div>

      <motion.div
        className="skills-radar"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.14 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
      >
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            className="radar-skill"
            variants={reveal}
            whileHover={{ y: -8, scale: 1.015 }}
          >
            <div className="radar-skill-top">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{group.level}%</strong>
            </div>
            <h4>{group.title}</h4>
            <div className="radar-meter" aria-hidden="true">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: `${group.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: 0.12 + index * 0.04 }}
              />
            </div>
            <div className="radar-chips">
              {group.skills.map((skill) => (
                <motion.span key={skill} whileHover={{ y: -3 }}>
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
