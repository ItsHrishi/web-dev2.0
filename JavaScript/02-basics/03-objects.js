// singelton object -> created only with cunstructor
// Object.create

//object literals:

// Storing a symbol
const mySym = Symbol("key1");

const jsUser = {
  name: "hrishi",
  "full name": "Hrishikesh S G",
  [mySym]: "my_key1",
  age: 23,
  email: "ghrishikesh77@gamil.com",
};

// to access the object we can :

// console.log(jsUser.name);
// // or
// console.log(jsUser["full name"]);
// //or
// console.log(jsUser["email"]);

// // Accessing the Symbol-keyed property
// console.log(jsUser[mySym]); // string -> the property of vaue!!

jsUser.greetings = function () {
  console.log("hello 1");
};
jsUser.greetings2 = function () {
  console.log("hello 1");
};

// storing a function as value and calling it again!!
jsUser.greetings();
// this freezes the object and
console.log(jsUser.greetings2());
// this freezes the object and no changes can be made, no errors are thrown when we are trying to change
Object.freeze(jsUser);
