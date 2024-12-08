class User {
  constructor(userName, password) {
    this.userName = userName;
    this.password = password;
  }

  get userName() {
    console.log(this._userName);
  }

  set userName(value) {
    this._userName = value;
  }
}

const userOne = new User("happy", "123");

console.log(userOne.userName);

// get set using function :
function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });
  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (value) {
      this._password = value;
    },
  });
}

const chai = new User("chai@chai.com", "chai");

console.log(chai.email);
//  get set using object :
const User = {
  _email: "h@hc.com",
  _password: "abc",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

const tea = Object.create(User);
console.log(tea.email);
