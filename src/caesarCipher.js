const caesarCipher = (string, key) => {
  let array = [];
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const numbersRegex = /[0-9]/;
  for (let i in string) {
    if (specialChars.test(string[i]) || numbersRegex.test(string[i])) {
      array.push(string[i]);
    } else if (
      string[i].toLowerCase() === string[i] &&
      !specialChars.test(string[i] && !numbersRegex.test(string[i]))
    ) {
      let char = string.charCodeAt(i);
      if (char !== 32) {
        let threatedCode = ((char - 96 + key) % 26) + 96;

        let keyChar = String.fromCharCode(threatedCode);

        array.push(keyChar);
      } else {
        array.push(string[i]);
      }
    } else if (string[i].toUpperCase() === string[i]) {
      let char = string.charCodeAt(i);
      let threatedCode = ((char - 64 + key) % 26) + 64;
      let keyChar = String.fromCharCode(threatedCode);

      array.push(keyChar);
    }
  }
  let changedString = array.join("");
  return changedString;
};
export { caesarCipher };
