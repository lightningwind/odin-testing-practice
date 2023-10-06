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
  const charCodes = [];
  const encrypt = (x, k, n) => ((x - n) + k) % 26 + n;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const code = str.charCodeAt(i); // UTF-16 code unit
    const regex = /[a-z]/i;
    if (char.match(regex)) {
      if (65 <= code && code <= 90) { // Uppercase letter
        charCodes.push(encrypt(code, shift, 65));
      } else if (97 <= code && code <= 122) { // Lowercase letter
        charCodes.push(encrypt(code, shift, 97));
      }
    } else { 
      charCodes.push(code);
    }
  }

  // String.fromCharCode(): This sweet method returns a string created from
  // the specified sequence of UTF-16 code units
  // Here we are using spread syntax to expand the array <charCodes> into
  // its individual elements being supplied as arguments
  return String.fromCharCode(...charCodes);
}

/* Returns an object with the following properties about
integer array <nums>: <average>, <min>, <max>, and <length>. */
function analyzeArray(nums) {
  if (nums.length === 0) {
    return {};
  }

  const average = (nums) => {
    const sum = nums.reduce((rs, cur) => rs + cur, 0);
    return sum / nums.length;
  }
  
  return {
    average: average(nums),
    min: Math.min(...nums),
    max: Math.max(...nums),
    length: nums.length,
  };
}

module.exports = {capitalize, reverseString, calculator, caesarCipher, analyzeArray};