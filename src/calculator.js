let calculator = {
  sum: (a, b) => {
    return a + b;
  },
  subtraction: (a, b) => {
    return a - b;
  },
  multiply: (a, b) => {
    return a * b;
  },
  division: (a, b) => {
    if (b === 0) {
      return "YOU CANT DIVIDE BY ZERO";
    }
    return a / b;
  },
};
export { calculator };
