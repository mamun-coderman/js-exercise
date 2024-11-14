// Write a function to find the duplicate items of an array.

function findDuplicate(numberList) {
    let duplicate = [];
    for(let i=0; i<numberList.length; i++) {
        for(let j=i+1; j<numberList.length; j++) {
            if(numberList[i] === numberList[j]){
                duplicate.push(numberList[i])
            }
        }        
    }
    return duplicate;
}

let numbers = [1, 5, 2, 2, 10, 7, 20, 10, 15, 3, 3];
let result = findDuplicate(numbers);
console.log(result);