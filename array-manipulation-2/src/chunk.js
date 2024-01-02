/* exported chunk */
function chunk(array, size) {
  if (typeof size === 'number' && size > 0 && Number.isInteger(size)) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  } else {
    return [];
  }
}
