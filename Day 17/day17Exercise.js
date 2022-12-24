// HTML5 Web Storage
// Web storage is a new HTML5 API offering important benefits
    // over traditional cookies.
// Before HTML5, application data had to be stored in cookies,
    // included in every server request. Web storage is more
    // secure, and large amounts of data can be stored locally,
    // without affecting website performance. The data storage
    // limit of cookies in many web browsers is about 4 KB per
    // cookie. We Storages can store far larger data (at least 5MB)
    // and never transferred to the server. All sites from the same
    // or one origin can store and access the same data.
// The data being stored can be accessed using JavaScript, which gives
    // you the ability to leverage client-side scripting to do many
    // things that have traditionally involved server-side programming
    // and relational databases. There are two Web Storage objects:
        // > sessionStorage
        // > localStorage
    // localStorage is similar to sessionStorage, except that while data
    // stored in localStorage has no expiration time, data stored in
    // sessionStorage gets cleared when the page session ends — that is,
    // when the page is closed.

// sessionStorage is only available within the browser tab or window
    // session. It’s designed to store data in a single web page
    // session. That means if the window is closed the session data
    // will be removed.
// The HTML5 localStorage is the para of the web storage API which is
    // used to store data on the browser with no expiration data. The
    // data will be available on the browser even after the browser is
    // closed. localStorage is kept even between browser sessions. This
    // means data is still available when the browser is closed and
    // reopened, and also instantly between tabs and windows.

// 5 methods to work on local storage:
    // > setItem()
    // > getItem()
    // > removeItem()
    // > clear()
    // > key()

// Use cases of web storage:
    // store data temporarily
    // saving products that the user places in his shopping cart
    // data can be made available between page requests, multiple
    // browser tabs, and also between browser sessions using localStorage
    // can be used offline completely using localStorage
    // Web Storage can be a great performance win when some static data
        // is stored on the client to minimize the number of subsequent
        // requests. Even images can be stored in strings using Base64
        // encoding.
    // can be used for user authentication method

// In cases, we want to to get rid of the data as soon as the window is
    // closed. Or, perhaps, if we do not want the application to
    // interfere with the same application that’s open in another window.
    // These scenarios are served best with sessionStorage.

// HTML web storages provides two objects for storing data on the client:
    // > window.localStorage - stores data with no expiration date
    // > window.sessionStorage - stores data for one session (data is lost
        // when the browser tab is closed). Most modern browsers support
        // Web Storage, however it is good to check browser support for
        // localStorage and sessionStorage.

// Web storage objects:
    // > localStorage - to display the localStorage object
    // > localStorage.clear() - to remove everything in the local storage
    // > localStorage.setItem() - to store data in the localStorage. It takes a key and a value parameters.
    // > localStorage.getItem() - to display data stored in the localStorage. It takes a key as a parameter.
    // > localStorage.removeItem() - to remove stored item form a localStorage. It takes key as a parameter.
    // > localStorage.key() - to display a data stored in a localStorage. It takes index as a parameter.

localStorage.setItem("Test", "Ning")
const arr = [1, 2, 3, 4, 5]
localStorage.setItem("Array", arr)

console.log(localStorage)
console.log(localStorage.getItem("Array"))

// Storing an array in localStorage
const skills = ["HTML", "CSS", "JavaScript", "Java", "Python"]
const skillsJSON = JSON.stringify(skills)
localStorage.setItem('skills', skillsJSON)

// Storing a object in localStorage
const user = {
    userName: "PAW",
    password: 1234,
    age: 25
}
const userJSON = JSON.stringify(user)
localStorage.setItem('user', userJSON)