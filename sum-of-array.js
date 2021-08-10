function sumOfarray(num){
    let sum =0;
    for (let i = 0; i < num.length;i++){
        let num2 = num[i];
        sum = sum + num2;
        return sum
    }
    return sum
}
let num1 = [4,6,40];
let sums = sumOfarray(num1)
console.log(sums)

