var fruits = ["Apple", "Banana", "Orange"];
var fruits = [];
fruits[0] = "Apple";
fruits[1] = "Banana";
fruits[2] = "Orange";

var fruits = new Array("Apple", "Banana", "Orange");

console.log(fruits[0]); //output: "Apple"

fruits.push("Mango"); // add "Mango" to the end of the array
console.log(fruits); //output: ["Apple", "Banana", "Orange", "Mango"]
fruits.pop(); // remove the last element of the array
console.log(fruits); //output: ["Apple", "Banana", "Orange"]

console.log(fruits.length); //output: 3

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }
  fruits.forEach(function(fruit) {
    console.log(fruit);
  });

  var upperCaseFruits = fruits.map(function(fruit) {
    return fruit.toUpperCase();
  });
  console.log(upperCaseFruits); //output: ["APPLE", "BANANA", "ORANGE"]

  var filteredFruits = fruits.filter(function(fruit) {
    return fruit.length > 5;
  });
  console.log(filteredFruits); //output: ["Banana"]
  