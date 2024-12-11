//   basic array operations :

const myArray = new Array(0, 1, 2, 3, 4, 5, 6);

// this adds the values at the end of the array
myArray.push(7);
myArray.push(8);
myArray.pop();

//  here the numbers are added to the start, the whole array is shifted so that the number can beadded to start
// works same as push and pop but at the start of teh array
// console.log("before unshift : ", myArray);
myArray.unshift(-1);
myArray.shift();
// console.log("unshift : ", myArray);

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(3));

const newArray = myArray.join();
// console.log(myArray);
// console.log(newArray, typeof newArray);

// array operations

console.log("A ", myArray);

//  this will not manipulate the original array,
let arr2 = myArray.slice(1, 3);
console.log("B ", myArray);
console.log("C ", arr2);

// splice manipulates the original array
let arr3 = myArray.splice(1, 3);
console.log("D ", myArray);
console.log("E ", arr2);
