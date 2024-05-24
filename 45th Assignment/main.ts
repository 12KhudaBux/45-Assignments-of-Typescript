// Defining a function that creates a car object with optional options
function create_car(manufacturer, model, ...options){

// Initializing a car object with manufactural and model
let car = {
manufacturer: manufacturer,
model: model
};

// Adding additional options for the car objects
options.forEach(option => {
    let [key, value] = option.split(":")
    car[key.trim()] = value.trim();
});

return car;
}

// Calling the function for creating a car's object
let my_car = create_car("toyota", "Corolla", "Color: Black", "Sunroof: True");

// Printing a variable to enusre all the information is stored correctly in the car object
console.log(my_car);