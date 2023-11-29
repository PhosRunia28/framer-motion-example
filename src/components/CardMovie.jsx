/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
export default function CardMovie({ movie }) {
  return (
    <motion.div
      className="mx-auto flex w-full max-w-[16rem] flex-col justify-center rounded-md border border-black px-4 py-2 sm:mx-0"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
    >
      {/* top */}
      <div className="flex flex-col  gap-3">
        <h3 className="text-lg font-bold">{movie.Title}</h3>
        <h5 className="max-w-fit rounded-full border border-black px-4 py-1">
          {movie.Year}
        </h5>
      </div>
      {/* center */}
      <img
        src={movie.Poster}
        alt="movie"
        className="mx-auto w-44 bg-cover bg-no-repeat py-2"
      />
      {/* bottom */}
      <div className="mx-auto mt-2 max-w-fit rounded-full border bg-black px-5 py-1 text-center text-white">
        {movie.Type}
      </div>
    </motion.div>
  );
}
