class student {

    //methods 
    message() {
        console.log(" Hi Anuj  ");
    }


    hello() {
        console.log(` Bye ${this.myname} Your Age Is : ${this.myage}`)
    }

    /* constructor(){
        //Property Name
        let name;
        console.log('Constructor Function')
    } */

    constructor(name, age) {
        this.myname = name;
        this.myage = age;
        console.log("Constructor Function")
    }
}

let a = new student("Anuj Jha", 21); //Object
let b = new student("Ritik  Singh ", 22); //Object

// a.name="anuj jha"

a.message();
a.hello()
b.hello()

