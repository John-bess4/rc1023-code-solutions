const student = {
  firstName: 'John',
  lastName: 'Bess',
  age: '24',
};
const fullName = student.firstName + '' + student.lastName;
console.log('student.firstName:', student.firstName);
console.log('fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'student';

console.log('student.livesInIrvine:', student.livesInIrvine);
console.log('student.previousOccupation:', student.previousOccupation);

const vehicle = {
  make: 'honda',
  model: 'insight',
  year: '2021',
};
vehicle.color = 'grey';
vehicle.isConvertible = false;

console.log('vehicle:', vehicle);

const pet = {
  name: 'reina',
  type: 'dog',
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
