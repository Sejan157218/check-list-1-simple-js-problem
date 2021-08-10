let number = 5.66;
let myNumber = Math.ceil(number)
let myNumberFloor = Math.floor(number)
let myNumberRound = Math.round(number)
console.log(myNumber)
console.log(myNumberFloor)
console.log(myNumberRound)

let myRandomNumber = Math.round(Math.random() * 9)
console.log(myRandomNumber)

for (let i = 0;i<=20; i++){
    let item = i;
    myRandomNumber = Math.round(Math.random() * 9)
    console.log('i ' +":"+ item,'Round Number ' +":"+ myRandomNumber)
}
