// Making a function 

function make_shirt (size: string = "Large", printMessage: string = "I love Typescript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} print on shirt.`)
}

// Calling a function wth "by-default values"
make_shirt();

// Now calling a function with medium size and default message.
make_shirt("Medium")

// Now calling a function with small size and different print message
make_shirt("Small", "I also like Javascript")
