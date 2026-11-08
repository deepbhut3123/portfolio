import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <motion.nav className="nav" initial={{ y: -72, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}>
      <a className="brand" href="#home"><span className="brand-mark">DB.</span><span>Deep Bhut</span></a>
      <ul>{navItems.map((item) => <li key={item.label}><a href={item.href}>{item.label}</a></li>)}</ul>
      <a className="nav-cta" href="#contact"><span className="nav-cta-dot" /> Available <FiArrowUpRight /></a>
    </motion.nav>
  );
}
