let firstName = "anuj"
console.log(firstName[0]);
console.log(firstName.length); //length = 4
// { Spaces also count in Length  ex: "anuj " , Now length = 5 }
console.log(firstName[firstName.length - 1]);


let myName = "  anuj  ";
console.log(myName.length);
console.log(myName);

// { string is immutable its value cant be changed }
// {myName.trim() ; // So this Will give you  new Array 
// }

/* 1  trim()  */
let trimName = myName.trim(); // So this Will give you  new Array 
console.log(trimName);
console.log(trimName.length);

/*  2 toUpperCase() & toLowerCase()  */

let str = " anuj";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
// console.log( str.toLocaleLowerCase());
// console.log( str.toLocaleUpperCase());

/*  3 Slice  */
// { start index , end index }
let slice1 = "Ritik";
let newSlice = slice1.slice(1, 3); //it
let newSlice2 = slice1.slice(0, 4); //Riti
let newSlice3 = slice1.slice(1); //itik
console.log(newSlice)
console.log(newSlice2)
console.log(newSlice3)




let str1 = "anuj"
let str2 = "jha"
let fullName = str1 + " " + str2;

let str3 = "17"
let str4 = "18"
let noConcat = str3 + " " + str4;
console.log(noConcat); //1718
let noConcat1 = Number(str3) + Number(str4);
console.log(noConcat1); //35





let age = 21;
let name = "Anuj Jha";
console.log(`My name is ${name} and my age is ${age} .`)




let myNum = 123;
console.log(myNum);
console.log(Number.MAX_SAFE_INTEGER); //No of Integer we can Store

let myNum_toBigInt = BigInt(123456789121215455);
console.log(myNum_toBigInt);
console.log(Number.MAX_SAFE_INTEGER); //No of Integer we can Store



let num3 = "4";
let num4 = 4;
console.log(num3 == num4) //True
console.log(num3 === num4) //False



let num5 = "4";
let num6 = 4;
console.log(num5 != num6) //False
console.log(num5 !== num6) //True



let his_age = 17;
if (his_age < 18) {
    console.log(" He Can't Vote ")
} else {
    console.log(" He Can Vote ")
}



let roll = 5;
/* let names;
if( roll >= 5){
    names="Above 5 Roll No "
}else{
    names="Below 5 Roll No "
}
 */
let names = roll >= 5 ? "Above 5 Roll No " : "Below 5 Roll No "
console.log(names);





let userGuess = '6';
let winningNo = 20;
//let userGuess1 = prompt("Guess a No : ") //Prompt will give take value  in string
userGuess = Number(userGuess)
if (userGuess === winningNo) {
    console.log("Correct userGuess")
}
else {
    if (userGuess < winningNo) {
        console.log("Wrong userGuess too LOW ! ")
    } else {
        console.log("Wrong userGuess too HIGH ! ")

    }
}




let day = 7;
switch (day) {

    case 1:
        console.log("SunDay");
        break;

    case 2:
        console.log("MonDay");
        break;

    case 3:
        console.log("TuesDay");
        break;

    case 4:
        console.log("WednesDay");
        break;

    case 5:
        console.log("ThursDay");
        break;

    case 6:
        console.log("FriDay");
        break;

    case 7:
        console.log("SaturDay");
        break;
    default:
        console.log("Only 7 days in a Week ")
}




let num = 0;
let sum = 0;
while (num <= 100) {
    sum += num;
    num++;
}
console.log(sum);





for (let i = 0; i < 10; i++) {
    if (i == 4) break;
    console.log(i);

}
for (let i = 0; i < 10; i++) {
    if (i == 4) continue;
    console.log(i);

}



let i = 10;
do {
    console.log(i);
    i++;
} while (i <= 9);