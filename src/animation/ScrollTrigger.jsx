import { motion } from "framer-motion";
export default function ScrollTrigger() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-3xl font-bold">Scroll Trigger</h3>
      <motion.div
        className="mt-[100px] h-36 w-36 bg-blue-500"
        initial={{ opacity: 0, scale: 0, x: 100 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      ></motion.div>
      <motion.div
        className="mt-[200px] h-36 w-36 bg-blue-500"
        initial={{ opacity: 0, scale: 0, x: -100 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      ></motion.div>
      <motion.div
        className="mt-[200px] h-36 w-36 bg-blue-500"
        initial={{ opacity: 0, scale: 0, y: 100 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      ></motion.div>
    </div>
  );
}
