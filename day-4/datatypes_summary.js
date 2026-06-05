//primitive

//7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
 
const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId)
const bigNumber = 3423434342554634534356535n

//Reference (Non Primitive)

//Array, Object, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name:"swamini",
    age:22,
}

const myFunction = function(){
    console.log("hello world");
    
}

console.log(typeof anotherId);


