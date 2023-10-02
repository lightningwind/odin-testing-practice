/* Returns the given string <str> with the first
letter capitalized. */
function capitalize(str) {
  return str.length === 0 ? '' : `${str[0].toUpperCase()}${str.substring(1)}`;
}

/* Returns the given string <str> in reverse order. */
function reverseString(str) {

}

module.exports = {capitalize, reverseString};