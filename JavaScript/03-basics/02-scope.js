// let a = 10;
// const b = 20;
// var c = 30;

//  anything that is under curly braces it is in that scope

// console.log(a);
// console.log(b);
// console.log(c);

if (true) {
  let a = 10;
  const b = 20;
  //   var c = 30;
  //   d = 40; // ******   this is not the good way to declre a variable
}
// console.log(a);
// console.log(b);
// console.log(c); // ******   here we have problem as we are able to print this even out of scope thats  the reason we dont use var for declaring variables
// console.log(d); // ******   same problem here also

// **************** intresting error *************************

//this is allowed
sum1(9, 8);

function sum1(num1, num2) {
  console.log("sum 1 : ", num1 + num2);
}

sum1(8, 9);

// ******  this is not allowed e cannot execute it before the decaration
// sum2(8, 9);

const sum2 = (a, b) => {
  console.log("sum 2 : ", a + b);
};

// allowed execution after teh decleration
sum2(9, 8);
