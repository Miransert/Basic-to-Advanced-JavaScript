/*
// Creating a empty set
const companies = new Set()
console.log(companies)

// Creating set from array
const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]
const setOfLanguages = new Set(languages)
// Does not print duplicates
console.log(setOfLanguages)

// Iterate through a set
for (const elements of setOfLanguages){
    console.log(elements)
}
console.log(setOfLanguages.size)

// Adding an element to a set
setOfLanguages.add('Danish')
setOfLanguages.add('Swedish')
setOfLanguages.add('Italien')
console.log(setOfLanguages.size)

// Deleting an element from a set
setOfLanguages.delete('Danish')
console.log(setOfLanguages)

// Checking if an element exist in a set
console.log(setOfLanguages.has('Swedish'))
console.log(setOfLanguages.has('North'))

// Remove all elements from a set
setOfLanguages.clear()
console.log(setOfLanguages.size)

// Union of sets (A U B)
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)

// !!! MAP IS KEY/VALUE PAIR !!!
// Creating an empty map
const map = new Map()
console.log(map)

// Creating an Map from array
countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]

const mapAgain = new Map(countries)
console.log(mapAgain)
console.log(mapAgain.size)

// Adding values to the map
const countriesMap = new Map()
console.log(countriesMap.size)
countriesMap.set("Fin", "land")
countriesMap.set("Swe", "den")
countriesMap.set("Den", "mark")
console.log(countriesMap)
console.log(countriesMap.size)

// Getting a value from map
console.log(countriesMap.get("Fin"))

// Checking key in map
console.log(countriesMap.has("Fin"))
console.log(countriesMap.has("Gra"))

// Getting all keys and values from map
for (const country of countriesMap) {
    console.log(country)
  }
  // More clean version
  for (const [country, city] of countriesMap) {
    console.log(country, city)
  }
*/

// ____________________________ Exercise 1 ____________________________

const nums = new Set()
for(i = 0; i <= 10; i++){
    nums.add(i)
}
console.log(nums)