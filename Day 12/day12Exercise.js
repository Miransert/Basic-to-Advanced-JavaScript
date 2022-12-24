// RegExp
// A small programming language to find pattern in data
// A regular expression takes two parameters, one required search
    // pattern and an optional flag.
// Optional flags: g, i, m, s, u, y.
    // g: a global flag which means looking for a pattern in whole text
    // i: case insensitive flag(it searches for both lowercase and uppercase)
    // m: multiline

/*
// Creating a pattern with RegExp Constructor
// Without flag
let pattern = 'love'
let regex = new RegExp(pattern)
// With flag
let flag = 'gi'
let regexFlag = new RegExp(pattern, flag)
// Using regexp object
let regexObject = new RegExp('Hello', 'mi')

// Creating a pattern without RexExp contructor
let regEx = /Waow/gi
*/

// RegExp Object methods
// test()
const str = 'I love JavaScript'
const pattern = /love/
const resultTest = pattern.test(str)
console.log(resultTest)

// match()
const resultMatch = str.match(pattern)
console.log(resultMatch)

// search()
const result = str.search(pattern)
console.log(result)

// replace()
matchReplaced = str.replace(/Love|love/, 'love NOT')
console.log(matchReplaced)
    // With flags:
matchReplacesFlags = str.replace(/love/gi, 'love NOT')
console.log(matchReplacesFlags)

const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'
replaceSign = txt.replace(/%/g, '')
console.log(replaceSign)

/*
    []: A set of characters
    [a-c] means, a or b or c
    [a-z] means, any letter a to z
    [A-Z] means, any character A to Z
    [0-3] means, 0 or 1 or 2 or 3
    [0-9] means any number 0 to 9
    [A-Za-z0-9] any character which is a to z, A to Z, 0 to 9
    \: uses to escape special characters
    \d mean: match where the string contains digits (numbers from 0-9)
    \D mean: match where the string does not contain digits
    . : any character except new line character(\n)
    ^: starts with
    r'^substring' eg r'^love', a sentence which starts with a word love
    r'[^abc] mean not a, not b, not c.
    $: ends with
    r'substring$' eg r'love$', sentence ends with a word love
    *: zero or more times
    r'[a]*' means a optional or it can occur many times.
    +: one or more times
    r'[a]+' means at least once or more times
    ?: zero or one times
    r'[a]?' means zero times or once
    \b: word bounder, matches with the beginning or ending of a word
    {3}: Exactly 3 characters
    {3,}: At least 3 characters
    {3,8}: 3 to 8 characters
    |: Either or
    r'apple|banana' mean either of an apple or a banana
    (): Capture and group
*/
