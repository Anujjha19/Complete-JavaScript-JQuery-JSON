//New Keyword

function creatingUsers( name , age ){
    this.name= name ;
    this.age=age;
}
creatingUsers.prototype.about = function () {
    return ` ${this.name} is ${this.age} years old.`
};

const User1 = new creatingUsers("anuj" , 21 );
/* 
    Creates an Empty Object , refer by this . /  In empty project we add the key values pair 
    return this i.e Empty object
    It itself creates the chain i.e set the relation between prototype and __proto__ i.e to Object 
*/
console.log(User1);





/* ------------------------------------------------------  */


//Constructor Function
function createUser(name, email, age, address) {
    //const user = Object.create(createUser.prototype); 
    this.name = name;
    this.email = email;
    this.age = age;
    this.address = address;

    //return user;
}

console.log(createUser.prototype)


createUser.prototype.about = function () {
    return ` ${this.name} is ${this.age} years old.`
};
createUser.prototype.is18 = function () {
    return this.age >= 18;
}
createUser.prototype.sing = function () {
    return 'la la - lala la la ';
}


const user1 = new createUser(' anuj', 'anuj@mail.com', 21, 'Jalandhar Cantt');
const user2 = new createUser(' ritik', 'ritik@mail.com', 22, 'Jalandhar');
const user3 = new createUser(' shivam', 'shivam@mail.com', 23, 'Phagwara');

console.log(user1);
console.log( user1.about());
console.log(user1.sing());

/* To make Sure the developer know to create user using new so we will keep name starting by Capital Letter  
function CreateUser (){}

const user3 = new CreateUser ;
*/