/* exported capitalize */
function capitalize(word) {
  if (typeof word !== 'string') {
    return word;
  }

  if (word.length === 0) {
    return '';
  }
  const capitalizedWord = word[0].toUpperCase() + word.slice(1).toLowerCase();

  return capitalizedWord;
}
