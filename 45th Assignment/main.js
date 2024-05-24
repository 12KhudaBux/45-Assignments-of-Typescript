// Defining a function that creates a car object with optional options
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // Initializing a car object with manufactural and model
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // Adding additional options for the car objects
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// Calling the function for creating a car's object
var my_car = create_car("toyota", "Corolla", "Color: Black", "Sunroof: True");
// Printing a variable to enusre all the information is stored correctly in the car object
console.log(my_car);
