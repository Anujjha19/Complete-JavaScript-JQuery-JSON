class Animal { //Parent Base Class

    constructor(name,age){
        this.name = name ;
        this.age = age ;
    }
    eat(){
        return ` ${this.name} is ${this.age} years older , so is Eating Very Less / Very More `
    }
    isVeryCute(){
        return this.age <= 1;
    }
    isCute(){
        return true;
    }
}
const animal1 = new Animal('TOM' , 2);
console.log(animal1);
console.log(animal1.eat());
console.log(animal1.isVeryCute());
console.log(animal1.isCute());

/* //Create a another Class as Dog 
class Dog {
    constructor(name,age){
        this.name = name ;
        this.age = age ;
    }
    eat(){
        return ` ${this.name} is ${this.age} years older , so is Eating Very Less / Very More `
    }
    isVeryCute(){
        return this.age <= 1;
    }
    isCute(){
        return true;
    }
}
const myDog = new Dog('Tommy' , 3);
console.log(myDog); */

//This issues of creating a Multiple Class can be solved using Extends i,e Inheritace also we can add more properties to second class if needed 

class Dog extends Animal{ // Derived Sub Class

}
const myDog = new Dog('Tommy' , 3);
console.log(myDog);