// loops to iterate the object :

// forin loop

const myObject = {
  name: "Hrishi",
  age: 18,
  email: "hrishi@google.com",
};

for (const key in myObject) {
  //   console.log(`key : ${key} : and value : ${myObject[key]}`);
}

const programing = ["java", "cpp", "swift", "python"];

// forin loopn on array returns the keys of the array-> the index number

for (const key in programing) {
  //   console.log(key);
  //   console.log(programing[key]);
}
const map = new Map();

map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");

// we cannot iterate the maps using the forin
for (const key in map) {
  console.log(key);
}
