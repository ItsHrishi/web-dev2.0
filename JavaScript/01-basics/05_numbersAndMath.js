// random values :
const tempNumber = Math.random();
console.log(tempNumber);
console.log(tempNumber * 10 + 1);
console.log(Math.floor(tempNumber * 10) + 1);

// thisis the function that will give us teh random value
// which will be random and will be between the desired length

const min = 1;
const max = 30;

const numb = Math.floor(tempNumber * (max - min + 1) + min);
console.log(numb);
