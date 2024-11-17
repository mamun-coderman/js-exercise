// Write a program to make first 50 fibonacci number.

let fiboSeries = [0, 1];

for(let i=2; i<=50; i++) {
    fiboSeries[i] = fiboSeries[i-1] + fiboSeries[i-2];
}
console.log(fiboSeries);