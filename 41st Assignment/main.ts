// Creating a function to print each magician name from an array
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// creating an array containing magician name
let magician_names = ["Herry Poter", "Khuda Bux", "Ali"]

// Call the function to print each magician name
show_magicians(magician_names)