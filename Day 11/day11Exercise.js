/*
// Destructing arrays
const nums = [1, 2, 3, 4, 5]
let [one, two, three, four, five] = nums
console.log(one, two, three, four, five)

const fullstack = [
    ["HTML", "CSS", "JS", "React"],
    ["Node", "Express", "MongoDB"]
]
let fulltackVars = [frontend, backend] = fullstack
console.log(frontend, backend)

// Skipping values in the array
const numsAgain = [1, 2, 3]
let [numOne, , numThree] = numsAgain
console.log(numOne, numThree)

// Default value
const wordsDefault = [undefined, "Hello", "Good"]
let [
    firstWord = "Waow",
    secondWord,
    thirdWord,
    fourthWord = "Uhh"
] = wordsDefault
console.log(firstWord, secondWord, thirdWord, fourthWord)

// Using spread operator
const wordsSpread = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, num4, ...rest] = wordsSpread
console.log(num1, num2, num3, num4, rest)

// Destructing during iteration
const countries = [["Denmark", "Sweden"], ["Norway", "USA", "Mexico"], ["Italien", "England"]]
for (const [country, countryAgain] of countries){
    console.log(country, countryAgain)
}

const rectangle = {
    width: 20,
    height: 10,
    area: 200
}
let {width, height, area, perimeter} = rectangle
console.log(width, height, area, perimeter)

let {width: w, height: h, area: a, perimeter: p} = rectangle
console.log(w, h, a, p)

// Object parameter without destructing
const rect = {
    arm: 40,
    leg: 40
}
const calculating = rectang => {
    return rectang.arm+rectang.leg
}
console.log(calculating(rect))

// Object parameter with destructing
const calculatePerimeter = ({arm, leg}) => {
    return arm+leg
}
console.log(calculatePerimeter(rect))

// Spread operator to copy array
const evens = [0, 2, 4, 6, 8, 10]
const odds = [1, 3, 5, 7, 9]
const wholeNumbers = [...evens, ...odds]
console.log(wholeNumbers)
    // If we just print the two seperate arrays for them selfs,
        // it would be printet out as two arrays, instead of one array:
    console.log(evens, odds)

// Spread opperator to copy object
const user = {
    name: "Brr",
    age: 50,
    language: "Kurdish"
}
const userSpread = {...user, age: 20}
console.log(userSpread)

// Spread operator with arrow function
// Takes unlimited arguments
const sumAllNums = (...args) => {
    console.log(args)
}
// Prints array
sumAllNums(1, 2, 3, 4, 5, 10)

const SumNumsExample = (...args) => {
    let sum = 0
    for(const num of args){
        sum += num
    }
    return sum
}
console.log(SumNumsExample(1, 2, 4, 8, 16))

*/

// ______________________________Exercise 1______________________________
/*
const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]


let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp)

let [fin, est, sw, den, nor] = countries
console.log(fin, est, sw, den, nor)

let {width, height, area, perimeter} = rectangle
console.log(width, height, area, perimeter)


// ______________________________Exercise 2______________________________

for(const {name, scores, skills, age} of users){
    console.log(name, scores, skills, age)
}


for(const {name, scores, skills, age} of users){
    if(skills.length < 2){
        console.log(name, scores, skills, age)
    }
}
*/