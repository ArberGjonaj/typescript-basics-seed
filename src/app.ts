let pizza: { name: string; price: number; getName(): string } = {
  name: "plain old pepperoni",
  price: 20,
  getName() {
    return pizza.name;
  },
};
console.log(pizza.getName());