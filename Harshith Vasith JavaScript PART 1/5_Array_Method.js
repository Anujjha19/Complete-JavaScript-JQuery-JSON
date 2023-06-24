//Imp Array Method 

//FOR EACH
const nums = [4, 2, 5, 6, 5];
function multiplyby2(num, index) {
    console.log(`index is ${index} , and the Number is ${num} *2 = ${num * 2} `) // index is 0 , and the num is 4 *2 = 8 
}
multiplyby2(nums[0], 0);

nums.forEach(multiplyby2)
/* nums.forEach(function (num, index) {
    console.log(`index is ${index} , and the num is ${num} *2 = ${num * 2} `) // index is 0 , and the num is 4 *2 = 8 
}) */
/* 
index is 0 , and the num is 4 *2 = 8
index is 1 , and the num is 2 *2 = 4
index is 2 , and the num is 5 *2 = 10
index is 3 , and the num is 6 *2 = 12
index is 4 , and the num is 5 *2 = 10 
*/


const userss1 = [
    { name: "anuj", age: 20 },
    { name: "ritik", age: 21 },
    { name: "raj", age: 19 },
    { name: "ayush", age: 22 },
]

/* userss1.forEach(function (users1) {
    console.log(users1.name);
}) */
userss1.forEach((users1) => {
    console.log(users1.name);
})
/* 
anuj
ritik
raj
ayush */

//MAP method

// { will always creates a new Array }

const numbers = [1, 2, 3, 4, 5];
const square = function (number) {
    return number * number;
}
//Function Outside 
const squareNumber = numbers.map(square);
console.log(squareNumber);  // [ 1, 4, 9, 16, 25 ]

const sqr = function (number) {
    console.log(number * number)
}
const sqrNumber = numbers.map(sqr); //[ undefined, undefined, undefined, undefined, undefined ]  Because map is not returning anything 
console.log(sqrNumber);

//Function Inside 

const digits = [1, 2, 3, 4, 5];
/* const newDigits = numbers.map(function(digit){
    return digit * digit;
}); */
const newDigits = numbers.map((digit, index) => {
    return `${digit * digit} at index: ${index}`;
});
console.log(newDigits);  // [ 1, 4, 9, 16, 25 ]

//Realistic Example 

const users = [
    { name: "anuj", age: 20 },
    { name: "ritik", age: 21 },
    { name: "raj", age: 19 },
    { name: "ayush", age: 22 },
]
const newUser = users.map((user) => {
    return user.name;
})
console.log(newUser) // [ 'anuj', 'ritik', 'raj', 'ayush' ]




//FILTER
//Creates a New Array , and in that it will store either all only true or only false values
//Always return either TRUE or FALSE i.e BOOLEAN Values 


const arr = [1, 2, 3, 4, 5];
const cbisEven = function (num) {
    return num % 2 === 0;
}
const EvenNo = arr.filter(cbisEven);//Here Only we can set the CallBack or Arrow Function
console.log(EvenNo) // [ 2, 4 ]

//REDUCE
//Giving total i.e one  Value from Array
const brr = [1, 2, 3, 4, 5];

const sum = brr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})
/* const sum = brr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 100 )  Passing Initial Valueto accumulator */

console.log(sum) //15
/*
accumulator  ,  currentValue  - return  
    1        ,      2         -  3 
    3        ,      3         -  6 ( accumulator becomes  return value )
    6        ,      4         -  10 
    10        ,     5         -  15 { final ans }
 */

//Real Example
const userCart = [
    { name: "Mobile", id: "1", price: 12000 },
    { name: "Laptop", id: "2", price: 50000 },
    { name: "Tablet", id: "3", price: 30000 },
]

const CartTotal = userCart.reduce((totalPrice, currentProductPrice) => {
    return totalPrice + currentProductPrice.price;
}, 0)
console.log(CartTotal) //92000
/*
totalPrice       ,  currentProductPrice  - return  
    0            ,      12000            -  12000 
    12000        ,      500000           -  62000
    62000        ,      30000            -  92000 
 */


//SORT Method 
// Changes / Modified the Original Array

