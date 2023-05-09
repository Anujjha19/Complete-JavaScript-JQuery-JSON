/*   Store Methods in Diff Objects    */

//Storing about and is 18 in different Object
const UserMethodsAboutIs18 = {
    about: function () {
        return ` ${this.name} is ${this.age} years old.`
    },
    is18: function () {
        return this.age >= 18;
    }
}

function createUser(name, email, age, address) {
    const user = {}
    user.name = name;
    user.email = email;
    user.age = age;
    user.address = address;

    user.about =UserMethodsAboutIs18.about; //Here we r writing the address , its reference
    user.is18 =UserMethodsAboutIs18.is18;

    return user;
}

const user1 = createUser(' anuj', 'anuj@mail.com', 21, 'Jalandhar Cantt , Punjab ');
const user2 = createUser(' ritik', 'ritik@mail.com', 22, 'Jalandhar , Punjab ');
const user3 = createUser(' shivam', 'shivam@mail.com', 23, 'Phagwara , Punjab ');


console.log( user1.about());
console.log( user3.about());








//Since the about and is18 is same for every user but from Previous way ( Means writing inside the main Object/ Function ) we are making N methods of them which results in wastages of memeory  So we Will store those Methods in Different Objects  


/* method are kind of Function Which are Inside the object  */
