/*
// Asynchronous programming is a technique that enables your program
    // to start a potentially long-running task and still be able to
    // be responsive to other events while that task runs, rather than
    // having to wait until that task has finished. Once that task has
    // finished, your program is presented with the result.
    // Said in another way:
        // Asynchronous is a non-blocking architecture, so the execution
        // of one task isn't dependent on another. Tasks can run
        // simultaneously. Synchronous is a blocking architecture, so the
        // execution of each operation is dependent on the completion of
        // the one before it.

// Callbacks
// JavaScript functions are executed in the sequence they are called.
    // Not in the sequence they are defined.
// A callback is a function passed as an argument to another function.
// So a callback function can run after another function has finished.
// Example:
function myDisplayer(some){
    document.getElementById("demo").innerHTML = some
}
function myCalculator(num1, num2, myCallBack){
    let sum = num1 + num2
    myCallBack(sum)
}
myCalculator(10, 15, myDisplayer)
// When you pass a funciton as a argument, remember not to add parenthesis
// An more advanced example:

// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6]

// Call removeNeg with a callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0)

// Display Result
document.getElementById("demo2").innerHTML = posNumbers

// Keep only positive numbers
function removeNeg(numbers, callback) {
  const myArray = []
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x)
    }
  }
  return myArray
}
// So whatever function that comes in as a argument, is a
    // callback function.

// As said before, functions running in parallel with other
    // functions are called asynchronous.
    // A good example is JavaScript setTimeout()

// When using the javascript setTimeout(), you can specify a callback
    // function to be executed on time-out.
    // Example:
setTimeout(myFunction, 3000)
function myFunction(){
    console.log("Paa dara maka")
}
// In the example above, the myFunciton() is used as a callback,
    // since myFunction() is a argument in the setTimeout function.
// It is also possible to pass the whole code inside the argument,
    // instead of calling a function:
setTimeout(function(){console.log("Ohaaa wo chie")}, 3000)

// When using the JavaScript function setInterval(), you can specify
    // a callback function to be executed for each interval:
setInterval(timing, 1000);
function timing() {
  let d = new Date();
  document.getElementById("demo3").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}
// In the above example, 1000 is the number of milliseconds between
    // intervals, so myFunction() will be called every second.


// Promises
// A Promise is a way to handle asynchronous operations in
    // JavaScript. It allows handlers with an asynchronous
    // action's eventual success value or failure reason.
    // This lets asynchronous methods return values like
    // synchronous methods: instead of immediately returning
    // the final value, the asynchronous method returns a
    // promise to supply the value at some point in the future.

// A promise is in one of these states:
    // > pending: initial state, neither fulfilled nor rejected.
    // > fulfilled: meaning that the operation completed successfully.
    // > rejected: meaning that the operation failed.

// A pending promise can either be fulfilled with a value, or rejected
    // with a reason (error). When either of these options happens,
    // the associated handlers queued up by a promise's then method are
    // called.

// Promise syntax:
const promise = new Promise((resolve, reject) => {
    resolve("Success")
    reject("Failure")
})

// Example:
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ["HTML", "CSS", "JavaScript", "Java"]
        if(skills.length >= 2){
            resolve(skills)
        }
        else{
            reject("Bruh he got less than 2 skills -_-")
        }
    })
})
// The below then statement, prints our above resolve statement
doPromise.then(value => {
    console.log(value)
}) // The below catch statement, prints our above reject statement
.catch(error => console.error(error))


// Fetch API
// The fetch() method starts the process of fetching a resource
    // from a server.
//The fetch() method returns a Promise that resolves to a Response object.
// So basically, the Fetch API is a modern interface that allows you
    // to make HTTP requests to servers from web browsers.

// When we write async in front of a function, we are saying that the
    // function will return a promise, so our square function below,
    // will not return a value, but a promise:
const square = async function (n) {
    return n * n
}
console.log(square(2))

// When we write await, we get the value from the promise:
const squareAwait = async function (n) {
    return n * n
}
const value = await squareAwait(2)
console.log(value)
// Async and await go together, one can not exist without the other.

// Example:
const url = 'https://restcountries.com/v2/all'
const fetchData = async () => {
    try {
        const response = await fetch(url)
        const countries = await response.json()
        console.log(countries)
    } catch (err) {
        console.error(err)
    }
}
fetchData()
*/

// ____________________________ Exercise 1 ____________________________

const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

fetch(countriesAPI)
.then(resp => resp.json())
.then(data => {
    for(const x of data){
        console.log(x.name, x.capital, x.languages, x.population, x.area)
    }
})
.catch(error => console.error(error))

// ____________________________ Exercise 2 ____________________________

fetch(catsAPI)
.then(resp => resp.json())
.then(data => {
    for(const cats of data){
        console.log(cats.name)
    }
})
.catch(error => console.error(error))

// ____________________________ Exercise 3 ____________________________
