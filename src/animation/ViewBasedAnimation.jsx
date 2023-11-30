import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const ViewBasedAnimation = () => {
  const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });
  const isInView = useInView(ref);

  useEffect(() => {
    console.log("Is in view -> ", isInView);
  }, [isInView]);

  return (
    <>
      <div style={{ height: "150vh" }}>
        <h2 className="pt-32 text-center text-3xl font-bold">Scroll Down</h2>
        <h2 className="pt-32 text-center text-3xl font-bold">Scroll Down</h2>
        <h2 className="pt-32 text-center text-3xl font-bold">Scroll Down</h2>
      </div>
      <motion.div
        style={{ height: "100vh", background: "black" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <div
        ref={ref}
        style={{
          height: "100vh",
          background: isInView ? "blue" : "red",
          transition: "2s background",
        }}
      />
    </>
  );
};

export default ViewBasedAnimation;
