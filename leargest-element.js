// function leargestElement(num){
//     let lgElement = Math.max(num);
//     return lgElement;
// }

// let number = [(5,6,7,8,9,11,12,13)];
// let lergestNumber = leargestElement(number);
// console.log(lergestNumber)

// let min = [(205.8,2010,2013,2015.5)];
// let myNumberss = Math.min(min)
// console.log(myNumberss)


// function leargestElement(num){
//     let lergest = num[0];
//     for (let i = 0;i < num.length; i++){
//         let element = num[i];
//     if (element > lergest){ 
//         lergest = element      
//     }
//     }
//     return lergest        
// }
// let number = [5,6,7,8,9,11,107,12,13];
// let lergestNumber = leargestElement(number);
// console.log(lergestNumber)


function smallest(num){
    let small = num[0];
    for (let i = 0;i< num.length;i++){
        let element = num[i];
        if(element<small){
            small = element
        }
    }
    return small
}

let number = [5,6,7,2,8,9,11,107,12,13];
let lergestNumber = smallest(number);
console.log(lergestNumber)