/* exported isUpperCased */
function isUpperCased(word) {
  if (typeof word !== 'string') {
    return false;
  }
  return word.split('').every((char) => char === char.toUpperCase());
}
