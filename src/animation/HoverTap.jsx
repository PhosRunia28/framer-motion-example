import { motion } from "framer-motion";
import { useState } from "react";
export default function HoverTap() {
  const [showCard, setShowCard] = useState(false);
  return (
    <div className="flex cursor-pointer items-center justify-center py-20">
      <motion.div
        className="rounded-lg bg-black px-4 py-2 text-white shadow-lg"
        whileHover={{ scale: 1.1 }}
        transition={{
          layout: {
            duration: 1,
            type: "spring",
          },
        }}
        layout
        onClick={() => setShowCard(!showCard)}
      >
        <motion.h3 className="px-8 py-4">Click Me</motion.h3>
        {showCard && (
          <motion.p
            className="mt-3 w-64"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            veritatis accusamus officia nesciunt aliquam asperiores,
            perspiciatis provident. Nihil modi maxime amet porro officia
            similique, voluptates quo obcaecati. Impedit minus iste quae, odio
            quasi voluptate odit, magni eveniet, laudantium quod est?
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
