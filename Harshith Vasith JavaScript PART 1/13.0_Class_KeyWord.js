//Class are Fake 
// We cannot Invoke Class Keyword without New Keyword

class CreateUser {
    constructor(name, email, age, address) {
        console.log( "Constructor Called ")
        this.name = name;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    about() {
        return ` ${this.name} is ${this.age} years old.`
    }
    is18() {
        return this.age >= 18;
    }
    sing() {
        return 'la la - lala la la ';
    }
    func(a){
        console.log( ` this is ${a} parameter taken by user `)
    }
}

const user1 = new CreateUser(' anuj', 'anuj@mail.com', 21, 'Jalandhar Cantt');
console.log(user1 )
user1.func(20)