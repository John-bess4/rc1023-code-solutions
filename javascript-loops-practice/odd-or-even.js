/* exported oddOrEven */
function oddOrEven(numbers) {
  const result = [];
  for (const num of numbers) {
    result.push(num % 2 === 0 ? 'even' : 'odd');
  }
  return result;
}
