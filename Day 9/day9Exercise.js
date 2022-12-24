// Ternary Operator er waow :o

/*const callback = (n) =>{
    return n ** 2
}

function cube(callback, n){
    return callback(n) * n
}
console.log(cube(callback, 3))

const higherOrder = n => {
    const doSomething = m => {
        const doWhatEver = t => {
            return 2 * n + 3 * m + t
        }
        return doWhatEver
    }
    return doSomething
}
console.log(higherOrder(2)(3)(10))

function time(){
    console.log("Hello")
}
// Every 1 sec, it runs the "time" function
    // setInterval(time, 1000)
// After 5 sec, it runs the "time" function once
    // setTimeout(time, 5000)


//________________________ Functional programming ________________________
// Builtin methods to help solve complicated problems, which are:
    // forEach, map, filter, reduce, find, every, some, and sort.

const items = ['item1', 'item2', 'item3'];
const copyItems = [];

// before
for (let i = 0; i < items.length; i++) {
    copyItems.push(items[i]);
}
// after
items.forEach( i => {
    copyItems.push(i);
});
console.log(copyItems)

// We can also use a callback function for the above example:

// before
const copy = (item, index, arr) => {
    console.log(item, index, arr)
}
items.forEach(copy)

// after
// This is usually how it is written
items.forEach((item, index, arr) => {
    console.log(item, index, arr)
})

let arr1 = [1, 2, 3, 4, 5, 6, 7]
let sum = 0
arr1.forEach( item => {
    sum += item
})
console.log(sum)

const letters = ["a", "b", "c", "z", "b", "j", "c", "z", "a", "c", "b", "b"]
let count = {}
letters.forEach(item =>{
    if(count[item]){
        count[item]++
    }
    else{
        count[item] = 1
    }
})
console.log(count)

// So item is to be understood as the actual items in the array,
    // for example, in the above array "items", the items from that,
    // array are "item1", "item2" and "item3".
    // The index, are obviously the index positioning in the array,
    // which are 0, 1 and 2.
    // At last, "arr", is just the actual whole array, which is
    // ['item1', 'item2', 'item3']


// Creates the new array "numsMap", which is a modified version
    // of nums array.
const nums = [1, 2, 3, 4, 5, 6]
const numsMap = nums.map(element => element * element)
console.log(numsMap)


// Creates the new array "landsFilter", which is a modified version
    // of lands array
const lands = ["Finland", "Denmark", "Sweden", "Thailand", "Iceland"]
const landsFilter = lands.filter(element => element.includes("land"))
console.log(landsFilter)


// Array reduce is a method which reduce all the array elements
    // into a single value. That single value can be a number,
    // a string, an object, it can be anything.
    // Accumulator is just a normal variable we are creating,
    // it is something we initialise.
    // Currentvalue is the indexing of the array, it
    // will each time the loop run, go to the next element in the array.
    // We can assign the accumulator a initial value, which is 0 in the
    // example below.

// In first looping:
    // accumulator = 0, currentValue = 1 => 1
    // accumulator = 1, currentValue = -1 => 0
    // accumulator = 0, currentValue = 2 => 2
    // accumulator = 2, currentValue = 3 => 5
// So this means that, every time we loop through this array, we will
    // get a new accumulator, which is the result from the previous loop.
const numbers = [1, -1, 2, 3]
const reduce = numbers.reduce((accumulator, currentValue) =>
    accumulator + currentValue, 0)
console.log(reduce)
// In the example above, it is possible to remove the initial value,
    // which is 0. If we do so, the accumulator in at start have the value
    // of the first element in the array, in the example above, that would
    // be 1. But, the currentValue would then be -1 at the start.


// The every method checks if all the elements in the array are
    // similar in one aspect.
const words = ["Hello", "my", "friend", "how", "are", "you"]
const allStr = words.every(str => typeof str === "string")
console.log(allStr)


// The find method finds the first element in the array, which
    // satisfies the condition. This method can also be used for objects.
const numsAgain = [1, 4, 8, 22, 77, 29, 23, 35, 200, 520]
const findNum = numsAgain.find(thisNum => thisNum >= 25)
console.log(findNum)


// The findIndex method finds the position of the first element which
    // satisfies the condition.
const wordsAgain = ["I", "am", "good", "what", "about", "you"]
const findPosition = wordsAgain.findIndex(wordPosition => wordPosition.length > 3)
console.log(findPosition)

// The some method checks if some of the elements are similar in
    // one aspect.
// Compared to the every method, the some method
    // only checke some of the elements, whereas the every method
    // checks all the elements.
const bool = [true, true, false, true]
const boolSome = bool.some(boolCheck => boolCheck === false)
console.log(boolSome)


// The sort method arranges the array elements in asscending or
    // descending order. 
// It modifies the original array, so its recomendes to always
    // create a copy of the array.
const products = ["apple", "watermelon", "banana", "kiwi"]
console.log(products.sort())

const prices = [2.99, 5.50, 4, 20, 8, 0.99]
prices.sort(function (a, b){
    return a-b
})
console.log(prices)
*/

