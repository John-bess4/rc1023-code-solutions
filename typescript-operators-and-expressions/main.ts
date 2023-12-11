const width: number = 10;
const height: number = 5;

const area: number = width * height;

console.log("Area:", area);
console.log("Type of Area:", typeof area);

const bill: number = 50;
const payment: number = 75;

const change: number = payment - bill;

console.log("Change:", change);
console.log("Type of Change:", typeof change);

const quizzes: number = 80;
const midterm: number = 75;
const final: number = 90;

const grade: number = (quizzes + midterm + final) / 3;

console.log("Grade:", grade);
console.log("Type of Grade:", typeof grade);

const firstName: string = 'Tom';
const lastName: string = 'Jerry';

const fullName: string = firstName + " " + lastName;

console.log("Full Name:", fullName);
console.log("Type of Full Name:", typeof fullName);

const pH: number = 6;

const isAcidic: boolean = pH < 7;

console.log("Is Acidic:", isAcidic);
console.log("Type of Is Acidic:", typeof isAcidic);

const headCount: number = 300;

const isSparta: boolean = headCount === 300;

console.log("Is Sparta:", isSparta);
console.log("Type of Is Sparta:", typeof isSparta);

let motto:string = fullName;
motto += ' is the GOAT';

console.log("Motto:", motto);
console.log("Type of Motto:", typeof motto);
