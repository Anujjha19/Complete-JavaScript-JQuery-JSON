console.log("Start");
for (let i = 0; i < 2; i++) {
    console.log("HI Normal Function");
}
function bye() {
    console.log('Bye Function');
}
setTimeout(() => {
    console.log("Inside setTimeout");
}, 2000);
setTimeout(bye, 5000);
console.log("End");


/* Start
HI Normal Function HI Normal Function
End
Inside setTimeout
Bye Function  */


    // The setTimeout function in JavaScript returns an ID that can be used to cancel the timeout before it executes.

    const timeoutId = setTimeout(() => {
    console.log('Timeout executed!');
    }, 2000);
    // It returns an ID, which is stored in the timeoutId variable.

    // If you want to cancel the timeout before it executes, you can use the clearTimeout function and pass in the ID returned by setTimeout. 

    clearTimeout(timeoutId);

