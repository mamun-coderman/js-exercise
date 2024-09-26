// Program for finding factorials of a number
var num = 12;
var factor = [];
var limit = Math.sqrt(num);

for(var i=1; i<=limit; i++) {
    if(num%i == 0){
        if(i == num/i){
            factor.push(i);
        }else{
            factor.push(i, num/i);
            
        }
    }
}
factor.sort(function(a, b) {return(a - b)});
console.log("Factors of " + num + " is " + factor);