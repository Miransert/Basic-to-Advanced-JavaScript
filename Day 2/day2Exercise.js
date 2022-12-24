let challenge = "30 Days of JavaScript"
console.log(challenge + ",", challenge.length, "letters")
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(3, 40))
console.log(challenge.includes("Script"))
console.log(challenge.split())
console.log(challenge.split(" "))
let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(companies.split(","))
console.log(challenge.replace("JavaScript", "Python"))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt("J"))
console.log(challenge.indexOf("a"))
console.log(challenge.lastIndexOf("a"))
let sentence = "You cannot end a sentence with because because because is a conjunction"
console.log(sentence.indexOf("because"))
console.log(sentence.lastIndexOf("because"))
console.log(sentence.search("because"))
let spaceSentence = "     hi how are you     "
console.log(spaceSentence.trim())
console.log(challenge.startsWith("30"))
console.log(challenge.endsWith("Script"))
console.log(challenge.match("a"))
let start = "30 Days of "
let end = "JavaScript"
console.log(start.concat(end))
console.log(challenge.repeat(2))

console.log("__________________________________________________".repeat(3))

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")
let nums = "10"
console.log(parseInt(nums))
let float = "9.8"
let floatString = Math.ceil(parseFloat(float))
let floatInt = parseInt(floatString)
console.log(floatInt)
let python = "Python"
let jargon = "Jargon"
console.log(python.includes("on"), jargon.includes("on"))
let jargonSentence = "I hope this course is not full of jargon"
console.log(jargonSentence.includes("jargon"))
let randomNum = Math.random()
let number = randomNum * 100
let numCeil = Math.ceil(number)
console.log(numCeil)
let num50 = Math.ceil((randomNum*50)+50)
console.log(num50)
let num255 = Math.ceil(randomNum*255)
console.log(num255)
let becauseSentence = "You cannot end a sentence with because because because is a conjunction"
console.log(becauseSentence.substr(0, 30), becauseSentence.substr(55, 90))
let loveSentence = "Love is the best thing in this world. Some found their love and some are still looking for their love."
console.log(loveSentence.match(/love/gi).length)
console.log(becauseSentence.match(/because/gi).length)
const sentence2 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence2.replace(/[^a-zA-Z0-9 ]/g, ""))
let sentenceNum = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
let newSentenceNum = sentenceNum.match(/\d+/g)
console.log(newSentenceNum[2]*12)
console.log(1===1)
