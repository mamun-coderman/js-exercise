// Program to calculate the sum of numbers in an array of numbers.

var num_list = [2, 5, 8, 12, 6, 7, 1];
var limit = num_list.length;
var sum = 0;

for(var i=0; i<limit; i++) {
    sum += num_list[i];
}
console.log("The sum of numeric array items are " + sum);