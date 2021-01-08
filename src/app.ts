const pizza = {
    name:"pepperoni"
}

const toppings = ['pepperoni']

const order = {
    ...pizza,
    toppings
}

const finalOrder = {
    ...order
}

console.log(finalOrder)