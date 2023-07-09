const analyzeArray = (array) => {
  const average = () => {
    let sum = 0;
    for (let i in array) {
      sum += array[i];
    }
    return sum / array.length;
  };
  const min = () => {
    let min = array[0];
    for (let i in array) {
      if (array[i] < min) {
        min = array[i];
      }
    }
    return min;
  };
  const max = () => {
    let max = array[0];
    for (let i in array) {
      if (array[i] > max) {
        max = array[i];
      }
    }
    return max;
  };
  let object = {
    average: average(array),
    min: min(array),
    max: max(array),
    length: array.length,
  };
  return object;
};
export { analyzeArray };
