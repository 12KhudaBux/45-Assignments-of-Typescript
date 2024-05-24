// Array of current users
var current_users = ["Usman", "Ali", "Islam", "Zain", "Khan"];
// Array of new users + current users
var new_users = ["Hamza", "Samad", "Jabbar", "Ali", "Islam"];
// Loop through new users for checking usernames availability
new_users.forEach(function (new_one_user) {
    // Making a condition for username already exist and save in our_condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLocaleLowerCase() === new_one_user.toLowerCase(); });
    // Print different messages using If-else statements
    if (our_condition) {
        console.log("Sorry! ".concat(new_one_user, " is already taken"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available"));
    }
});
