// function :
// a function is a block of code which is used to perform a task which
// will then can be executed without writing the whole black again:
//  need to learn with functions: call stack, meamory management,

function printMyName() {
  console.log("Hrishi");
}

// this is the function reference
// printMyName
// this is how we call a function or execution  :
// printMyName();

function addTwoNumbers(number1, number2) {
  return number1 + number2;
}

console.log(addTwoNumbers(7, 9));

// parameters passing using rest operator:
function calculateCartPrice(val1, val2, ...num) {
  return { val1, val2, num };
}

console.log(calculateCartPrice(200, 300, 400, 500));
