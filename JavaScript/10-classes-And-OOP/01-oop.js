const user = {
  username: "hrishi",
  email: "hrishi@google.com",

  getuserDetails: function () {
    console.log(`got user details ${this.username}`);
    console.log("this inside teh object", this);
  },
};

// console.log(user);
// console.log(user.getuserDetails());
// console.log(this);

// to get the current context of the object "this" keyword is used
//  this keyword tells the reference of the object

// constructor function : "new"

// example :

// const promise = new Promise();
// const date = new Date();

// create a user defined function

function User(userName, loginCount, isLoggedin) {
  this.userName = userName;
  this.loginCount = loginCount;
  this.isLoggedin = isLoggedin;

  this.greetings = function () {
    console.log(`welcome ${this.userName}`);
  };
  //   this is defalut for a user defined function
  return this;
}

const userOne = new User("happy", 10, true);
const userTwo = new User("ironMan", 100, false);

// console.log(userOne);
// console.log(userTwo.greetings());

console.log(userTwo.constructor);
