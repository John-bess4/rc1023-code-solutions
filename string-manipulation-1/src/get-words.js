/* exported getWords */
function getWords(string) {
  if (typeof string !== 'string') {
    return [];
  }
  return string.split(' ').filter((word) => word.trim() !== '');
}
