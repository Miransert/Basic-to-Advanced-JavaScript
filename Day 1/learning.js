console.log("waowsa")
console.log(typeof true, typeof 3, typeof "A string")

/* For a variable that changes at a different time,
    we use let. If the data does not change at all, we use const.
    For example, PI, country name, gravity do not change,
    and we can use const. */
let tekst = "PI er:"
const _PI = 3.14
console.log(tekst, _PI)

let arr = [1, 2, 5]
console.log(arr)
arr[1] = 7
console.log(arr)

let nameAgeGender ={
    name: "Lelodelo",
    age: 30,
    gender: "male"
}
console.log(nameAgeGender)

const pi = Math.PI
// round pi, round pi down, round pi up
console.log(Math.round(pi), Math.floor(pi), Math.ceil(pi))


console.log(Math.min(900, -2000, -3, 99, 8, 30, 7),
    Math.max(900, -2000, -3, 99, 8, 30, 7))

let city1 = "Copenhagen"
let city2 = "Albertslund"

console.log(`We are going from ${city1} to ${city2}. There are`,
    city1.length, `letters in the first city, and`, city2.length,
    `in the second city`)

// Casting
let num = "10"
let numInt = parseInt(num)
console.log("1. way\n", "String number:", num, "\nNumber:", numInt)
let numInt2 = Number(num)
console.log("2. way\n", "String number:", num, "\nNumber:", numInt2)
let numInt3 = +num
console.log("3. way\n", "String number:", num, "\nNumber:", numInt)

/* When casting from string to float, it is possible to use
    parseFloat, Number(like before), and the plus(+)*/
let float = "3.77"
let numFloat = parseFloat(float)
console.log("String number:", float, "\nFloat:", numFloat)

// When casting from float to int, use parseInt
let numberAgain = 30.507
let floatInt = parseInt(numberAgain)
console.log("Float:", numberAgain, "to", "Int:", floatInt)
