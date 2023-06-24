/*   Solution Using Object.create for  11.1
( storing Methods in Diff Objects)  */


const UserMethodsAboutIs18 = {
    about: function () {
        return ` ${this.name} is ${this.age} years old.`
    },
    is18: function () {
        return this.age >= 18;
    }
}

function createUser(name, email, age, address) {
    const user = Object.create(UserMethodsAboutIs18); //Prototype Chain
    user.name = name;
    user.email = email;
    user.age = age;
    user.address = address;

    return user;
}

const user1 = createUser(' anuj', 'anuj@mail.com', 21, 'Jalandhar Cantt , Punjab ');
const user2 = createUser(' ritik', 'ritik@mail.com', 22, 'Jalandhar , Punjab ');
const user3 = createUser(' shivam', 'shivam@mail.com', 23, 'Phagwara , Punjab ');

/* Suppose we need to add Hobbies or N METHODS  for each User then again we need  add N-Methods here  UserMethodsAboutIs18  as well as here createUser - To fix this we can use Object.create  { Implemented Below } */

console.log(user1);
console.log(user1.about());

