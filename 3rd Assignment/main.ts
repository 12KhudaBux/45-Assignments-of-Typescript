let person = "khuda Bux";
console.log(person.toLowerCase());

console.log(person.toUpperCase());

console.log(person.replace(/\b\w/g, (char) => char.toUpperCase()));