// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(arr, size) {
    let sum = 0;
    for(let i of arr) {
        sum += i;
    }
    let average = sum/size;
    return Math.round(average);
}

let numList = [5, 2, 8, 10, 6, 13, 4, 21, 1];
let length = numList.length;

result = make_avg(numList, length);
console.log("The average of the array item is ", result);