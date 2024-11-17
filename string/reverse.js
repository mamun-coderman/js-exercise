// Take your country name as input. print the length of this name. And write a function to return the reversed value of this string.

function reverseString(str) {
    let returnValue = str.split("").reverse().join("");
    return returnValue;
}

let countryName = "Bangladesh";
let len = countryName.length;
console.log("The length of country name is: ", len);

let result = reverseString(countryName);
console.log("The reversed string of ", countryName, "is: ", result);