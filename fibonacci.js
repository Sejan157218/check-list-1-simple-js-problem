// const fibbo = [2,3]
// for (let i = 2; i<15; i++){
//     fibbo[i] = fibbo[i-1] + fibbo[i -2]
// }
// console.log(fibbo)


function fibonucci(nth){
    if (typeof nth != 'number'){
        return 'please give a number';
    }
    if (nth < 2){
        return 'please give a number geaterthan 2';
    }
    if (nth > 25){
        return 'please give a number smallerthan 25';
    }

    let fibbo = [0,1];
    for (let i = 2;i<nth;i++){
        fibbo[i] = fibbo[i-1] + fibbo[i-2];        
    }
    return fibbo;
}

let result = fibonucci(26);
console.log(result)