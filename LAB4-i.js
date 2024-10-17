// Student ID,name,course, and sem
// marks in 3 subject: HTML,CSS and Javascript out of 100
// Total marks of the student: __/300
// Percentage of the student
// Alot grades: >90 - A, 90-80 - B, 80-70 - C, 70> - Failed
// 
let id = "34EAD"
let name = "Ved Singh"
let study = "CS"
var sem = 5

function ID(ide){
    return ide
}
function Name(name) {
    return name
}
function course(study) {
    return study
}
function Semester(sem) {
    return sem
}

var HTML;
var CSS;
var JavaScript;

function sub(HTML, CSS, JavaScript){
    console.log("Marks in HTML: ", HTML);
    console.log("Marks in CSS: ", CSS);
    console.log("Marks in JavaScript: ", JavaScript);
      
}

function total(HTML,CSS,JavaScript) {
    console.log("Total marks acquired: ", HTML+CSS+JavaScript,"/300");       
}
// var tot = total(HTML,CSS,JavaScript)

function percent() {
    console.log("Percentage: ", (tot/300)*100);    
}
sub(56,67,88)
total(56,67,88)