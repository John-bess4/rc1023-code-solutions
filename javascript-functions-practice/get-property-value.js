/* exported getPropertyValue */
function getPropertyValue(object, key) {
  if (key in object) {
    return object[key];
  } else {
    return undefined;
  }
}
