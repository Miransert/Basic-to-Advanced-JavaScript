/*
// Creating an Element
let h1 = document.createElement('h1')
h1.className = 'h1'
h1.style.fontSize = '14px'
h1.textContent = 'Jamen hejsa'
console.log(h1)

// Appending child to a parent element 
let title
for (let i = 0; i < 3; i++) {
    title = document.createElement('h1')
    title.className = 'title'
    title.style.fontSize = '24px'
    title.textContent = i
    console.log(title)
    document.body.appendChild(title)
}

// Removing a child element from a parent node
const ul = document.querySelector('ul')
ul.removeChild(ul.firstElementChild)

// Removes all
const ul = document.querySelector('ul')
ul.innerHTML = ''
*/
