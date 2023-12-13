import { takeAChance } from './take-a-chance.js';

const promise = takeAChance('John');

promise
  .then((result) => {
    console.log('Winning Success:', result);
  })
  .catch((error) => {
    console.log('error:', error.message);
  });
