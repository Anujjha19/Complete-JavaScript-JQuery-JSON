//Create Function to create Multiple Objects 

const user1 = {
    name: "anuj",
    email: "anuj@gmail.com",
    age: 21,
    address: " H.No 19 , Jalandhar Cantt , Punjab ",
    about() {
        return ` ${this.name} is ${this.age} years old.`
    },
    is18() {
        return this.age >= 18;
    }
}
/* 
const aboutUser1 = user1.about();
console.log(aboutUser1); */

/* Suppose We Want 'N' users , then how many times we will write so we will create a fuction   
That Function will take all Parameters and Create a  Object ,
then will add key value pair ,
And will return the object
*/

function createUser(name, email, age, address) {
    const user = {}
    user.name = name;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function () {
        return ` ${this.name} is ${this.age} years old.`
    };
    user.is18 = function () {
        return this.age >= 18;
    }
    return user;
}

const user11 = createUser('anuj' , 'anuj@mail.com' , 21 , 'Jalandhar Cantt , Punjab ');
console.log(user11)
//console.log(user11.is18())

/* method are kind of Function Which are Inside the object  */