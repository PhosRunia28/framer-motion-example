import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
export default function ExitEnter() {
  const [show, setShow] = useState(true);
  return (
    <div className="flex flex-col items-center gap-2 py-20">
      <h2 className="text-3xl font-bold">exit enter</h2>
      <AnimatePresence>
        {show && (
          <motion.div
            className="my-8 h-32 w-32 border border-black bg-blue-500"
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 100 }}
            exit={{ opacity: 0, x: -150 }}
            transition={{ duration: 0.5 }}
          ></motion.div>
        )}
      </AnimatePresence>
      <button
        type="button"
        className="border-2 border-black px-6 py-2"
        onClick={() => setShow(!show)}
      >
        {show ? "Remove Box" : "Show Box"}
      </button>
    </div>
  );
}
