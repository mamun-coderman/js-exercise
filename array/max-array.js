// Write a program to find the largest num of an array.

var numbers = [5, 1, 4, 30, 9, 2, 10];
var length = numbers.length;
var max = numbers[0];

for(var i=1; i<length; i++){
    if(numbers[i]>max){
        max = numbers[i];
    }
}
console.log(max);