/* let complete = true;

let prom = new Promise(function (resolve, reject) {
    if (complete) {
        resolve("I am successfull");
    }
    else {
        reject("I am Failed");
    }
});

console.log(prom); */

function prom(complete) {
    return new Promise(function (resolve, reject) {
        console.log("Fetching Data , Please Wait ");

        setTimeout(() => {
            if (complete) {
                resolve("I am successfull");
            }
            else {
                reject("I am Failed");
            }
        }, 1000)
    });
}
let onfulfilment = (result) => {
    console.log(result)
}
let onrejection = (error) => {
    console.log(error)
}

prom(true).then(onfulfilment);
prom(true).catch(onrejection);

// prom(false).then(onfulfilment).catch(onrejection); 
/* 
prom(false).then((result) =>{
    console.log(result)}).catch((error) =>{
        console.log(error)}); 
 */


