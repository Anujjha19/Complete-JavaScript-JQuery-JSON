function myFunc1(callback) {
    console.log('Hi myFunc @ 1 ');
    callback();
}
function myFunc2() {
    console.log('Hi myFunc @ 2 ')
}

myFunc1(myFunc2);
/* 
myFunc1(function myFunc3() {
    console.log('Hi myFunc @ 3 ')
}); 
*/

// myFunc1();
// myFunc2();

/* function get2No_and_add (a, b, callback) {
    console.log(a, b);
    callback(a,b);
}
function add2no(a, b) {
    console.log(a + b);
}

get2No_and_add (4, 5, add2no); */

/* Try Catch work 
function get2No_and_add(a, b, callback) {
    if (typeof a === "number" && typeof b === "number") {
        callback(a, b);
    }
    else {
        console.log("Both arguments should be numbers");
    }
}
function add2no(a, b) {
    console.log(a + b);
}
get2No_and_add(4, 5, add2no); */

function get2No_and_add(a, b, callback_onSuccess, callback_onFailure) {
    if (typeof a === "number" && typeof b === "number") {
        callback_onSuccess(a, b);
    }
    else {
        callback_onFailure();
    }
}
function onFail(){
    console.log("FAILED")
}
get2No_and_add(4, "7", (a, b) => {
    console.log(a + b);
}, () => {
    console.log("Both arguments should be numbers");
    onFail();
})
