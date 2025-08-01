import { FlipWords } from "./FlipWords";
import { motion } from "motion/react"; // eslint-disable-line

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3x bg-clip-text">
      {/*Desktop View*/}
      <div className="flex-col hidden md:flex c-space">
        {" "}
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.0 }}
        >
          {" "}
          Hi I'm Samuel
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Devolper <br /> Dedicated to Crafting
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-8xl"
            />
          </motion.div>
        </div>{" "}
        <motion.p
          className="text-4xl font-medium text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8 }}
        >
          Web Solutions
        </motion.p>
      </div>
      {/*Mobile View*/}
      <div className="flex flex-col space-y6 md:hidden">
        {" "}
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.0 }}
        >
          {" "}
          Hi, Im Samuel
        </motion.p>{" "}
        <motion.div>
          <motion.p
            className="text-5xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            {" "}
            Building{" "}
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            {" "}
            <FlipWords
              words={words}
              className="font-bold text-white text-7xl"
            />{" "}
            <motion.p
              className="text-5xl font-black text-neutral-300"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.8 }}
            >
              Web Applications
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroText;
