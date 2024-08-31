// Program to print all multiplication tables with numbers from 1 to 20

let num = 1;
while(num <= 20) {
    console.log("The multiplication table of " + num + " is shown bellow: ");
    for(let i = 1; i <= 10; i++){
        console.log(num + " * " + i + " = " + num*i);
    }
    num++;
}