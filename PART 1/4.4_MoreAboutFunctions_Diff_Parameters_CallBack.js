//Default Paramenters

/* function sum(a, b) {
    if (typeof b == "undefined") {
        b = 0;
    }
    return a + b;
} */
function sum(a, b = 0) {
    return a + b;
}

console.log(sum(1, 3)); //4
console.log(sum(3));   //3

//Rest Parameters
function myfunc(a, b, c) {
    console.log(` a is ${a} `)
    console.log(` b is ${b} `)
    console.log(` c is ${c} `)
}

myfunc(3, 4, 5)
/* a is 3
 b is 4
 c is 5  */

function myfuncRest(a, b, ...c) {
    console.log(` a is ${a} `)
    console.log(` b is ${b} `)
    console.log(` c is ${c} `)
}
myfuncRest(3, 4, 5, 6, 7, 8)
/*  a is 3
    b is 4
    c is 5,6,7,8 */

function AddAll(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total
}
const ans = AddAll(1, 2, 3, 4, 5);
console.log(ans);

//Parameter Destructuring

const person = {
    name: "anuj",
    gender: "male"
}
// function printPerson(obj){
//     console.log(obj.name);
//     console.log(obj.gender);
// }

function printPerson({ name, gender }) {
    console.log(name);
    console.log(gender);
}
printPerson(person);

//  CallBack Function

function callackFunc() {
    console.log("Hi calling Function inside function")
}
function myCBfunc(callBack) {
    // console.log(callBack);
    callBack();
    console.log(" My CB Func ");
}
// myCBfunc({here we can pass anything value , array , Object})

myCBfunc(callackFunc)

//Function returning Function

function func1() {
    function hello() {
        return ("hello world");
    }
    return hello;
}
const ans1 = func1();
console.log(ans1); // [Function: hello]
 ans1(); //hello world { else print this way if u r doing console }

 console.log(ans1()); //hello world  { If u use return in inside func then print this way }