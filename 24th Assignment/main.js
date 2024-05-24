var apple = "apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["Apple", "banana", "orange"];
// Test for equality and inequality with strings
console.log("Is apple eqaul to apple?");
console.log(apple == "apple");
console.log("\n Is apple not equal to apple?");
console.log(apple != "apple");
// Tests using by Lower Case Function
console.log("\n Is APPLE equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\n Is APPLE equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLocaleLowerCase() != "apple");
// NUMERICAL TESTS are follow as
// Equal to 
console.log("\n Is ten  equal to twenty?");
console.log(ten == twenty);
// Not Equal to
console.log("\n Is ten not equal to twenty?");
console.log(ten != twenty);
// Greater than
console.log("\n Is ten greater than 0?");
console.log(ten > 0);
// Less than
console.log("\n Is twenty less than 15?");
console.log(20 < 15);
// Greater than or Equal to
console.log("\n Is ten greater or equal to 5?");
console.log(ten >= 5);
// Less than or Equal to
console.log("\n Is twenty less than or eqaul to 15?");
console.log(20 <= 15);
// TESTS USING "AND" and "OR" OPERTOR
// Using  && "And"
console.log("\n twenty is not equal to 10 and twenty is greater than 10?");
console.log(twenty != 10 && twenty > 10);
console.log("\n Is twenty not equal to 30 and Is twenty greater than 30?");
console.log(twenty != 30 && twenty > 30);
// Using || "Or"
console.log("\n 20 is greater than 50 or 20 is equal to?");
console.log(20 > 50 || 20 == 20);
console.log("\n twenty is greater than 50 or twenty is not equal to 20?");
console.log(20 > 50 || twenty != 20);
// Test whether an item is include in array
console.log("\n Is orange include in my fruits array?");
console.log(fruits.includes("orange"));
// Test whether not included in array
console.log("\n Is orange not include in my fruits array?");
console.log(!fruits.includes("orange"));
