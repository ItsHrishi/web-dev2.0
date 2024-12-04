//  the for each loop does not reaturn anything

// example:

const coding = ["java", "cpp", "pythin", "ruby"];

const forEachReturnValue = coding.forEach((item) => {
  return item;
});

// the op is undefined!!
// console.log(forEachReturnValue);

// filter function on array:

// finter function returns the value, when the condition is satisfied:
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// no thing will happen as we are no doing anuthing with the values
nums.filter((nums) => nums > 4);

const numbFilter = nums.filter((nums) => nums > 4);

//  we need to mention return when the curly braces are there
const numbFilter2 = nums.filter((nums) => {
  return nums > 4;
});
console.log(numbFilter);
