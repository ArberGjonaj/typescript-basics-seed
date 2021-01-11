let sumOrder: (price: number, quantity: number) => number;

sumOrder = (x, y) => {
  return x * y;
};

const sum: number = sumOrder(25, 2);

console.log(`Total sum: ${sum}`);
