const obj1 = {
    key1: "V1",
    key2: "V2"
}
// const obj2 = {};
/* Other Way to Create an Empty Object */
const obj2 = Object.create(obj1); // {} // by Doing this we r setting the proto of object2 to object1 
    obj2.key3 = "V3",
    console.log(obj2.key3); //V3



/* agar js ko obj2 mai key1 nai mile then wo khud obj1 k pass ja kr key1 print kr de  if hai warna tab Undefined de  */

//Here obj2 will first check itself then due to { obj1 written in while creating Obj2 } so now will check for obj1
console.log(obj2.key1); //V1 

console.log(obj2)

// __proto__  { dunder }
//Official EC6 [[prototype]] is written
// __proto__ & [[prototype ]] both are same

// But prototype is Different 