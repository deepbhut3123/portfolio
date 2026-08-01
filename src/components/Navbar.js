import { motion } from "framer-motion";
import { FiBriefcase, FiCode, FiHome, FiMail, FiUser } from "react-icons/fi";

const navItems = [
  { href: "#about", icon: FiUser, label: "About" },
  { href: "#skills", icon: FiCode, label: "Skills" },
  { href: "#projects", icon: FiBriefcase, label: "Projects" },
  { href: "#contact", icon: FiMail, label: "Contact" },
];

const Navbar = () => {
  return (
    <motion.nav
      className="nav"
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.a
        href="#home"
        className="brand"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="brand-mark">
          <FiHome />
        </span>
        <span>
          Deep <strong>Bhut</strong>
        </span>
      </motion.a>
      <motion.ul
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
        }}
      >
        {navItems.map((item) => (
          <motion.li
            key={item.label}
            variants={{
              hidden: { opacity: 0, y: -12 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.35 }}
            whileHover={{ y: -2 }}
          >
            <a href={item.href}>
              <item.icon />
              <span>{item.label}</span>
            </a>
          </motion.li>
        ))}
      </motion.ul>
      <motion.a
        className="nav-cta"
        href="#contact"
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="nav-cta-dot" />
        Available
      </motion.a>
    </motion.nav>
  );
};

export default Navbar;
