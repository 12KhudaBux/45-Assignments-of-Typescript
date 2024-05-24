// Define/Creating the function names
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// Function to make magicians great through ".map" it will modify array
function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

// Defining/creating an array of magicians name
let magician_names = ["Herry Poter", "Islam", "Khan"]

// Making a copy of original Array through ".slice() function"
let copy_magician_names = magician_names.slice()

// Modify the copied Array too include "The Great" with their names
let copy_great_magicians = make_great(copy_magician_names);

// Show both Arrays original and copies

// Original
console.log("Original Array\n");
show_magicians(magician_names);

// Copied
console.log("\nCopied Array");
show_magicians(copy_great_magicians);
