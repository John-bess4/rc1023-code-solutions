const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

console.log('Numbers in order:');
values.forEach((number) => {
  console.log(number);
});

console.log('\nNumbers in reverse order:');
values.forEach((number, index, array) => {
  const reverseIndex = array.length - 1 - index;
  console.log(array[reverseIndex]);
});
