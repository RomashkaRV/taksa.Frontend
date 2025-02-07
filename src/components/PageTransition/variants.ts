export const perspective = {
  initial: {
    scale: 1,
    y: 0
  },
  enter: {
    scale: 1,
    y: 0
  },
  exit: {
    scale: 0.6,
    y: 0,
    opacity: 0.5,
    transition: {
      duration: 1.2,
      ease: [0.76, 0, 0.24, 1]
    }
  }
};

export const slide = {
  initial: {
    x: "100%"
  },
  enter: {
    x: "100%"
  },
  exit: {
    x: 0,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1]
    }
  }
};

export const opacity = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 1
    }
  },
  exit: {
    opacity: 1
  }
};
