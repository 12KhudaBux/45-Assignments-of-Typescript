// Creating an array
let userNames = ["Islam", "Ali", "Zeeshan", "Admin", "Usman"];

// Using ForEach loop on array
userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
console.log(`Hello ${oneUser}, Would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`)
    }
})