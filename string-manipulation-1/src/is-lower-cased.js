/* exported isLowerCased */
function isLowerCased(word) {
  if (typeof word !== 'string') {
    return false;
  }
  return word.split('').every((char) => char === char.toLowerCase());
}
