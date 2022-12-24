/*
//Object is a key-value pair
const person = {
    firstName: "Peter",
    lastName: "Anders",
    age: 20,
    isMarried: false,
    skills: [
        1,
        2,
        3,
        "CSS",
        "Football",
        false,
        2.8
    ],
    getFullname: function(){
        return `${this.firstName} ${this.lastName}`
    }
}

const employees = {
    name: "Hans Chris",
    work: "Developer"
}

person.nationality2 = 'Ethiopian'

console.log(person.getFullname())
console.log(person)

// In the code below, we created a new object called copyPerson
    // which in this example, merges or combines, the 3 object
    // written as arguments bellow, which are employees,
    // person and teacher:
const merging = Object.assign(employees, person, {teacher: "Mr Jens"})
console.log(merging)

// You can also just copy a object:
const phoneObject = {
    iphone: 14,
    samsung: "s6"
}
const copy = Object.assign(phoneObject)
console.log(copy)

const keys = Object.keys(person)
console.log(keys)

const values = Object.values(phoneObject)
console.log(values)

const entries = Object.entries(copy)
console.log(entries)
// Can be solved with toString (i think)

console.log(copy.hasOwnProperty("iphone"))
*/

//________________________________Exercise 1______________________________
/*
const dog = {
    name: "Ostehaps",
    legs: 4,
    color: "grey",
    age: 5,
    getBark: function(){
        return "woof woof"
    }
}

console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.getBark())

dog.breed = "idk"
dog.getDogInfo = function(){
    return `${dog.name} ${dog.legs} ${dog.color} ${dog.age}`
}
*/
//________________________________Exercise 2.1______________________________

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
/*
let one = users.Alex.skills.length
let two = users.Asab.skills.length
let three = users.Brook.skills.length
let four = users.Daniel.skills.length
let five = users.John.skills.length
let six = users.Paul.skills.length
let seven = users.Thomas.skills.length

//console.log(Math.max(one, two, three, four, five, six, seven))




for(i = 0; i < Object.keys(users).length; i++){
    if(users.hasOwnProperty(Object.keys(users)[i])){
        console.log(users[i])
    }
}


/*for (const user in users) {
    console.log(Object.keys(users)[0].skills)
}
*/
//________________________________Exercise 2.2______________________________

const isObject = function(val){
    if(val == null){
        return false
    }
    return (typeof val === "object")
}

for(let val in users){
    if(isObject(users[val])){
        for(let val2 in users[val]){
            if(val2.skills){
                let i = 0
                console.log(i++)
            }
        }
    }
}