//  static methods where we are not allowing the methods to be accessed by any other than the class itself

class User {
  constructor(userName, password, id) {
    this.userName = userName;
    this.id = id;
    this.password = password;
  }

  // static varible declared
  static code = "happe";

  static createId() {
    // function that can be only accessed by the class it self
    return "1231";
  }
}

const userOne = new User("happy", "happy@gmail.com", "1231");

console.log(userOne.userName);
console.log(userOne.createId()); //we cannot access
