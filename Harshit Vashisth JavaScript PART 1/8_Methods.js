/*       Methods       */
/* 
Function Inside Objects 

*/


const student = {
    name: "anuj",
    age: 21,
    about: function () {
        console.log(this) // Print Entire Student object 
        console.log(` Student name is ${this.name} & his age is ${this.age} `)
    },
}
console.log(student.about) // [Function: about]
student.about() // Student name is Anuj & his age is 21




function personInfo() {
    console.log(` Person Info :  Name is ${this.name} & his age is ${this.age} `)
}

const person1 = {
    name: "anuj",
    age: 21,
    about: personInfo,
}

const person2 = {
    name: "raj",
    age: 20,
    about: personInfo,
}

person1.about();
person2.about();
/*
    Person Info :  Name is anuj & his age is 21 
    Person Info :  Name is raj & his age is 20 
*/

/* 
Sirf
console.log(this); // Will print Entire window Object 
console.log(window); // Will print Entire window Object { same Meaning }
*/
