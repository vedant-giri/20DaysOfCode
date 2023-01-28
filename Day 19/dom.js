// syntax
document.getElementsByTagName('tagname')

const allTitles = document.getElementsByTagName('h1')

console.log(allTitles) //HTMLCollections
console.log(allTitles.length) // 4

for (var i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]) // prints each elements in the HTMLCollection
}

//syntax
document.getElementById('id')
var firstTitle = document.getElementById('first-title')
console.log(firstTitle) // <h1>First Title</h1>

var firstTitle = document.querySelector('h1') // select the first available h1 element
var firstTitle = document.querySelector('#first-title') // select id with first-title
var firstTitle = document.querySelector('.title') // select the first available element with class title