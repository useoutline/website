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
      transition: { duration: 500 },
    },
    delay: 300,
  },
  popScale: {
    initial: {
      opacity: 0,
      scale: 0.75,
    },
    enter: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 500 },
    },
    delay: 300,
  },
  popBlur: {
    initial: {
      opacity: 0,
      y: 10,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: { duration: 300 },
    },
    delay: 300,
  },
};
