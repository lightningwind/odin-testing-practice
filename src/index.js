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

module.exports = {capitalize, reverseString, calculator};