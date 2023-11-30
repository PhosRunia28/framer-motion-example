import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Navigation from "../Navigation";

export default function NavBar() {
  const containerAnimation = {
    hidden: { x: -230 },
    show: { x: 0 },
  };
  const ButtonAnimation = {
    hidden: { x: 0 },
    show: { x: 223 },
  };
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <AnimatePresence>
        <motion.div
          variants={containerAnimation}
          initial="show"
          animate={isOpen ? "show" : "hidden"}
          exit="show"
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed z-50 flex h-screen w-full max-w-[14rem] flex-col gap-4 overflow-y-scroll bg-black px-8 py-6"
        >
          <Navigation to="/">Home</Navigation>
          <Navigation to="/textanimation">Text Animation</Navigation>
          <Navigation to="/animatedtabs">AnimatedTabs</Navigation>
          <Navigation to="/cardlayoutexpand">CardLayoutExpand</Navigation>
          <Navigation to="/carousel">Carousel</Navigation>
          <Navigation to="/dragablebox">DragableBox</Navigation>
          <Navigation to="/exitenter">ExitEnter</Navigation>
          <Navigation to="/gesture">Gesture</Navigation>
          <Navigation to="/hovertap">HoverTap</Navigation>
          <Navigation to="/scrollanimation">Scroll Animation</Navigation>
          <Navigation to="/scrolltrigger">Scroll Trigger</Navigation>
          <Navigation to="/useanimationcontrol">
            Use Animation <br /> Control
          </Navigation>
          <Navigation to="/viewbasedanimation">
            View Based <br /> Animation
          </Navigation>
          <Navigation to="/reveal">Reveal</Navigation>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          className="fixed top-0 z-50"
          variants={ButtonAnimation}
          initial="show"
          animate={isOpen ? "show" : "hidden"}
          exit="show"
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <button className="bg-red-500 p-2" onClick={() => setIsOpen(!isOpen)}>
            <ChevronLeftIcon className="h-[1.8rem] w-[1.8rem]" />
          </button>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
