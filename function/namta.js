// Write a function that gives multiplication table of a number as output.

function namtaPrinting(num) {
    console.log("The multiplication table of", num, " is:");
    for(let i = 1; i<=10; i++){
        console.log(num, "*", i, "=", num*i)
    }
}

let num = 13;
namtaPrinting(num);
