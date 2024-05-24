// Array of current users
let current_users = ["Usman", "Ali", "Islam", "Zain", "Khan"];

// Array of new users + current users
let new_users = ["Hamza", "Samad", "Jabbar", "Ali", "Islam"];

// Loop through new users for checking usernames availability
new_users.forEach(new_one_user =>{

    // Making a condition for username already exist and save in our_condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLocaleLowerCase() === new_one_user.toLowerCase()) 

    // Print different messages using If-else statements
    if(our_condition){
    console.log(`Sorry! ${new_one_user} is already taken`)
}else{
    console.log(`This username ${new_one_user} is available`)
}
})