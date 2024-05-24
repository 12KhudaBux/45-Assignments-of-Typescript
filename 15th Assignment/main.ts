let guestlist = ["Sadam", "Irfan", "Shahid", "Abdul Samad", "Abdul Latif"];

let donotcome = guestlist[1];

console.log(donotcome, "Nahin aa sakhta");

guestlist.splice(1, 1, "Khan");

guestlist.forEach(guest => console.log (`Assalam O Alaikum ${guest}, would you like to come to me on dinner at Eid?`));