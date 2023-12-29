/* exported toObject */

function toObject(keyValuePair) {
  const objct = {};
  const [key, value] = keyValuePair;
  objct[key] = value;
  return objct;
}
