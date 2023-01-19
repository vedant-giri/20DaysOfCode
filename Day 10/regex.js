let string = "The quick brown fox jumps over the lazy dog.";
let pattern = /quick/;
let result = pattern.test(string);
console.log(result); // true

// let string = "The quick brown fox jumps over the lazy dog.";
// let pattern = /quick/;
// let result = string.match(pattern);
// console.log(result); // [ "quick" ]

// let string = "The quick brown fox jumps over the lazy dog.";
// let pattern = /quick/;
// let replacement = "fast";
// let newString = string.replace(pattern, replacement);
// console.log(newString); // The fast brown fox jumps over the lazy dog.

// Extracting all numbers from the string
// let string = "The price is $19.99, but it was on sale for $9.99.";
// let pattern = /\d+\.\d+/g;
// let result = string.match(pattern);
// console.log(result); // [ "19.99", "9.99" ]

// let email = "example@example.com";
// let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// let result = pattern.test(email);
// console.log(result); // true

// let string = "The quick brown fox jumps over the lazy dog.";
// let pattern = /the/gi;
// let replacement = "a";
// let newString = string.replace(pattern, replacement);
// console.log(newString); // "a quick brown fox jumps over a lazy dog."
