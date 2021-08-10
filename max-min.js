function maxNumber(num1,num2,num3,num4){
    if (num1>num2 && num1>num3 &&num1>num4){
        return num1 + " is lergest"
    }
    else if (num2>num1 && num2>num3 && num2>num4){
        return num2 + " is lergest"
    }
    else if (num3>num1 && num3>num2 && num3>num4){
        return num3 + " is lergest"
    }
    else{
        return num4 + " is lergest"
    }
}

let myNumber = maxNumber(205.8,2010,2013,2015.5)
console.log(myNumber)

let myNumbers = Math.max(205.8,2010,2013,2015.5)
console.log(myNumbers)

let myNumberss = Math.min(205.8,2010,2013,2015.5)
console.log(myNumberss)


function minNumber(num1,num2,num3,num4){
    if (num1<num2 && num1<num3 &&num1<num4){
        return num1 + " is smallest"
    }
    else if (num2<num1 && num2<num3 && num2<num4){
        return num2 + " is smallest"
    }
    else if (num3<num1 && num3<num2 && num3<num4){
        return num3 + " is smallest"
    }
    else{
        return num4 + " is smallest"
    }
}

let myMinNumber = minNumber(205.8,2010,2013,2015.5)
console.log(myMinNumber)