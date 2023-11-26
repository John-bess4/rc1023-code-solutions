/* exported filterOutStrings */
function filterOutStrings(values) {
  return values.filter(function (value) {
    return typeof value !== 'string';
  });
}
