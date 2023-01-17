

const rectangle = {
    length: 20,
    width: 20
  }
  console.log(rectangle) // {length: 20, width: 20}
  
  const person = {
    firstName: 'Vedant',
    lastName: 'Giri',
    age: 19,
    country: 'India',
    city: 'Wardha',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    isMarried: false
  }
  console.log(person)
// accessing values using .
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.location) // undefined

// value can be accessed using square bracket and key name
console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['age'])
console.log(person['age'])
console.log(person['location']) // undefined

var car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start: function() {
        console.log("The car is starting.");
    },
    stop: function() {
        console.log("The car is stopping.");
    }
};

var car = new Object();
car.make = "Toyota";
car.model = "Camry";
car.year = 2020;
car.start = function() {
    console.log("The car is starting.");
};
car.stop = function() {
    console.log("The car is stopping.");
};

objectName.methodName();
