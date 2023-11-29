/* eslint-disable react/prop-types */
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Reveal({ children, width = "fit-content" }) {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <>
      <div ref={ref} className={`relative ${width} overflow-hidden`}>
        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          initial={"hidden"}
          animate={mainControls}
          transition={{ duration: 1, delay: 0.25 }}
        >
          {children}
        </motion.div>
        <motion.div
          className="absolute inset-x-0 bottom-[4px] top-[4px] z-30 bg-green-500"
          variants={{ hidden: { left: 0 }, visible: { left: "100%" } }}
          initial={"hidden"}
          animate={slideControls}
          transition={{ duration: 0.5, ease: "easeIn" }}
        ></motion.div>
      </div>
    </>
  );
}
