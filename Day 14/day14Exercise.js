// Error handling
// Try catch finally block
try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
} catch (err) {
    console.error(err) // we can use console.log() or console.error()
    console.log("Error name: ", err.name)
    console.log("Error message: ", err.message)
} finally {
    console.log('In any case I will be executed')
}

// throw
throw "ErrorAgain"

// Error types
    // ReferenceError: An illegal reference has occurred. A ReferenceError
        // is thrown if we use a variable that has not been declared.
    
    // SyntaxError: A syntax error has occurred
    
    // TypeError: A type error has occurred

