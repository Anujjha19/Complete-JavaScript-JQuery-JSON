/* let p1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log('First Promise Resolve');
        resolve(10);
    }, 1 * 1000);
});
let p2 = new Promise((resolve, reject) => {

    setTimeout(() => {
        // console.log('Second Promise Resolve');
        console.log('Second Promise Failed');
        reject('Failed');
    }, 2 * 1000);
});
let p3 = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log('Third Promise Resolve');
        resolve(30);
    }, 3 * 1000);
});
var total = 0;
Promise.all([p1, p2, p3]).then((result) => {
    for (var i in result) {
        total += result[i];
    }
    console.log(` All promise resolve ,  Results : ${result}`);
    console.log(` Total : ${total}`);
}
).catch((error) => {
    console.log(` Errors : ${error}`);
}); */
/* Output 
First Promise Resolve
Second Promise Failed
Errors : Failed
Third Promise Resolve
 */

let promiseCall = function (returnData, message) {
    return function (resolve, reject) {
        setTimeout(() => {
            console.log(` the ${message} promise has resolved `);
            resolve(returnData);
        }, returnData * 100);
    }
};

let p4 = new Promise(promiseCall(10, 'First'));
let p5 = new Promise(promiseCall(40, 'Second'));
let p6 = new Promise(promiseCall(50, 'Third'));
let r7 = new Promise(function (resolve , reject) {
    reject( `The r4 Fourth promise Is Rejected `)
  });


var total = 0;
Promise.all([p4, p5, p6 , r7]).then((result) => {
    for (var i in result) {
        total += result[i];
    }
    console.log(` All promise resolve ,  Results : ${result}`);
    console.log(` Total : ${total}`);
}
).catch((error) => {
    console.log(` Errors : ${error}`);
});
/* 
Output 
Errors : The r4 Fourth promise Is Rejected 
the First promise has resolved 
the Second promise has resolved 
the Third promise has resolved 
 */