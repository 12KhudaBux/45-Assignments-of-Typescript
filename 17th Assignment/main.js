// Creating a guestlist Array.
var guestlist = ["Islam", "Irfan", "Sadam", "Samad", "Shahid"];
// Making variable for those who cannot come.
var donotcome = guestlist[1];
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
var middleindex = Math.floor(guestlist.length / 2);
// Adding a new guest to middle index of array.
guestlist.splice(middleindex, 1, "Usman");
// Print the message of updated list.
console.log("Updated list our guests");
// Sending a invitation message to our guests one by one with their names.
guestlist.forEach(function (oneguest) { return console.log("Assalam O Alaikum ".concat(oneguest, ", Would you like dinner with me?")); });
// Inform that only two guests that can be invited for the dinner.
console.log("Unfortunately, the new dinner table would not arrive on time, so I can only invite two guests to dinner with me.");
// Using while loop to remove the guests from the array until only two names remain
while (guestlist.length > 2) {
    var removeguest = guestlist.pop();
    console.log(" Sorry! ".concat(removeguest, " I cannot invite you for the dinner."));
}
// Printing a invitations to the last two guest in the list
console.log("Invitations to the last 2 guests");
guestlist.forEach(function (lasttwo) { return console.log(" Luckly ".concat(lasttwo, ", you are still invited for the dinner.")); });
// Removing the last two guests from the list
guestlist.pop();
guestlist.pop();
console.log("Empty list:", guestlist);
