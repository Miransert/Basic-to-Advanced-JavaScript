// JSON
// JSON stands for JavaScript Object Notation. The JSON syntax
// is derived from JavaScript object notation syntax, but
// the JSON format is text or string only. JSON is a light
// weight data format for storing and transporting. JSON is
    // mostly used when data is sent from a server to a client.
    // JSON is an easier-to-use alternative to XML.

// JSON and JavaScript Object looks alot like each other, but
    // JSON keys are double quoted which JavaSCript Object key
    // is not. Therefore we can change JSON to Object, and
    // vice versa.

// JSON example also in day16Exercise.json file
/*
const usersText = `{
    "users":[
    {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
    },
    {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
    },
    {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
    }
    ]
}`

// Converting JSON to JavaScript Object

const obj = JSON.parse(usersText)
console.log(obj)
// With reviver:
JSON.parse(usersText, (key, value) => {
    console.log(key)
})

// Converting JavaScript Object to JSON
const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    country: 'Finland',
    city: 'Helsinki',
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
    age: 250,
    isLoggedIn: false,
    points: 30
}
const txt = JSON.stringify(user)
console.log(txt)
// With filter:
const txtFilter = JSON.stringify(user, ['firstName', 'lastName', 'country', 'city', 'age'])
console.log(txtFilter)
*/

// ______________________________ Exercise 1 ______________________________

const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
const arrayJSON = JSON.stringify(skills)
console.log(arrayJSON)
