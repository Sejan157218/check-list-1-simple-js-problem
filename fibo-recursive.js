function fibonucci(n){
    if (n==0){
        return 0;
    }
    if (n==1){
        return 1;
    }
    return fibonucci(n-1) + fibonucci(n-2);
}

let myFubonucci = fibonucci(8);
console.log(myFubonucci)



function fibonucciSeries(n){
    if (n==0){
        return [0];
    }
    if (n==1){
        return [0,1];
    }
    let fibo = fibonucciSeries(n-1);
    fibo[n] = fibo[n-1] + fibo[n-2]
    return fibo
}
let myFubonucciSeries = fibonucciSeries(8);
console.log(myFubonucciSeries)