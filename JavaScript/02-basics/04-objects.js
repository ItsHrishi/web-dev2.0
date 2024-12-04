//  how to create a singelton object :
const tinderUser = new Object();

//  non-singelton object
const tinderUser0 = {};

// console.log(tinderUser, tinderUser0);

// adding data to the object :
tinderUser.id = "123421";
tinderUser.name = "Hrishi";
tinderUser.email = "hrishi@gmail.com";

// console.log(tinderUser);

//  nested objects:

const regularUser = {
  userId: "26373783",
  fullname: {
    userName: {
      firstName: "hrishikesh",
      lastName: "gaikwad",
    },
  },
  email: "hrishi@gmail.com",
};

// accessing nesting objects
// console.log(regularUser.fullname.userName);
// console.log(regularUser["fullname"]["userName"]);

// creating a object from multiple objects :
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { d: 5, e: 6 };

// one way to do it is  here everu thing is added in the first object which acts as a target:
// Object.assign(obj1, obj2, obj3);

// another way of doing it is :
const obj4 = Object.assign({}, obj1, obj2, obj3);

// console.log(obj1, obj2, obj3);
// console.log(obj4);

// opeartoins on object :
console.log(Object.keys(obj4));
console.log(Object.values(obj4));
console.log(Object.entries(obj4));

console.log(tinderUser.hasOwnProperty("userName"));
console.log(tinderUser.hasOwnProperty("email"));
