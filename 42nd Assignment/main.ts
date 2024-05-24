// Define/Creating the function names
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// Function to make magicians great through ".map" it will modify array
function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

// Defining/creating an array of magicians name
let magician_names = ["Herry Poter", "Islam", "Islam"]

// Call make_great function to modify magician names
let great_magicians = make_great(magician_names);

//Call show magicians that show modified list of magicians
show_magicians(great_magicians);