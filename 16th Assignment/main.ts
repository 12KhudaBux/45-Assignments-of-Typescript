// Creating a guestlist Array.
let guestlist = ["Islam", "Irfan", "Sadam", "Samad", "Shahid"];

// Making variable for those who cannot come.
let donotcome = guestlist[1];

// Print the name of guest who cannot come.
console.log(donotcome, "Nahin aa sakhta");

// Add or remove of values from guest list Array.
guestlist.splice(1, 1, "Qadir");

// Print the message of bigger table.
console.log("Good News! We have found a bigger table for a dinner");

// Adding a new value at the starting index of Array.
guestlist.unshift("Ali");

// Adding a new value at the ending of Array.
guestlist.push("Aamir");

// Get a middle index of our guest array.
let middleindex: number = Math.floor(guestlist.length /2);

// Adding a new guest to middle index of array.
guestlist.splice(middleindex, 1,"Usman");

// Print the message of updated list.
console.log("Updated list our guests");

// Sending a invitation message to our guests one by one with their names.
guestlist.forEach(oneguest => console.log (`Assalam O Alaikum ${oneguest}, Would you like dinner with me?`));