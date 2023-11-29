import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export default function CardBiasa() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      className="mx-auto flex max-w-xs items-center justify-center gap-3 border border-black"
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
    >
      <div className="flex flex-col gap-4 rounded-md border px-4 py-2">
        <h2 className="text-xl font-bold">Title</h2>
        <p className="text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe labore
          rerum blanditiis neque quis amet et vero minima explicabo cupiditate
          dolores ad deleniti alias tenetur, libero recusandae, rem veniam
          fugit?
        </p>
        <button
          type="button"
          className="max-w-fit border border-black px-5 py-2"
        >
          Button
        </button>
      </div>
    </motion.div>
  );
}
