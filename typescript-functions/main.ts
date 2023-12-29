function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}
console.log('convertMinutesToSeconds:', convertMinutesToSeconds(10));

function greet(name: string): string {
  return `Hey, ${name}`;
}
console.log('greet:', greet('John Bessemer'));

function getArea(width: number, height: number): number {
  return width * height;
}
console.log('getArea:', getArea(55, 10));

function getFirstName(person: { firstName: string; lastName: string }): string {
  return person.firstName;
}
console.log(
  'getFirstName:',
  getFirstName({ firstName: 'Ricky', lastName: 'Bobby' })
);

function getLastElement(array: any[]): any {
  return array[array.length - 1];
}
console.log('getLastElement:', getLastElement(['boo1', 'book2', 'book3']));
