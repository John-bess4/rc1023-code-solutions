/* exported getLastChar */
function getLastChar(string) {
  if (string.length > 0) {
    return string[string.length - 1];
  } else {
    return undefined;
  }
}
