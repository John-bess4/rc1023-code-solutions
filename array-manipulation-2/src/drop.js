/* exported drop */

function drop(array, count) {
  if (typeof count === 'number' && count > 0 && Number.isInteger(count)) {
    return array.slice(count);
  } else {
    return [];
  }
}
