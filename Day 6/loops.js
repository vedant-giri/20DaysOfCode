// for loop
for (var i = 0; i < 5; i++) {
    console.log(i);
}

// for...in loop
var fruits = ["Apple", "Banana", "Orange"];
for (var index in fruits) {
  console.log(fruits[index]);
}

// for...0f loop
var fruits = ["Apple", "Banana", "Orange"];
for (var fruit of fruits) {
  console.log(fruit);
}

// while loop
var i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// do..while loop
var i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
