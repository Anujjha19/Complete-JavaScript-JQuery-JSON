import {message , user , myname , test } from " ./library.js"


console.log(message); 

user();
console.log(myname( " anuj"));

//Object for Test Name Class
let a = new test();

//To use name as different name , This we called " Alice Name "
import {message , user , myname as myname , test } from " ./library.js"
console.log( myname( "anuj"));


//To import file all  at once
import library, * as name from  "./library.js"

// To call Default 
import { default as name } from "./library.js"
name();

OR 

import name from "./library.js"
name();

//Importing user from Bridge File
import { bridge } from "./bridge.js";
