/* exported isVowel */
function isVowel(char) {
  if (typeof char !== 'string' || char.length !== 1) {
    return false;
  }
  const lowercaseChar = char.toLowerCase();
  return ['a', 'e', 'i', 'o', 'u'].includes(lowercaseChar);
}
