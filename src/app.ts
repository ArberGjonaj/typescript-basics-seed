function orderError(error:string):never{
  throw new Error(error);
  //never going to return a value
  console.log("error")
}

orderError("something went wrong")
console.log("error")