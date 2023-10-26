/* exported getCharacterAtIndex */
function getCharacterAtIndex(string, index) {
  if (index >= 0 && index < string.length) {
    return string[index];
  } else {
    return undefined;
  }
}
