var student = {
    firstName: 'John',
    lastName: "Bessemer",
    age: 25,
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('Full Name:', fullName);
student.livesInIrvine = true;
student.previousOccupation = 'Student';
console.log('Lives in Irvine:', student.livesInIrvine);
console.log('Previous Occupation:', student.previousOccupation);
var vehicle = {
    make: 'Ferrari',
    model: 'Enzo',
    year: 2022,
};
vehicle['color'] = 'Red';
vehicle['isConvertible'] = false;
console.log('Color:', vehicle['color']);
console.log('Is Convertible:', vehicle['isConvertible']);
console.log('Vehicle:', vehicle);
var pet = {
    name: 'Fluffy',
    kind: 'Cat',
};
delete pet.name;
delete pet.kind;
console.log('Pet:', pet);
