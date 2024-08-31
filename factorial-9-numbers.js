// Program to calculate the factorail of number from 1 to 10

let lastNum = 10;
let factorial = 1;

for(let i = 1; i <= lastNum; i++) {
    factorial *= i;
    console.log("Factorial of " + i + " is " + factorial);
}

