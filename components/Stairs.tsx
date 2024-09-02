import { animate, delay, easeInOut, motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};
const reversedIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};
const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return(
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: reversedIndex(index) * 0.1,
          }}
          className="h-full w-full bg-center bg-cover bg-white relative"
        >
            {/* <div className="h-full w-full text-black bg-center items-center text-2xl">
                Hello bhai
            </div> */}
        </motion.div> 
        );
      })}
    </>
  );
};

export default Stairs;
