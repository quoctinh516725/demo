import { motion } from "framer-motion";

const blurFade = {
  initial: { opacity: 0, filter: "blur(10px)" },
  animate: { opacity: 1, filter: "blur(0px)" },
  exit: { opacity: 0, filter: "blur(10px)" },
};

const transition = { duration: 0.5 };

const PageTransition = ({ children }) => {
  return (
    <motion.div
      variants={blurFade}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
      className="relative w-full min-h-screen overflow-hidden"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
