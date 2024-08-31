// Program to calculate the factorail of four

let num = 4;
let factorial = 1;

for(let i = num; i > 1; i--) {
    factorial *= i;
}
console.log("Factorial of 4 is " + factorial);
