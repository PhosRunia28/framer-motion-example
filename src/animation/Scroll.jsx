import { motion, useScroll } from "framer-motion";

export default function Scroll() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className={`fixed inset-x-0 top-0 h-4  origin-[0%] bg-blue-500`}
      ></motion.div>
    </>
  );
}
