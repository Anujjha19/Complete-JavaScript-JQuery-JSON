
function friedRice() {
    const bucket = ['coffee', 'rice', 'vegetables', 'salt', 'chips'];

    return new Promise((resolve, reject) => {
        if ((bucket.includes('rice')) && (bucket.includes('vegetables')) && (bucket.includes('salt'))) {
            resolve('Fried Rice will be ready soon !! ')
        } else {
            reject('Ingredients Un-available')
        }
    });
}

friedRice.then(
    (response) => {
        console.log(`Your order has been placed :  ${response}`)
    }
)
    .catch((error) => console.log(error));