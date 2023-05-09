// USE Prototype



function createUser(name, email, age, address) {
    const user = Object.create(createUser.prototype); 
    user.name = name;
    user.email = email;
    user.age = age;
    user.address = address;

    return user;
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


const user1 = createUser(' anuj', 'anuj@mail.com', 21, 'Jalandhar Cantt');
const user2 = createUser(' ritik', 'ritik@mail.com', 22, 'Jalandhar');
const user3 = createUser(' shivam', 'shivam@mail.com', 23, 'Phagwara');

console.log(user1);
console.log( user1.about());
console.log(user1.sing());