
let number = [100, 200, 300];

let iteration = number[Symbol.iterator]();

console.log(iteration.next());
console.log(iteration.next());
console.log(iteration.next());
console.log(iteration.next());
/* 
{ value: 100, done: false }
{ value: 200, done: false }
{ value: 300, done: false }
{ value: undefined, done: true } 
*/

let iter = number[Symbol.iterator]();

(iter.next());
console.log(iter.next().value);
console.log(iter.next());
/*

200
{ value: 300, done: false } 
*/

//For long Values
let longIter = number[Symbol.iterator]();
let result = (longIter.next());

while (!result.done) {
    console.log(result.value);
    result = (longIter.next());
}    /* 100   200   300 */

let str = "Apple ";
let strIter = str[Symbol.iterator]();
let result2 = (strIter.next());

while (!result2.done) {
    console.log(result2.value);
    result2 = (strIter.next());
}

for (let char of str) {
    console.log(char);
}

/* 
A
p
p
l
e */

//Creting own Iterator
function numsIterator(arr) {
    var nextNum = 0;
    return {
        next() {

            if (nextNum < arr.length) {
                return {
                    value: arr[nextNum++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }
        }
    }
}
let nums = [100, 200, 300];

let numOwn = numsIterator(nums);

console.log(numOwn.next());
console.log(numOwn.next());
console.log(numOwn.next());
console.log(numOwn.next());

/* 
{ value: 100, done: false }
{ value: 200, done: false }
{ value: 300, done: false }
{ done: true } 
*/
