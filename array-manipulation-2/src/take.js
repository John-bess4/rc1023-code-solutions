/* exported take */

function take(array, count) {
  if (typeof count === 'number' && count > 0 && Number.isInteger(count)) {
    return array.slice(0, count);
  } else {
    return [];
  }
}
