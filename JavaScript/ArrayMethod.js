//Spread Operator 
const arr= [1,2,3];
const newArr =[ ...arr , 4];
console.log(newArr);

//Rest Operator

const filter =( ...args) => {
    return args.filter( el => el === 1);
}

console.log(filter(1,2,3));
