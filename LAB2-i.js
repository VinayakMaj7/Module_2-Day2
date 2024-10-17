var voter = 66

if (voter<18 || voter>=65 ){
    console.log("The person is not eligible to vote")
} else{
    console.log("The person is eligible to vote")
}
console.log();

// If-else shortcut
var age = 25
var isadult = age>=18 ? true:false
console.log(isadult);
// which is same as.../.
if (age>=18) {
    console.log(true);
} else {
    console.log(false);
}

