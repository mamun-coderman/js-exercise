// program to calculate your grading system

var marks = 90;
grade = "";

if(marks > 80) {
    grade = "A+"
}else if(marks > 70) {
    grade = "A"
}else if(marks > 60) {
    grade = "A-"
}else if(marks > 50) {
    grade = "B"
}else {
    grade = "F"
}
console.log("Your grade is " + grade)
