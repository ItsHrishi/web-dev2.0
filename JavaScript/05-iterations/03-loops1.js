// for of loop

const cities = ["hyderabad", "chennai", "pune"];

for (const city of cities) {
  //   console.log(city);
}

//  maps used to store key value pair, do not contain duplicate values

const map = new Map();

map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");

console.log(map);

//  for loop with destructuring of array :
for (const [key, value] of map) {
  console.log(key, " :-> ", value);
}

//  checking if objects are iteratable
const myObject = {
  name: "Hrishi",
  age: 18,
};

// objects are not itertable
// for (const element of myObject) {
//   console.log(element);
// }
