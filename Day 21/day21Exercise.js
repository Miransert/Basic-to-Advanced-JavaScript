/*
// Document Object Model (DOM)
// Every HTML element has a different properties which can help to
    // manipulate it. It is possible to get, create, append or remove
    // HTML elements using JavaScript.To select an HTML element, we use
    // tag name, id, class name or other attributes.

// getElementsByTagName()
const h1Tag = document.getElementsByTagName('h1')
console.log(h1Tag) // HTMLCollections
console.log(h1Tag.length) // 4
for(let i = 0; i < h1Tag.length; i++){
    console.log(h1Tag[i])
}

// getElementById()
let pID = document.getElementById("para")
console.log(pID)

// querySelector(), can be used to select HTML element by its tag name,
    // id or class. If the tag name is used it selects only the first
    // element.
let h1 = document.querySelector('h1') // select the first available
    // h1 element.
let titleID = document.querySelector('#first-title') // select id
    // with first-title.
let titleClass = document.querySelector('.title') // select the first
    // available element with class title.

// querySelectorAll() can be used to select html elements by its tag
    // name or class. It returns a nodeList which is an array like
    // object which supports array methods. We can use for loop or
    // forEach to loop through each nodeList elements.


// Adding attributes to HTML tags
// setAttribute()
const titles = document.querySelectorAll('h1')
titles[3].setAttribute('class', 'title') // attribute, class name
titles[3].setAttribute('id', 'fourth-title') // attribute, id name

// Adding attributes without setAttribute()
titles[3].className = 'title'
titles[3].id = 'fourth-title'


// Adding text to HTML element
// Adding text content using textContent. The textContent property is used
    // to add text to an HTML element.
const titles = document.querySelectorAll('h1')
titles[3].textContent = 'Fourth Title'

// Adding text content using innerHTML. Most people get confused between
    // textContent and innerHTML. textContent is meant to add text to
    // an HTML element, however innerHTML can add a text or HTML element
    // or elements as a child.
// Example:
const lists = `
    <li>30DaysOfPython Challenge Done</li>
    <li>30DaysOfJavaScript Challenge Ongoing</li>
    <li>30DaysOfReact Challenge Coming</li>
    <li>30DaysOfFullStack Challenge Coming</li>
    <li>30DaysOfDataAnalysis Challenge Coming</li>
    <li>30DaysOfReactNative Challenge Coming</li>
    <li>30DaysOfMachineLearning Challenge Coming</li>`
const ul = document.querySelector('ul')
ul.innerHTML = lists
// If the li were to already exist in index.html, we could remove
    // them by adding these above li's to the index.html.


// Adding style
// Adding style color
const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => { // possible since it is seen as an array in the HTMLCollections
  title.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.color = 'green'
  } else {
    title.style.color = 'red'
  }
})
*/


let h1 = document.querySelector('h1')
h1.style.fontFamily = 'arial'
h1.style.textAlign = 'center'

let h2 = document.querySelector('h2')
h2.style.fontFamily = 'arial'
h2.style.textAlign = 'center'
h2.style.fontWeight = 'normal'
h2.style.textDecoration = 'underline'

setInterval(() => {
    a = new Date();
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.body.innerHTML = time;
}, 1000);

let ul = document.querySelector('ul')
ul.style.fontFamily = 'arial'
ul.style.textAlign = 'center'
ul.style.fontWeight = 'normal'
ul.style.listStyleType = 'none'

document.getElementsByTagName('li')[0].style.backgroundColor = '#5bbc7a'
document.getElementsByTagName('li')[1].style.backgroundColor = '#f7dc5c'
document.getElementsByTagName('li')[2].style.backgroundColor = '#eb695b'
document.getElementsByTagName('li')[3].style.backgroundColor = '#eb695b'
document.getElementsByTagName('li')[4].style.backgroundColor = '#eb695b'
document.getElementsByTagName('li')[5].style.backgroundColor = '#eb695b'
document.getElementsByTagName('li')[6].style.backgroundColor = '#eb695b'


for(let i = 0; i < ul.childNodes.length; i++){
    document.getElementsByTagName('li')[i].style.width = '700px'
    document.getElementsByTagName('li')[i].style.marginLeft = '225px'
    document.getElementsByTagName('li')[i].style.padding = '20px'
    document.getElementsByTagName('li')[i].style.borderStyle = 'solid'
    document.getElementsByTagName('li')[i].style.borderWidth = '2px'
    document.getElementsByTagName('li')[i].style.borderColor = 'white'
    document.getElementsByTagName('li')[i].style.textAlign = 'left'
}