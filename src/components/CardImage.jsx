import { motion } from "framer-motion";
import { useState } from "react";
import scene1 from "../img/scene-1.jpg";
import scene2 from "../img/scene-2.jpg";
import scene3 from "../img/scene-3.jpg";
import scene4 from "../img/scene-4.jpg";
export default function CardImage() {
  const [isExpanded, setIsExpanded] = useState(null);
  const cardImage = [
    {
      src: scene1,
      alt: "gambar 1",
    },
    {
      src: scene2,
      alt: "gambar 2",
    },
    {
      src: scene3,
      alt: "gambar 3",
    },
    {
      src: scene4,
      alt: "gambar 4",
    },
    {
      src: scene4,
      alt: "gambar 5",
    },
  ];
  const handlerClick = (index) => {
    const expanded = isExpanded == index ? -1 : index;
    setIsExpanded(expanded);
  };
  const cardsVariants = {
    collapsed: {
      width: "300px",
    },
    expanded: {
      width: "400px",
    },
  };
  return (
    <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-4 py-20">
      {cardImage.map((card, index) => {
        return (
          <motion.div
            className={`h-[400px] cursor-pointer rounded-lg border bg-center bg-no-repeat`}
            style={{ backgroundImage: `url(${card.src})` }}
            key={index}
            variants={cardsVariants}
            onClick={() => handlerClick(index)}
            initial={"collapsed"}
            animate={index == isExpanded ? "expanded" : "collapsed"}
            transition={{ duration: 0.4 }}
          >
            <div className="flex h-full flex-col items-center justify-end">
              <div className="w-full space-y-4 bg-black px-4 py-5 text-white">
                <h2 className="text-center text-2xl font-bold">Title</h2>
                {isExpanded == index && (
                  <p className="mx-auto max-w-sm  tracking-wide">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Soluta recusandae tempora adipisci quidem libero fugit ipsam
                    a, aliquam nemo consequatur dolorem obcaecati, voluptatibus
                    amet nihil velit in accusamus corrupti quis?
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
