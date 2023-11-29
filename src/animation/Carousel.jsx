import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useState } from "react";
import scene1 from "../img/scene-1.jpg";
import scene2 from "../img/scene-2.jpg";
import scene3 from "../img/scene-3.jpg";
import scene4 from "../img/scene-4.jpg";
export default function Carousel() {
  const [positionIndex, setPositionIndex] = useState([0, 1, 2, 3, 4]);
  const images = [scene1, scene2, scene3, scene4, scene4];
  const positions = ["center", "left1", "left", "right", "right1"];
  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };
  function nextHandler() {
    setPositionIndex((prev) => {
      const updateIndex = prev.map((prevIndex) => (prevIndex + 1) % 5);
      return updateIndex;
    });
  }
  function prevHandler() {
    const newArray = [...positionIndex];
    const lastElement = newArray.pop();
    newArray.unshift(lastElement);
    setPositionIndex(newArray);
  }
  const renderedImage = images.map((image, index) => {
    return (
      <motion.img
        style={{ width: "40%", height: "350px" }}
        className="absolute rounded-lg bg-cover bg-center"
        initial="center"
        animate={positions[positionIndex[index]]}
        key={index}
        src={image}
        alt={image}
        transition={{ duration: 0.3 }}
        variants={imageVariants}
      />
    );
  });
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      {renderedImage}
      <div className="flex gap-4">
        <button
          type="button"
          className="mt-[440px] rounded-lg border border-black px-6 py-3"
          onClick={prevHandler}
        >
          <ArrowLeftIcon className="h-[1.4rem] w-[1.4rem]" />
        </button>
        <button
          type="button"
          className="mt-[440px] rounded-lg border border-black px-6 py-3"
          onClick={nextHandler}
        >
          <ArrowRightIcon className="h-[1.4rem] w-[1.4rem]" />
        </button>
      </div>
    </div>
  );
}
