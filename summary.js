
// let num1 = Math.floor(5.3)  // nicher number dei
// console.log(num1)
// let num2 = Math.ceil(5.3)  // oprer number dei
// console.log(num2)
// let num3 = Math.round(5.3) // kasakasi number dei
// console.log(num3)

// let num4 = Math.round(Math.random()) // random with defferent (0-1)
// console.log(num4)

// let num5 = Math.round(Math.random()) *9 // random with defferen number
// console.log(num5)



// // Swap --position change

// let first = 5;
// let secound = 7;
// console.log(first,secound)
// temp = first;
// first = secound;
// secound = temp;
// console.log(first,secound)



// // sum of array

// function sumOfArray(num){
//     let sum =0;
//     for(let i = 0;i<num.length;i++){
//         let number = num[i];
//         sum = sum + number; 
//     }
//     return sum
// }

// let array = [5,6,8,7,10];
// let arrays = sumOfArray(array)
// console.log(arrays)

// // leargest number
// function largestNumberArray(num){
//     let number = [0];
//     for (let i = 0;i<num.length;i++){
//         let element = num[i];
//         if (element>number){
//             number = element
//         }
//     }
//     return number
// }

// let number = [5,6,8,7,10,55,60,5];
// let largestNumber = largestNumberArray(number)
// console.log(largestNumber)



// // fibonucci

// function fibonucci(num){
//     if (typeof num != 'number' || num<2 || num >25){
//         return 'Give a number beetween 2-25'
//     }
//     fibo = [0,1];
//     for (let i = 2;i<num;i++){
//         fibo[i] = fibo[i-1] + fibo[i-2]   
//     }
//     return fibo
// }

// let myFubonucci = fibonucci(7);
// console.log(myFubonucci)


// // fibonucci-recursive

// function fibonuccis(n){
//     if(n ==0){
//         return 0;
//     }
//     if(n ==1){
//         return 1;
//     }
//     return fibonuccis(n-1) + fibonuccis(n-2)
// }

// let myFubonuccis = fibonuccis(9);
// console.log(myFubonuccis)

// // fibonucciSeries
// function fibonucciSeries(n){
//     if(n ==0){
//         return [0];
//     }
//     if(n ==1){
//         return [0,1];
//     }
//     let fibo = fibonucciSeries(n-1);
//     fibo[n] = fibo[n-1] + fibo[n-2]
//     return fibo
// }

// let myFubonucciSeries = fibonucciSeries(9);
// console.log(myFubonucciSeries)


// const numbers = -78; 
// const answer = Math.abs(numbers); 
// console.log(answer);

// var a=2; 
// var b=3;
//  if(a>b){
//      console.log('“Hello”')
//     }

//     console.log(Math.random(12.6))

//     function add(a, b){
//         return a+b
//     }

//     let as = 10;
//     let bs = 10;
//     let adds =add(as,bs)
//     console.log(adds)


let selected = []
for (let i = 0;i<10; i++){
    let item = i;
    myRandomNumber = Math.round(Math.random() * 100)
    if(selected.indexOf(myRandomNumber)==-1){
        selected.push(myRandomNumber);

    }
    else{
        console.log('found duplicate' ,myRandomNumber)
    }
    // console.log('i ' +":"+ item,'Round Number ' +":"+ myRandomNumber)
}
console.log(selected)


