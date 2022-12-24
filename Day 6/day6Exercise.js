const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
  
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
  
const mernStack = ['MongoDB', 'Express', 'React', 'Node']

for(let i = 0; i < countries.length; i++){
    console.log(countries[i])
}

console.log("________Backwards________")
for(let i = countries.length-1; i >= 0; i--){
    console.log(countries[i])
}

console.log("______________________________________________________".repeat(3))

let i = 0
while(i < webTechs.length){
    console.log(webTechs[i])
    i++
}

console.log("________Backwards________")
let iBack = webTechs.length-1
while(iBack >= 0){
    console.log(webTechs[iBack])
    iBack--
}

console.log("______________________________________________________".repeat(3))

let i2 = 0
do{
    console.log(mernStack[i2])
    i2++
} while (i2 < mernStack.length)

console.log("________Backwards________")
let i2Back = mernStack.length-1
do{
    console.log(mernStack[i2Back])
    i2Back--
} while (i2Back >= 0)

let n = 5
for(let i = 0; i <= n; i++){
    console.log(i)
}

for(let i = 0; i <= 7; i++){
    console.log("#".repeat(i))
}


console.log("i i^2 i^3")
for(let i = 0; i <= 10; i++){
    console.log(i, i*i, i*i*i)
}

for(let i = 0; i <= 100; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}
for(let i = 0; i <= 100; i++){
    if(i % 2 == 1){
        console.log(i)
    }
}

let sum = 0;
for(let i = 0; i <= 100; i++){
    sum = sum + i
}
console.log(sum)

let sumEven = 0;
for(let i = 0; i <= 100; i++){
    if(i % 2 == 0){
        sumEven = sumEven + i
    }
}
let sumOdd = 0;
for(let i = 0; i <= 100; i++){
    if(i % 2 == 1){
        sumOdd = sumOdd + i
    }
}
let arr = []
arr.push(sumEven, sumOdd)
console.log(arr)

let randomArr = []
for(let i = 0; i < 5; i++){
    randomArr.push(Math.ceil(Math.random()*10))
}
console.log(randomArr)


let randomUniqueArr = []
for(let i = 0; randomUniqueArr.length < 5; i++){
    let r = Math.ceil(Math.random()*10)
    if(randomUniqueArr.indexOf(r) === -1){
        randomUniqueArr.push(r)
    }
}
console.log(randomUniqueArr)

let allChar = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"
let randomCharArr = []
for(let i = 0; randomCharArr.length < 6; i++){
    let charNum = allChar.charAt(Math.ceil(Math.random()*allChar.length))
    randomCharArr.push(charNum)
}
console.log(randomCharArr.toString().replace(/,/g, ""))


let randomCharArrLength = []
let rrrr = Math.ceil(Math.random()*100)
for(let i = 0; randomCharArrLength.length < rrrr; i++){
    let charNum = allChar.charAt(Math.ceil(Math.random()*allChar.length))
    randomCharArrLength.push(charNum)
}
console.log(randomCharArrLength.toString().replace(/,/g, ""))

let randomHex = []
for(let i = 0; randomHex.length < 6; i++){
    let charNum = allChar.charAt(Math.ceil(Math.random()*allChar.length))
    randomHex.push(charNum)
}
console.log("#" + randomHex.toString().replace(/,/g, ""))