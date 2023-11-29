import { motion } from "framer-motion";

export default function TextAnimation() {
  return (
    <motion.h1
      className="cursor-pointer text-2xl font-bold"
      initial={{ x: -100 }}
      animate={{ x: [0, 900, 0] }}
      transition={{ duration: 1 }}
      whileHover={{ scale: 0.9, opacity: 0.2 }}
    >
      this is h1 from motion
    </motion.h1>
  );
}
