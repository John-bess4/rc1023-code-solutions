function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log('convertMinutesToSeconds:', convertMinutesToSeconds(10));
function greet(name) {
  return 'Hey, '.concat(name);
}
console.log('greet:', greet('John Bessemer'));
function getArea(width, height) {
  return width * height;
}
console.log('getArea:', getArea(55, 10));
function getFirstName(person) {
  return person.firstName;
}
console.log(
  'getFirstName:',
  getFirstName({ firstName: 'Ricky', lastName: 'Bobby' })
);
function getLastElement(array) {
  return array[array.length - 1];
}
console.log('getLastElement:', getLastElement(['boo1', 'book2', 'book3']));
