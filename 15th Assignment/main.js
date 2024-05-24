var guestlist = ["Sadam", "Irfan", "Shahid", "Abdul Samad", "Abdul Latif"];
var donotcome = guestlist[1];
console.log(donotcome, "Nahin aa sakhta");
guestlist.splice(1, 1, "Khan");
guestlist.forEach(function (guest) { return console.log("Assalam O Alaikum ".concat(guest, ", would you like to come to me on dinner at Eid?")); });
