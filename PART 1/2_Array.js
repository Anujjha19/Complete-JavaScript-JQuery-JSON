
let fruits = ["apple", "mango", "banana"];
console.log(typeof fruits)
console.log(Array.isArray(fruits));

fruits.push("grapes");
console.log(fruits)

console.log(fruits.pop())
console.log(fruits)


fruits.unshift("Lichi");
console.log(fruits)

fruits.shift();
console.log(fruits)



// *  Primitive VS Refernce DataTypes

//Primitive DT
let num1 = 10;
let num2 =num1;
console.log( "num1 :" , num1); //10
console.log( "num2 :" , num2); //10

num1++;
console.log( "num1 :" , num1); //11
console.log( "num2 :" , num2); //10

//Reference DT

let arr1 = ["cat" , "dog" , "cow"];
let arr2 = arr1;
console.log( "arr1 :" , arr1); //arr1 = ["cat" , "dog" , "cow"];
console.log( "arr2 :" , arr2); //arr2 = ["cat" , "dog" , "cow"];
arr1.push("BEAR");
console.log( "arr1 :" , arr1); // arr1 : [ 'cat', 'dog', 'cow', 'BEAR' ]
console.log( "arr2 :" , arr2); // arr2 : [ 'cat', 'dog', 'cow', 'BEAR' ]


let arr3 = ["name" , "class"];
// let arr4 = arr3.slice(0);
let arr4 = [].concat(arr3);
console.log( "arr3 :" , arr3);
console.log( "arr4 :" , arr4);
console.log( arr3 === arr4);


//Spread Operator
let array3 = [...arr3 , "roll" , "no"]
console.log( "array 3 :" , array3);


//For Loop

let mynum = ["name" , "class" , "roll" , "no"];
for( let i =0 ; i<mynum.length ;i++){
    console.log(mynum[i]);
}

const myNum1 = [ 1, 2, 3 ,4];
myNum1.push(6); //No errror as it will get push as We r not changing its address in memory;
/* 
// If we do 
myNum1 = [ 7, 8,9]; //Will show error
 */
console.log(myNum1)


const forOf  = [ 1, 2, 3 ,4];


for( let i of forOf){
    console.log(i)
}

for( let i in forOf){
    console.log(i)
    console.log( forOf[i] )
}


//Array Destructuring 

const  deArr1 = [ "value1", "Value2" , "value3" , "value4" ];

const [x , y, z] = deArr1;
console.log(x); //value1
console.log(y); //value2


const [a , , , b] = deArr1;
console.log(a); //value1
console.log(b); //value4

const [p,q , ...remArray] = deArr1;
console.log(p); //value1
console.log(q); //value2
console.log(remArray); // ["Value3" , "value4" ]




const deRemArray = deArr1.slice(1,3);
console.log( deRemArray);  //  ["Value2" , "value3" ]

const newArr = [... "abc"];
console.log(newArr);// [ 'a', 'b', 'c' ]
const newBrr = [... abc];
console.log(newBrr); //ERROR

const newCrr = [... "1234"];
console.log(newCrr); // [ '1', '2', '3', '4' ]
const newDrr = [... 1234];
console.log(newDrr); //ERROR