//Promise and setTimeout
function myPromise() {
    return new Promise((resolve, reject) => {
        const value = true;
        setTimeout(() => {
            if (value) {
                resolve();
            } else {
                reject();
            }
        }, 2000)
    }
    )
}
myPromise()
    .then(() => console.log('Resolved'))
    .catch(() => console.log('Reject'))
    .finally((value) => console.log(`Value is Resolved - Rejected   `));

/* //Promise Resolve 
const myPromise= Promise.resolve(5);
myPromise.then( value => console.log( `Value is ${value} `))
.catch

Promise.resolve(5).then( value => console.log( `Value is ${value} `))
.catch

*/

//.then always returns the promise 
// Promise Chaining 

function myPromise() {
    return new Promise((resolve, reject) => {
        resolve('foo')
    }
    )
}
myPromise()
    .then(
        value => {
            console.log('Resolved', value);
            value += '-bar';
            // no return then promise will return but  value will be undefined
            return value; // return Promise.resolve(value)
        }
    ).then(
        value => {
            console.log(value);
        }
    )
    .catch(() => console.log('Reject'))
