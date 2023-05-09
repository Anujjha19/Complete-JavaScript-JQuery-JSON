/* 
function* generateit1() {
    console.log('First');
    yield 'Yield 1'
    console.log("Second");
    yield 'Yield 2'
}
let g = generateit1();
console.log(g);
console.log(g.next());

//Output 

Object [Generator] {}
First
{ value: 'Yield 1', done: false } 
*/

/* function* generateit2() {
    yield 'Yield 1'
    yield 'Yield 2'
    yield 'Yield 3'
}
let h = generateit2();
console.log(h.next());
h.next();
console.log(h.next().value);

//Output
{ value: 'Yield 1', done: false }
{ value: 'Yield 3', done: false } */

function* generateit2() {
    yield 'Yield 1'
    yield 'Yield 2'
    yield 'Yield 3'
}

let h = generateit2();
for (let value of h) {
    console.log(value);
/* 
Yield 1
Yield 2
Yield 3 
*/
}

console.log(h.next());
h.next();
console.log(h.next());

