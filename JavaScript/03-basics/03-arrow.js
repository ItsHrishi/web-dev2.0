//  the object under the global state(this) of the browser is window, we can see "this" by just -> console.log(this);
const user = {
  name: "hrishi",
  age: "19",
  email: "hrisih@gmail.com",
  welcomeMessage: function () {
    console.log(`welcode ${this.name}`);
    console.log(this);
  },
};

//just checking hat is under this :
// console.log(this);

// check what is "this" when updated inside the function :
// user.welcomeMessage();

// user.name = "herminie";
// user.welcomeMessage();

// what is inside the this inside nornaml function

function temp() {
  const temprature = "11 deg Celcius";
  console.log(`this is a temporary function`);
  console.log(this);
  // the below code will not work inside the function, it will in object!!
  console.log(this.temprature);
}

// the "this" will not work for arrow function also : ->
const temp2 = () => {
  const userName = "hermonie";
  console.log(this.userName);
  console.log(this);
};

// another ays to write the function :

const add0 = (num1, num2) => {
  return num1 + num2;
};

const add1 = (num1, num2) => num1 + num2;

// the paranthesis is used to return the object
const add2 = (num1, num2) => ({ sum: num1 + num2 });
