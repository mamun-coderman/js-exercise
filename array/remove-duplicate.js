// Write a function to remove duplicate items of an array

function removeDuplicate(numberList) {
    let noDuplicate = []; // this array is making without duplicate item
    let duplicate = []; // making this array with only duplicate items
    for(let item of numberList){
        if(noDuplicate.includes(item) === false){
            noDuplicate.push(item);
        }
        else{
            duplicate.push(item)
        }
    }
    console.log(noDuplicate);
    console.log(duplicate);
}

let numbers = [2, 1, 5, 1, 7, 7, 6, 10];
removeDuplicate(numbers);