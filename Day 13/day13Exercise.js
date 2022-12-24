/*
// Console object methods
// Console object methods for showing output on the browser console, and
    // document.write to show output on the browser document(view part).
// Both methods used only for testing and debugging purposes.
document.write("Browser document")
// The console method is the most popular testing and debugging tool
    // on the browser.

// Console.log() to show output on the browser console.
console.log("Browser console")

// Warning in the browser console
console.warn("EOW PAS PÅ MAND FUCK")

// Error in the browser console
console.error("EOOOOW HVAD HAR DU LAVETTTTT")

// Displays data as a table on the console
const names = ["Navn", "Ej et til navn", "Wow endnu et navn", "Hold da op, et navn til"]
console.table(names)

const car = {
    name: "BMW",
    series: 5,
    model: "M5"
}
console.table(car)

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  console.table(countries)

const users = [
    {
        name: 'Asabeneh',
        title: 'Programmer',
        country: 'Finland',
        city: 'Helsinki',
        age: 250
    },
    {
        name: 'Eyob',
        title: 'Teacher',
        country: 'Sweden',
        city: 'London',
        age: 25
    },
    {
        name: 'Asab',
        title: 'Instructor',
        country: 'Norway',
        city: 'Oslo',
        age: 22
    },
    {
        name: 'Matias',
        title: 'Developer',
        country: 'Denmark',
        city: 'Copenhagen',
        age: 28
    }
]
console.table(users)

// Tracking how long an operation takes
console.time("time")
for(let name of names){
    console.log(name)
}
console.timeEnd("time")

// Displays message info in browser console
console.info("Just some information")

// console.assert() methods writes an error message to the console if the assertion is false
console.assert(4 > 3, '4 is greater than 3') // no result
console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4

// Grouping different log groups
const names = ['Asabeneh', 'Brook', 'David', 'John']
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries')
console.log(countries)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()

// Counts the amount of times the function has been called
const func = () => {
    console.count("Counted")
}
func()
func()
func()
func()

// Clears the console
console.clear()
*/
