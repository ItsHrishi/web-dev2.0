//  classi senabled after the es6 before the class was not availabke in javascript

//  siple user class in js with properties and methods

class User {
  constructor(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
  }

  encryptpassword() {
    return `${this.password.toUpperCase()}1221`;
  }
}

const userOne = new User("happy", "happy@gmail.com", "12345kjsn");

console.log(userOne);

// behind thesceens working of a class :

function CreateUser(userName, email, password) {
  this.userName = userName;
  this.email = email;
  this.password = password;
}

CreateUser.prototype.encryptpassword = function () {
  return `${this.password.toUpperCase()}1221`;
};

const userTwo = new CreateUser("ironMan", "ironman@gmail.com", "1221");

console.log(userTwo);
