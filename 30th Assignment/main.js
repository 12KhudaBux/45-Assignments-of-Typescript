// Creating an array
var userNames = ["Islam", "Ali", "Zeeshan", "Admin", "Usman"];
// Using ForEach loop on array
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", Would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
    }
});
