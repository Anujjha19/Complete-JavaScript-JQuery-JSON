// 15_Clousures.js

/* ***  Clousure in Js 

A closure is an inner function that has access to the outer function's variables and parameters. It allows the inner function to access and manipulate the outer function's variables, even after the outer function has returned. */


/* function outerFunction() {
    function innerFunction() {
        console.log('Hello Closure ! ')
    }
    return innerFunction  ;
}
const ans = outerFunction();  // ans()   // Hello Closure
 */


function printFullName(fname, lname) {
    function printName() {
        console.log(fname, lname)
    }
    return printName;
}
const answersss = printFullName('anuj', 'jha');
answersss() //anuj jha


/* Example 1 - Closure  */

function Hello(x) {
    const a = 'Var a     '
    const b = 'Var b    '
    return function () {
        console.log(a, b, x);
    }
}
const res = Hello(' arg');
res();

/* Example 2 - Closure  */

// function myFunction(power){
//     return function(number){
//         return number ** power;
//     }
// }
const myFunction = power => number => number ** power;


const square = myFunction(2)
const ans = square(3);
console.log(ans) //9

/* Example 3 - Closure  */


function func() {
    let counter = 0;
    return function () {
        if (counter < 1) {
            console.log(' Hi You Called Me !');
            counter++;
        } else {
            console.log('Already Callled , Dont`t Call Again')
        }
    }
}
const myFunc1 = func();
myFunc1(); // Hi You Called Me !
myFunc1();  //Already Callled , Dont`t Call Again

const myFunc2 = func();
myFunc2(); // Hi You Called Me !
myFunc2();  //Already Callled , Dont`t Call Again


