// Arrow Function


/* 
Arrow Function does not have this  & it takes { this } of its surroundings  a level Upper 
Its this can't be Changed  
*/


const person_1 = {
    name: "Anuj",
    age: 21,
    about: () => {
        console.log(this.name, this.age) //undefined undefined
    }
}


person_1.about();

/*  Short Syntax For above  */


const person_2 = {
    name: "Anuj",
    age: 21,
    about() {
        console.log(this.name, this.age) //undefined undefined
    }
}
person_2.about() //Anuj 21
