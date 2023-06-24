class Person {
    constructor( fname ,lname , age ){
        this.fname= fname ;
        this.lname= lname ;
        this.age= age ;
    }

    //Static Methods
    static classInfo(){
        return 'This is a Person CLass Using STATIC '
    }

    //Static Properties 
    static desc = 'Static Property'

    //Getters 
    get fullName (){
        return ` ${this.fname} ${this.lname} `
    }

    set fullName( fullName ){
        const [fname, lname ]= fullName.split(" ");
        this.fname= fname ;
        this.lname= lname ;
    }

    eat(){
        return ` ${this.fname} is ${this.age} years older , so is Eating Very Less / Very More `
    }
    isVeryCute(){
        return this.age <= 1;
    }
    isCute(){
        return true;
    }
}


const person1 = new Person ( "anuj" , "jha" , 21 )
console.log(person1.eat());

// person1.classInfo()  ERROR 
console.log(Person.classInfo());
console.log(Person.desc );