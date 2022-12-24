/*
// Classes
// Defining class
class ClassName{
    // Code here
}

// Class instantiation
    // Class instantiation means creating an object from a class
class User{
    // Code
}
const user = new User()
console.log(user)

// Class constructor
class Car {
    constructor(name, year){
        console.log(this) // Just to check output
        this.name = name
        this.year = year
    }
}
const car1 = new Car("BMW", 2022)
const car2 = new Car("Mercedes", 2018)
const car3 = new Car("Audi", 2020)
console.log(car1)
console.log(car2)
console.log(car3)

// Default values with constructor
class Person{
    constructor(
        firstName = "Nam",
        lastName = "Ham",
        age = 30,
        country = "Denmark",
        city = "Copenhagen"
    ){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
    }
}
const person = new Person()
const personAgain = new Person("Hello", "Again", 50, "AnotherLand", "AnotherCity")
console.log(person)
console.log(personAgain)

// Class methods
    // Methods are javascript functions inside the class
class Account {
    constructor(userName, mail, country){
        this.userName = userName
        this.mail = mail
        this.country = country
        this.score = 5
    }
    getFullInfo(){
        const fullname = "Username: " + this.userName + "\nMail: " + this.mail + "\nCountry: " + this.country
        return fullname
    }
    // This is not the way the course shows it,
        // but it does'nt work the way the course implements it.
    set changeScore(newScore){
        this.score += newScore
    }
}
const account = new Account("Brr", "Brr@grr.com", "USA")

// Getter methods
console.log(account.getFullInfo())

// Setter methods
    // The setter methods allows us to modify the value of certain
    // properties.
account.changeScore = 2
console.log(account.score)

// Static method
    // You cannot call a static static method on an object,
    // only on an object class.
    // Syntax is just the keywword "static" before the method naming.
    // Static keyword can be used as utility functions

// Inheritance
    // Using inheritance we can access all the properties and the
    // methods of the parent class.
class Student extends Account{
    saySomething(){ 
        return "Hello my friend"
    }
}
const s1 = new Student("Pedro", "mail@mail.com", "Sweden")
console.log(s1)
console.log(s1.saySomething()) // From Student child class
console.log(s1.getFullInfo()) // From Account parent class

// Super keyword and Override
class Teacher extends Account{
    constructor(userName, mail, country){
        super(userName, mail, country)
        this.userName = userName
        this.mail = mail
        this.country = country
    }

    getFullInfo(){
        return this.name + this.age + this.gender
    }
}

const teacher = new Teacher()
console.log(teacher)
*/

// ____________________________ Exercise 1-2 ____________________________

class Animal{
    constructor(name, age, color, legs){
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
    getInfo(){
        return this.name + " is " + this.age + "'s old and has " + this.legs + " and is the color " + this.color
    }
}

class Dog extends Animal{
    getInfo(){
        return this.name + " is " + this.age + "'s old and has " + this.legs + " and is the color " + this.color
    }
}
const dog = new Dog("Dog", 5, "brown", 4)
console.log(dog.getInfo())

class Cat extends Animal{
    getInfo(){
        return this.name + " is " + this.age + "'s old and has " + this.legs + " and is the color " + this.color
    }
}
const cat = new Cat("Cat", 2, "grey", 4)
console.log(cat.getInfo())
// Okay so you DON'T need to include super to override
