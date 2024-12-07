function multipleOf5(num) {
  return num * 5;
}

multipleOf5.power = 2;

console.log(multipleOf5(2));
console.log(multipleOf5.power);
console.log(multipleOf5.prototype);

// creating a prototype of our own!!

function CreateUser(userName, email, age) {
  this.userName = userName;
  this.email = email;
  this.age = age;
}

CreateUser.prototype.increment = function () {
  this.age++;
};

const userOne = new CreateUser("hrishi", "hrishi@gmail.com", 21);

const userTwo = new CreateUser("Hermonie", "hermonie@google.com", 21);

userOne.increment();
console.log(userOne);
console.log(userTwo);
