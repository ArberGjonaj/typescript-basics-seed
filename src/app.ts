const pizzas = [{ name: "Pepperoni", toppings: ["pepperoni"] }];

const mappedPizzas = pizzas.map((pizza, index) => {
  return pizza.name.toUpperCase();
});
console.log(mappedPizzas);

const pizza = {
  name: "Blazing Inferno",
  getName:()=>pizza.name
  ,
};

console.log(pizza.getName());