// __________________________Exercise 1__________________________

/*
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' }
]
countries.forEach(element => console.log(element))
names.forEach(element => console.log(element))
numbers.forEach(element => console.log(element))

countries.map(element => console.log(element.toUpperCase()))
countries.map(element => console.log(element.length))
numbers.map(element => console.log(element*element))
names.map(element => console.log(element.toUpperCase()))

products.map(element => console.log(element))

const countryFilter = countries.filter(element => (element.includes("land")))
console.log(countryFilter)

const countryFilterLength = countries.filter(element => (element.length == 6))
console.log(countryFilterLength)

const countryFilterLengthAgain = countries.filter(element => (element.length >= 6))
console.log(countryFilterLengthAgain)

const countryFilterLetter = countries.filter(element => !element.includes("E"))
console.log(countryFilterLetter)

const countryFilterValue = products.filter(element =>
    console.log(element.price))

getStringList = ((string1, string2, string3, string4) =>{
    let arr = [string1, string2, string3, string4]
    return arr
})
console.log(getStringList("Hej", "med", "dig", "ven"))

const summing = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(summing)

const countryConcatenate = countries.reduce((acc, cur) => acc + ", " + cur)
console.log(countryConcatenate.replace("IceLand", "and IceLand"), "are north European countries")

const namesSome = names.some(element => element.length > 7)
console.log(namesSome)

const countriesEvery = countries.every(element => element.includes("land"))
console.log(countriesEvery)

const countriesFind = countries.find(element => element.length == 6)
console.log(countriesFind)

const countriesFindIndex = countries.findIndex(element => element.length == 6)
console.log(countriesFindIndex)

const countriesFindIndexNorway = countries.findIndex(element => element.includes("Norway"))
console.log(countriesFindIndexNorway)

const countriesFindIndexRussia = countries.findIndex(element => element.includes("Russia"))
console.log(countriesFindIndexRussia)
*/

// __________________________Exercise 2__________________________

/*
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' }
]

const chain = products.map(element => element.price).filter(element => typeof element === 'number').reduce((acc, cur) => acc + cur, 0)
console.log(chain)


    // Exercise 2.2 IKKE LØST, de tomme strings giver problemer
const priceReduce = products.reduce((acc, cur) => acc + cur.price, 0)
console.log(priceReduce)


const ending = countries.map(country => country.name).filter(country => country.endsWith("land"))//countries.filter(country => country.name).endsWith("land")
console.log("Conutries ending with 'land':", ending)

const countryPopulation = countries.map(country => country.population).filter(country => country >= 100000000)
console.log("Countries with larger population than 100.000.000:", countryPopulation)


countries.forEach(function (element, index) {
    if(index <= 10){
        console.log(element, index)
    }
})


countries.forEach(function (element, index) {
    if(index >= countries.length-10){
        console.log(element, index)
    }
})
*/

// __________________________Exercise 3__________________________

countries.sort((a, b) => {
    if(a.capital < b.capital) return -1
    if(a.capital > b.capital) return 1
    return 0
})
console.log(countries)

countries.sort((a, b) => {
    if(a.population < b.population) return -1
    if(a.population > b.population) return 1
    return 0
})
console.log(countries)

countries.sort((a, b) => {
    if(a.name < b.name) return -1
    if(a.name > b.name) return 1
    return 0
})
console.log(countries)
