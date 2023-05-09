//Constructor Function
function CreateUser(name, email, age, address) {
    //const user = Object.create(createUser.prototype); 
    this.name = name;
    this.email = email;
    this.age = age;
    this.address = address;

    //return user;
}

console.log(CreateUser.prototype)


CreateUser.prototype.about = function () {
    return ` ${this.name} is ${this.age} years old.`
};
CreateUser.prototype.is18 = function () {
    return this.age >= 18;
}
CreateUser.prototype.sing = function () {
    return 'la la - lala la la ';
}


const user1 = new CreateUser(' anuj', 'anuj@mail.com', 21, 'Jalandhar Cantt');
const user2 = new CreateUser(' ritik', 'ritik@mail.com', 22, 'Jalandhar');
const user3 = new CreateUser(' shivam', 'shivam@mail.com', 23, 'Phagwara');

for (let key in user1 ){
    //console.log(key);  //  giving all key including the prototype 
    
    if( user1.hasOwnProperty(key)){ // will not give the prototype key 
        console.log(key);
    }
}

