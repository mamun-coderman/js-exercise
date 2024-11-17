// Write a function to swap variables . It takes two integer parameter .

function swapVariable(n, m) {
    let temp = n;
    n = m;
    m = temp;
    console.log("After swap numbers:\n", "num1 = ", n, "num2 = ", m);
}

let num1 = 10;
let num2 = 1;
console.log("Before swap numbers:\n", "num1 = ", num1, "num2 = ", num2);

swapVariable(num1, num2);