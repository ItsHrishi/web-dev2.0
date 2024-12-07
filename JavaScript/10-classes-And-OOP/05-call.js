//  when try to set any variable using another function here is this problem arrises to solve thst we use call
//  example :

//  in the belo scnerio we have a method that sets the property of its own using another method but techinically this is not possible
// to solve thsi we use the call property

function SetUserName(userName) {
  //   complex DB call
  this.userName = userName;
}

function CreateUser(userName, age, email) {
  SetUserName(userName);
  this.age = age;
  this.email = email;
}

const happy = new CreateUser("happy", 14, "happy@gmail.com");

// here the user name wont be there ->
console.log(happy);

//  problem solved here :

function SetUserName2(userName) {
  //   complex DB call
  this.userName = userName;
}

// we need to send this in the arguments here, passing the reference
function CreateUser2(userName, age, email) {
  SetUserName.call(this, userName);
  this.age = age;
  this.email = email;
}

const ironMan = new CreateUser2("ironMan", 23, "ironMan@gmail.com");
console.log(ironMan);
