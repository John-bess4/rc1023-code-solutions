/* exported getValue */

function getValue(object, key) {
  const { [key]: value } = object;
  return value;
}
