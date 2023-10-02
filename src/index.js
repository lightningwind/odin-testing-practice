/* Returns the given string <str> with the first
letter capitalized. */
function capitalize(str) {
  return str.length === 0 ? '' : `${str[0].toUpperCase()}${str.substring(1)}`;
}

/* Returns the given string <str> in reverse order. */
function reverseString(str) {
  return str.split('').reverse().join('');
}

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

/* Returns the given string <str> with each character
rotated by <shift> amount. */
function caesarCipher(str, shift) {
  /*
  Algorithm:
    1) Ignoring non-alphabets, translate each letter in string <str> into
    a number using ASCII
    2) For each translated letter <x>, apply the encryption function
    e(x) = x + k (mod 52), where k = <shift>
    3) Finally translate each number back into a letter
  */
  const charCodes = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const code = str.charCodeAt(i); // UTF-16 code unit
  }
}

module.exports = {capitalize, reverseString, calculator, caesarCipher};