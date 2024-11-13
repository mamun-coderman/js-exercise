// Write a function that reverse a number.
// Sample data and output be like:
// num = 452917
// Output: 719254

function reverse_a_number(n) {
    let inputNumber = String(n);
    let reverseNumber = inputNumber.split("").reverse().join("");
    console.log(Number(reverseNumber));

}

let num = 452917;
reverse_a_number(num);