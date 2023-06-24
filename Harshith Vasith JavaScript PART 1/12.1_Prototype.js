/* ProtoType */
// It is Just a Object 
function hello() {
    console.log('Hello')
}
        /* // In JS its a Function ===> fuction  + Object
        console.log(hello.name); // name Property - Tells the Function Name 
        We can add our own Properties inside a Function

        hello.myOwnProperty = "Very Unique = myOwn Property ";
        console.log(hello.myOwnProperty); */

        //More Useful Properties Provided by Function
        // when we make a function it gives a kind of FREE SPACE  like a {} emptyObject which we called it as ProtoType 

        //Only FUNCTION provides the ProtoType Property 

console.log(hello.prototype); // {}

hello.prototype.abc = 'abc';
hello.prototype.func = function(){
    return ('Function in  protoType ')
}
console.log(hello.prototype);