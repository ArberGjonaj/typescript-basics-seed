type Pizza = { name: string; toppings: number };

const pizza:Pizza = {name:'Blazing Inferno',toppings:5};

const serialized:string=JSON.stringify(pizza);

function getNameFromJson(obj:string){
  return (JSON.parse(obj) as Pizza).name;
}

getNameFromJson(serialized);