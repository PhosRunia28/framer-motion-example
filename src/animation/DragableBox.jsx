import { motion } from "framer-motion";
export default function DragableBox() {
  return (
    <div className="mx-auto max-w-xl pt-10">
      <h2 className="mb-4 text-center text-3xl font-bold">Dragable Object</h2>
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <p>no Constraint</p>
          <motion.div className="h-20 w-20 bg-blue-500" drag></motion.div>
        </div>
        <div>
          <p>Y only Constraint</p>
          <motion.div className="h-20 w-20 bg-blue-500" drag="y"></motion.div>
        </div>
        <div>
          <p>Drag Constraint</p>
          <motion.div
            className="h-20 w-20 bg-blue-500"
            drag
            dragConstraints={{ left: 0, right: 100 }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
}
