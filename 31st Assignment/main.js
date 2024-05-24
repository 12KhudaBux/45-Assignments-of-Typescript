var userNames = ["Islam", "Ali", "Zeeshan", "Admin", "Khan"];
userNames = [];
if (userNames.length === 0) {
    console.log("Your array is empty, We need to find some users");
}
else {
    // Using forEach Loop in array
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", Would you like to see a report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thank you for logging in again!"));
        }
    });
}
