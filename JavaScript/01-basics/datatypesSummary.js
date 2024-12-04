/* on the basis how the data is stored and accessed the data types are differentiated
majorly there are two primary data types :
1. primitive data type
2. non-primitive data type or reference type 
*/

// primitive data types : String, number, boolean, null, undefined, symbol, Bigint

//Reference type  (non primitive) : Arry, Object, functions

const id = Symbol("123");

const anotherId = Symbol("123");

// console.log(id);
// console.log(anotherId);
// console.log(id==anotherId); // false

// console.log(typeof(id));

array = ["apple", "mango", "watermealon"];
const myObj = {
  name: "hrishi",
  age: 3,
};

const exampleFunc = () => {
  console.log("hello world");
};

console.log(typeof array);
console.log(typeof myObj);
exampleFunc();
console.log(typeof exampleFunc);

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

// so basically in javascript there are two types of memorys
// 1. stack - primitive type
// 2. heap  -  non primitive type

// exampl

let userOne = "hrishi";

let userTwo = userOne;

userOne = "sara";

console.log(userOne);
console.log(userTwo);

const sampleOne = {
  name: "hrisi",
  email: "hrishi@google.com",
};

const sampleTwo = sampleOne;

sampleTwo.email = "email@google.com";

console.log(sampleOne);
console.log(sampleTwo);
