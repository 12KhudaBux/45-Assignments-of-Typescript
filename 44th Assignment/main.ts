// Defining a function with a rest parameter that accepts items arguments representing our sandwich
function makeSandwich(...items: string[]){
console.log("Making a sandwich with the following items: \n")

items.forEach(singleItem => console.log(singleItem));

console.log("\n Now enjoy sandwich")
}

// Call the function 3 times with 3 different number of arguments
makeSandwich("chicken", "Cheese", "Mayo", "Egg");

makeSandwich("Bread", "Butter");

makeSandwich("Bread", "Lettuce", "Tomato", "Egg", "Chicken")