export const MotionProps = {
  popShow: {
    initial: {
      opacity: 0,
      scale: 0.95,
      y: 100,
    },
    enter: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 300 },
    },
    delay: 300,
  },
};
