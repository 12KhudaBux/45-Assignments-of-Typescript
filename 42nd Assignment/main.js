// Define/Creating the function names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Function to make magicians great through ".map" it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Defining/creating an array of magicians name
var magician_names = ["Herry Poter", "Islam", "Islam"];
// Call make_great function to modify magician names
var great_magicians = make_great(magician_names);
//Call show magicians that show modified list of magicians
show_magicians(great_magicians);
