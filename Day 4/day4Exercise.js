let score = prompt("Enter score")
let scoreInt = parseInt(score)
switch(true){
    case scoreInt >= 80:
        console.log("Scored 80-100, A")
        break
    case scoreInt >= 60:
        console.log("Scored 60-80, B")
        break
    case scoreInt >= 40:
        console.log("Scored 40-60, C")
        break
    case scoreInt >= 20:
        console.log("Scored 20-40, D")
        break
    case scoreInt >= 0:
        console.log("Scored 0-20, F")
        break
    default:
        console.log("That is not a score")
}