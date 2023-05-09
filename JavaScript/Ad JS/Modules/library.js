// let message = " ES6 Modules ";

//To make it use in Other File use
export let message = " ES6 Modules ";

export function user(){
    console.log( " Function ")
}
export function myname(name){
    return ( ` Hello ${name}`)
}

function ownclass() { console.log('myclass');}

export class test {
constructor() {
    console.log( " Constructor Method")
}
}


// We can write export Only Once This Way

export{ message , user , test };


//Default 
export default function(){

    console.log( " Hello Default ")
}

//Bridge

function bridge (){
    return  `hello`;
}
export {bridge};