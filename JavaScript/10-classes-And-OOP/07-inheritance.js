//  inheritance

class User {
  constructor(userName) {
    this.userName = userName;
  }

  logMe() {
    console.log(`the user name is : ${this.userName}`);
  }
}

class Teacher extends User {
  constructor(userName, email, password) {
    super(userName);
    this.email = email;
    this.password = password;
  }

  addCourses() {
    console.log(`A new course was added by ${this.userName}`);
  }
}

const teacherOne = new Teacher("urmila", "urmila@gmail.com", "12112");

console.log(teacherOne);
console.log(teacherOne.addCourses());
console.log(teacherOne.logMe());

const userOne = new User("harrish");

console.log(userOne);
console.log(userOne.logMe());

console.log(userOne === teacherOne);

console.log(teacherOne instanceof User);
console.log(teacherOne instanceof Teacher);
console.log(userOne instanceof Teacher);
console.log(userOne instanceof User);
