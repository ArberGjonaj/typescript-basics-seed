let sumOrder: (price: number, quantity?: number) => number;

sumOrder = (x, y = 1) => {
  return x * y;
};

const sum: number = sumOrder(25,5);

console.log(`Total sum: ${sum}`);
