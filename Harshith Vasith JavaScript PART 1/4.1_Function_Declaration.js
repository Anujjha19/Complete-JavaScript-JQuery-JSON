function writeFun() {
    console.log("Hi Function")
}
writeFun();


function twosum4(a, b) {
    return (2 + 4);
}
console.log(twosum4())
const ans = twosum4()
console.log(ans)


//ParaMeterized Function
function sum(a, b) { //Parameter Passed
    console.log(a + b);
}
sum(2, 4); //argument passed 

//ODD EVEN Function
function checkODDEVEN(num) {
    /* if (num % 2 == 0) {
        return "EVEN";
    }
    return "ODD"; */
    return num % 2 === 0;
}
console.log(checkODDEVEN(10))


//Function Taking String
function firstChar(anyString) {
    return anyString[0];
}
console.log(firstChar("anuj"))

//Function Taking Array

function takeArray(myarr, target ) {
    for (let i = 0; i < myarr.length; i++) {
        if (myarr[i] === target ) {
            console.log(`Present at ${i}`)
            return true;
        }
    }
    console.log("Not Present")
    return false;
}
console.log(takeArray(([10, 5, 4, 2]), 2));
