// program to print a new array with only positive values from an array.

var numbers = [2, -5, -10, 20, 15, -16, 17, -25, 30, 33, 99,-66, 100];
var length = numbers.length;
var positiveNumbers = [];

for(var i=0; i<length; i++){
    if(numbers[i] > 0){
        positiveNumbers.push(numbers[i]);
    }
}
console.log(positiveNumbers);