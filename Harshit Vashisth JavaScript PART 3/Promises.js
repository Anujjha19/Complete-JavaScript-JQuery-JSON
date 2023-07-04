/* const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = (Math.random());
        if (randomNumber > 0.5) {
            resolve(randomNumber);
        } else {
            reject("Random number is less than or equal to 0.5");
        }
    }, 1000);
});

myPromise
    .then((result) => {
        console.log("Promise resolved with result:", result);
    })
    .catch((error) => {
        console.error("Promise rejected with error:", error);
    });
*/

const bucket = ['coffee', 'rice', 'vegetables', 'salt', 'chips'];

//PRODUCE - CREATE
const myPromise = new Promise((resolve, reject) => {
    if ((bucket.includes('rice')) && (bucket.includes('vegetables')) && (bucket.includes('salt'))) {
        resolve('Fried Rice will be ready soon !! ')
    } else {
        reject('Ingredients Un-available')
    }
});

//CONSUME
myPromise.then((response) => {
    console.log(`Your order has been placed :  ${response}`)
}   // , (error) => console.log(error))
)
    .catch((error) => console.log(error));