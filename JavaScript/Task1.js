let a = 5 + 5 + '3'
console.log(a)
let b = '5' + 5 + 5 //If it start with a string , it will asujme string string ...
console.log(b)

let c = 5 + 5 + '3' + 5 + 4
console.log(c)


function Prime(x) {
    let count = 0;
    for (let i = 1; i <= x; i++) {
        if (x % i == 0) count++;
    }
    if (count == 2) return 1;
    else return 0
}

let x = 11;
let ans = Prime(x);
console.log(ans);


const myFunc = () => {
    console.log(" Hi ");
}

myFunc();

let sum = (m, n) => {
    return m + n;
}
console.log(sum(5, 2));
// -----------------------------

let num = ab => {
    return ab;
}
console.log(100);


