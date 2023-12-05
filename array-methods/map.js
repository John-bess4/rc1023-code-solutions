const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const salePrices = prices.map((originalNumber) => ({
  price: originalNumber,
  salePrice: originalNumber / 2,
}));

console.log('Array of objects with price and salePrice:');
console.log(salePrices);

const formattedPrices = prices.map((number) => `$${number.toFixed(2)}`);

console.log('Array of formatted prices:');
console.log(formattedPrices);
