// Creating a function to print each magician name from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// creating an array containing magician name
var magician_names = ["Herry Poter", "Khuda Bux", "Ali"];
// Call the function to print each magician name
show_magicians(magician_names);