const crr = [5, 9, 1200, 400, 3000];
crr.sort();
console.log(crr) //[ 1200, 3000, 400, 5, 9 ]   
/* 
array.sort();
JS Sort the array By thinking it as " string by knowing their ASCI value " not as numbers

const drr = ["mohan","Raj","ayush", "lucky" ,"ABC", "anuj"];
drr.sort();
console.log(drr) 
//[ 'ABC' , 'Raj' , 'anuj', 'ayush', 'lucky', 'mohan' ] -{ will First store the capital values the as sorting way} 
*/
const Sort_We_desired = [5, 9, 1200, 400, 3000];
Sort_We_desired.sort((a, b) => {
    return a - b;
});
// Sort_We_desired.sort((a, b) => a - b);
console.log(Sort_We_desired) //[ 5, 9, 400, 1200, 3000 ]   


const products = [
    { name: "Mobile", id: "p1", price: 12000 },
    { name: "Laptop", id: "p2", price: 4000 },
    { name: "Tablet", id: "p3", price: 30000 },
    { name: "Headphone", id: "p3", price: 1000 },
    { name: "Charger", id: "p3", price: 20000 },
]
const newProducts = products.slice(0).sort((a, b) => (a.price - b.price));
console.log(newProducts)
/*
[
  { name: 'Headphone', id: 'p3', price: 1000 },
  { name: 'Laptop', id: 'p2', price: 4000 },
  { name: 'Mobile', id: 'p1', price: 12000 },
  { name: 'Charger', id: 'p3', price: 20000 },
  { name: 'Tablet', id: 'p3', price: 30000 }
] 
 */


//Find Method 

//Find Will give - Only First Occurrence of 
const findArray = ["Hello", "cat", "dog", "lion"]
const ans = findArray.find((str) => {
    return str.length === 3;
})
console.log(ans);

//Real Example

const newUser1 = [
    { id: 1, name: "Anuj" },
    { id: 2, name: "Anish" },
    { id: 3, name: "Kamlesh" },
    { id: 4, name: "Mahesh" },
]
const ans1 = newUser1.find((user) => user.id === 3);
console.log(ans1); //{ id: 3, name: 'Kamlesh' }

//Every Method
//Call Back  Will Give either true or false
// Every  Will Give either true or false when all the element satisfies it 

const array1 = [2, 4, 6, 8, 10]

const ans2 = array1.every((num) => num % 2 === 0);
console.log(ans2);
// array1 = [2,4,6,8,10] == true
// array1 = [2,4,5,8,10] == false


const cartItems = [
    { id: 1, name: "Anuj", price: 12000 },
    { id: 2, name: "Anish", price: 15000 },
    { id: 3, name: "Kamlesh", price: 20000 },
    { id: 4, name: "Mahesh", price: 30000 },
]
const ans3 = cartItems.every((cartItem) => cartItem.price < 20000);
console.log(ans3); //False


//Some Method
// { Is any No is Even }

const array2 = [2, 4, 6, 8, 10]

const ans10 = array2.every((num) => num % 2 === 0);
console.log(ans10); //True

//Fill Method
// { values , start , end }  -- Changes the Original Array
const newArr = new Array(5).fill(-1);
console.log(newArr); //[ -1, -1, -1, -1, -1 ]

const newArr1 = [-1, -1, -1, -1, -1];
newArr1.fill(0, 2, 5);
console.log(newArr1); //[ -1, -1, 0, 0, 0 ]

//Splice Method
// { start , delete , insert }  -- Changes the Original Array
const newBrr = ['item1', 'item2', 'item3'];

//newBrr.splice(1,1);//[ 'item1', 'item3' ] -{ the deleted item can return the deleted item }

// newBrr.splice(1,1,'item splice'); //[ 'item1', 'item splice', 'item3' ]

//newBrr.splice(1,0,'item splice');//[ 'item1', 'item splice', 'item2', 'item3' ]

newBrr.splice(1, 2, 'item splice 1', "item splice 2");//[ 'item1', 'item splice 1', 'item splice 2' ]

// newBrr.splice(1,2,'item splice 1',"item splice 2" , 'item'); //[ 'item1', 'item splice 1', 'item splice 2', 'item' ]
console.log(newBrr); 