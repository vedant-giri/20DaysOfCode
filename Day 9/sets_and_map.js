

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  
  const setOfLanguages = new Set(languages);
  console.log(setOfLanguages);
  Set(4) ;{"English", "Finnish", "French", "Spanish"}

  
  const companies = new Set() // creating an empty set
  console.log(companies.size) // 0
  
  companies.add('Google') // add element to the set
  companies.add('Facebook')
  companies.add('Amazon')
  companies.add('Oracle')
  companies.add('Microsoft')
  console.log(companies.size) // 5 elements in the set
  console.log(companies)

//   const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
// setOfCompanies = new Set()
// for (const company of companies) {
//   setOfCompanies.add(company)
// }

// Creating map
const map = new Map()
console.log(map)

const countriesMap = new Map()
console.log(countriesMap.size) // 0
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap)
console.log(countriesMap.size)

console.log(countriesMap.get('Finland'))