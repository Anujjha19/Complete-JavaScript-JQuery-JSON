const writeFun = () => {
    console.log("Hi Function")
}
writeFun();

const sum = (a, b) => {
    console.log(a + b);
}
sum(2, 4);

//Print NUM
const num = a => a;
console.log(num(6))


function name() {
    console.log("anuj")
}
name();

const name1 = function () {
    console.log("anuj")
}
name1();

const name2 = () => console.log("anuj");
name2();

//Hoisting

hello();
function hello() {
    console.log("Hellow Hoisting ")
}

//  *  Function Inside Function

/* 

 const age = () =>{
    const ageInside =() => {
        console.log("ageInside 21");
    }
    const totalAge =() => {
        console.log("Total Age 20 + 21 = 41 ");
    }
    console.log("age 20")
}
age(); //age 20 */


const age = () => {
    const ageInside = () => {
        console.log("ageInside 21");
    }
    const totalAge = () => {
        console.log("Total Age 20 + 21 = 41 ");
    }
    ageInside();
    totalAge();
    console.log("age 20")
}
age();
/* 
ageInside 21
Total Age 20 + 21 = 41 
age 20
 */

//Lexical Scope
function myApp() {
    const myVar = "Value 1 "
    function myFunc() {

        //const myVar= "inside myfunc == Value 2 ";
        console.log("inside MyFunc ", myVar)
    }
    const myFunc2 = function () { }
    const myFunc3 = () => { }

    console.log(myVar)
    myFunc()
}
myApp()

//Block Scope VS Function Scope
{
    let x = "anuj";
}
// console.log(x)
//Let and Const can be  access within the block , They are BLOCK Scope 
//Whereas Var is a Function Scope can be access from anywhere
var y = "jhaji"
{
    //var y = "anuj";
    console.log(y)

}
console.log(y)

{
    var y = "jha "
    console.log(y)
    

}



