class Animal { 
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

class Dog extends Animal{
    
    constructor(name , age , color , speed ){

        super(name , age) //Parent Class ko Refer Kr Raha hai
        this.color=color;
        this.speed=speed;
    }
    run(){
        return ` ${this.name} is running with a speed of ${this.speed} km/hr . `
    }


}
const myDog = new Dog('Tommy' , 3 , 'Brown_Musk_White' , 20);
console.log(myDog);
console.log(myDog.run());