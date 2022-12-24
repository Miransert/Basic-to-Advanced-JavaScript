// DOM Event Listeners
// Common HTML events: onclick, onchange, onmouseover, onmouseout,
    // onkeydown, onkeyup, onload.
// We use addEventListener() method to listen different event types
    // on HTML elements. The addEventListener() method takes two
    // arguments, an event listener and a callback function.
// Syntax:
/*selectedElement.addEventListener('eventlistner', function(e) {
    // the activity you want to occur after the event will be in here
})
// or
selectedElement.addEventListener('eventlistner', e => {
    // the activity you want to occur after the event will be in here
})*/

// click
/*const button = document.querySelector('button')
button.addEventListener('click', param => {
    console.log("Test SUCCESS LAA")
    console.log(param) // param gives the event listener object
    console.log(param.target) // param.target gives the selected element
    console.log(param.target.textContent) // param.target.textContent
        // gives content of selected element
})*/

// onclick
/*const clickNing = paramAgain =>{
    console.log("Jamen SUCCESS IGEN AAAA")
}*/

// double click
/*const button = document.querySelector('button')
button.addEventListener('dblclick', () => {
    console.log("asd")
})*/

// Mouse enter
/*const button = document.querySelector('button')
button.addEventListener('mouseenter', () => {
    console.log("Click Clack")
})*/

// List of events:
    /*
    click - when the element clicked
    dblclick - when the element double clicked
    mouseenter - when the mouse point enter to the element
    mouseleave - when the mouse pointer leave the element
    mousemove - when the mouse pointer move on the element
    mouseover - when the mouse pointer move on the element
    mouseout -when the mouse pointer out from the element
    input -when value enter to input field
    change -when value change on input field
    blur -when the element is not focused
    keydown - when a key is down
    keyup - when a key is up
    keypress - when we press any key
    onload - when the browser has finished loading a page
    */

// Getting input value from input element.
/*
const mass = document.querySelector('#mass')
const height = document.querySelector('#height')
const button = document.querySelector('button')

let bmi
button.addEventListener('click', () => {
    bmi = mass.value / height.value ** 2
    alert(`your bmi is ${bmi.toFixed(2)}`)
    console.log(bmi)
    // toFixed() method converts a number to a string, or rounds the
        // string to a specified number of decimals.
})*/

// Input event and change
// How about if we want to get value without click the button. We can
    // use the change or input event type to get data right away from
    // the input field when the field is on focus.
/*
const input = document.querySelector('input')
const p = document.querySelector('p')
input.addEventListener('input', e =>{
    p.textContent = e.target.value
})
*/

// keypress, keydow, keyup
// We can access all the key numbers of the keyboard using different
    // event listener types. Let us use keypress and get the keyCode
    // of each keyboard keys.
/*
document.body.addEventListener('keypress', e => {
    alert(e.keyCode)
})
*/