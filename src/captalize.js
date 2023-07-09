const captalise = (string) => {
  let firstLetter = string.substr(0, 1);

  let restOfString = string.substr(1);

  return firstLetter.toUpperCase() + restOfString;
};
export { captalise };
