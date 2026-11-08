import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 130, damping: 28, restDelta: 0.001 });

  return (
    <div className="scroll-progress" aria-hidden="true">
      <motion.div className="scroll-progress-bar" style={{ scaleX }} />
    </div>
  );
}
