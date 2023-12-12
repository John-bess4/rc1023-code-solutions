import { add } from './add.js';
import { subtract } from './subtract.js';
import { multiply } from './multiply.js';
import { divide } from './divide.js';

function calculate(a: number, operator: string, b: number): number | undefined {
  switch (operator) {
    case 'add':
      return add(a, b);
    case 'subtract':
      return subtract(a, b);
    case 'multiply':
      return multiply(a, b);
    case 'divide':
      return divide(a, b);
  }
  return undefined;
}

const a = Number(process.argv[2]);
const operator = process.argv[3];
const b = Number(process.argv[4]);

if (isNaN(a)) {
  console.log('invalid argument:', process.argv[2]);
} else if (isNaN(b)) {
  console.log('invalid argument:', process.argv[4]);
} else {
  const result = calculate(a, operator, b);
  if (result === undefined) {
    console.log('unknown operator:', operator);
  } else {
    console.log(`result: ${result}`);
  }
}
