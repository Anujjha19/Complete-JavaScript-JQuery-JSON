const persons = {
    name: "anuj",
    age: 21,
    skills: ["C++", "Git & GitHub", "ForntEnd"]
}
console.log(persons); // { name : "anuj", age : 21 }
console.log(typeof persons); //Object 

console.log(persons.name); //anuj
console.log(persons["name"]); //anuj

console.log(persons.skills); //["C++"  , "Git & GitHub" , "ForntEnd"]

//Add key to existing Object 
persons.gender = "male";
persons["loves"] = "gaming";
console.log(persons);
// {
//     name: 'anuj',
//     age: 21,
//     skills: [ 'C++', 'Git & GitHub', 'ForntEnd' ],
//     gender: 'male'
//   }

const key = "email";
const info = {
    name: "anuj",
    age: 21,
    skills: ["C++", "Git & GitHub", "ForntEnd"]
}
// info.key= "anuj123@gmail.com"
info["key"] = "anuj123@gmail.com";
console.log(info);
/* {
    name: 'anuj',
    age: 21,
    skills: [ 'C++', 'Git & GitHub', 'ForntEnd' ],
    key: 'anuj123@gmail.com'
  } */

info[key] = "anuj123@gmail.com";
console.log(info);
/* {
    name: 'anuj',
    age: 21,
    skills: [ 'C++', 'Git & GitHub', 'ForntEnd' ],
    email: 'anuj123@gmail.com'
  } */

//Iterate Objects

const details = {
    name: "anuj",
    age: 21,
    skills: ["C++", "Git & GitHub", "ForntEnd"]
}
for (let key in details) {
    console.log(key);
} /* name age skills */

for (let key in details) {
    console.log(details.key);
} /* 3 * Undefined */

for (let key in details) {
    console.log(details[key]);  /*anuj 21 [ 'C++', 'Git & GitHub', 'ForntEnd' ]*/
    console.log(
        ` ${key} : ${details[key]}`
        /* name: "anuj",
        age: 21,
       skills: ["C++", "Git & GitHub", "ForntEnd"] */
    )
}

console.log(Object.keys(details));

//Computed Properties
const key1 = "obj1";
const key2 = "obj2";
const value1 = "val1";
const value2 = "val2";

const obj = {
    [key1]: value1,
    [key2]: value2,
};

console.log(obj);

// Spread Operator In Objects 

const n1 = {
    key1: "v1",
    key2: "v2",
}
const n2 = {
    key3: "v3",
    key4: "v4",
}
const n1n2a = { ...n1 };
console.log(n1n2a); //{ key1: 'v1', key2: 'v2' }
const n1n2b = { ...n1, ...n2 };
console.log(n1n2b); //{ key1: 'v1', key2: 'v2', key3: 'v3', key4: 'v4' }

const n1n2 = { ...n1, ...n2, key69: "v69" };
console.log(n1n2); // { key1: 'v1', key2: 'v2', key3: 'v3', key4: 'v4', key69: 'v69' }

const abc = { ..."abc" };
console.log(abc); // { '0': 'a', '1': 'b', '2': 'c' }

const arrayC = { ...["I1", "I2"] };
console.log(arrayC); // { '0': 'I1', '1': 'I2' }


// Object De-Structuring 
const band = {
    Language: "English",
    Country: " UK ",
    Formed: "Early 20s",
    Famous: "Indie-Classic-English",
}
// const { Language, Country } = band;
// console.log(Language); //English
// console.log(Country); //UK

const { Language, Country, ...restKeys } = band;
console.log(Language); // English
console.log(Country); // UK
console.log(restKeys); // { Formed: 'Early 20s', Famous: 'Indie-Classic-English' }

// const { Language: var1 , Country: var2  } = band;
// console.log(var1); //English
// console.log(Language); // Error as it changed by var1
// console.log(var2); //UK


const users = [
    { userId: 1, name: "anuj", gender: "male" },
    { userId: 2, name: "ritik", gender: "male" },
    { userId: 3, name: "raj", gender: "male" },

]

/* console.log(users);
for( let user of users){
    console.log(user);
} */

//Nested Destructuring 

// const [user1 , user2 , user3 ] = users ;
// console.log(user1);

/* const [{ name }, , { gender }] = users;
console.log(name); // anuj
console.log(gender);  // male */

// { suppose u want to arraya destructure make array , ab inside that u want from Object so now make Object  }
/* const [{ name }, , { gender }] = users;
console.log(name); // anuj
console.log(gender);  // male */


const [{ name: user1name , userId }, , { gender :user3gender  }] = users;
console.log(user1name); // anuj
console.log(user3gender); // male
console.log(userId); // 1