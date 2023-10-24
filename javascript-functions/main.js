function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  return seconds;
}

const convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMintuesToSecondsResult:', convertMinutesToSecondsResult);

function greet(name) {
  const greeting = 'hey,' + name;
  return greeting;
}
const greetResult = greet('Deku');
console.log('greetResult:', greetResult);

function getArea(width, height) {
  const area = width * height;
  return area;
}
const getAreaResult = getArea(2, 50);
console.log('getAreaResult:', getAreaResult);

function getFirstName(person) {
  const firstName = person.firstName;
  return firstName;
}
const getFirstNameResult = getFirstName({
  firstName: 'eren',
  lastName: 'yeager',
});
console.log('getFirstNameResult:', getFirstNameResult);

function getLastElement(array) {
  const lastIndex = array.length - 1;
  const lastElement = array[lastIndex];
  return lastElement;
}

const getLastElementResult = getLastElement([
  'propane',
  'and',
  'propane',
  'accessories',
]);

console.log('getLastElementResult:', getLastElementResult);
