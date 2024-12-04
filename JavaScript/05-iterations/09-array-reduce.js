//  reduce function return sthe reduced value
// it is used to get the single value after processing the whole arrar:

// example:

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const reducedVal = nums.reduce(function (accumulator, currentValue) {
  //   console.log(accumulator);
  return accumulator + currentValue;
}, (initialValue = 0));

//  same thing in arrow function :

const reducedVal2 = nums.reduce((accumulator, currentValue) => {
  //   console.log(accumulator);
  return accumulator + currentValue;
}, (initialValue = 0));

console.log(reducedVal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);
