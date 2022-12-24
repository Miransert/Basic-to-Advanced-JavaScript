function area(length, width){
    let area = length * width
    console.log("The area is:", area)
}
area(20,7)

function BMI(weight, height){
    let age = prompt("Are you 20 or older?")
    heightCalc = Math.pow(height*height, 2)
    bmiCalc = weight/heightCalc
    if(age == "yes"){
        if(bmiCalc <= 18.5){
            console.log("Underweight")
        }
        else if(bmiCalc <= 24.9){
            console.log("Normalweight")
        }
        else if(bmiCalc <= 29.9){
            console.log("Overweight")
        }
        else if(bmiCalc >= 30){
            console.log("Obese")
        }
    }
    else{
        console.log("You are not old enough")
    }
}
BMI(150, 180)