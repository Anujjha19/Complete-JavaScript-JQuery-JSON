//let num = new Array( 1 ,2,3);
let num = [ 1, 2,3 ];

console.log(Object.getPrototypeOf(num));
console.log(num)

//We can Change the Values of a ProtoType 

function Hello(){
    return ("Hi")
}
Hello.prototype=[]; //Prototype change