export const MotionProps = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: (duration: number, delay?: number) => ({
      opacity: 1,
      transition: { duration, delay },
    }),
    exit: { opacity: 1 },
  },
  fadeBlurIn: {
    initial: { opacity: 0, filter: "blur(10px)" },
    animate: (duration: number, delay?: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration, delay },
    }),
  },
  fadeUpIn: {
    initial: { opacity: 0, y: 50 },
    animate: (duration: number, delay?: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration, delay },
    }),
  },
};
