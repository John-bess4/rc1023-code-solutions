interface StudentProps {
  firstName: string;
  lastName:string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

const student:StudentProps = {
  firstName: 'John',
  lastName:"Bessemer",
  age:25,
};


const fullName: string = student.firstName + ' ' + student.lastName;

console.log('Full Name:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'Student';

console.log('Lives in Irvine:', student.livesInIrvine);
console.log('Previous Occupation:', student.previousOccupation);

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

const vehicle: Vehicle = {
  make: 'Ferrari',
  model: 'Enzo',
  year: 2022,
};

vehicle['color'] = 'Red';
vehicle['isConvertible'] = false;

console.log('Color:', vehicle['color']);
console.log('Is Convertible:', vehicle['isConvertible']);

console.log('Vehicle:', vehicle);

interface Pet {
  name?: string;
  kind?: string;
}

const pet: Pet = {
  name: 'Fluffy',
  kind: 'Cat',
};

delete pet.name;
delete pet.kind;

console.log('Pet:', pet);
