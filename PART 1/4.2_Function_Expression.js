
const writeFun = function () {
    console.log("Hi Function")
}
writeFun();

//ParaMeterized Function
const sum = function (a, b) { //Parameter Passed
    console.log(a + b);
}
sum(2, 4);

//ODD EVEN Function
const checkODDEVEN = function (num) {
    /* if (num % 2 == 0) {
        return "EVEN";
    }
    return "ODD"; */
    return num % 2 === 0;
}
console.log(checkODDEVEN(10))


//Function Taking String
let firstChar = function (anyString) {
    return anyString[0];
}
console.log(firstChar("anuj"))

//Function Taking Array

let takeArray = function (myarr, target) {
    for (let i = 0; i < myarr.length; i++) {
        if (myarr[i] === target) {
            console.log(`Present at ${i}`)
            return true;
        }
    }
    console.log("Not Present")
    return false;
}
console.log(takeArray(([10, 5, 4, 2]), 2));











