// lets take two arrays for sample :

marvel_heros = ["iron-man", "hulk", "captain-america"];
dc_heros = ["batman", "flash", "aquaman"];

// this function adds the array to the initial array -> not a good way to add two arrays
// marvel_heros.push(dc_heros);

// console.log(marvel_heros);

// this function return san array with combining the elements without just add the entire array at the last position
new_heros = marvel_heros.concat(dc_heros);

// console.log(new_heros);

// this the method of combining two arrays using the spread operator
all_new_array = [...marvel_heros, ...dc_heros];
// console.log(all_new_array);

//  if we need to just get the arry withoyt the nestingarrays :

arr1 = [
  1,
  2,
  3,
  [4, 5, 6, [7, 8, 9, 10], [9, 11, 10, [92, 27, 38, 18]]],
  19,
  18,
  17,
  [1, 2, 3, 1],
];

flatexample = arr1.flat(Infinity);
// console.log(flatexample);

console.log(Array.isArray("hrishi"));
console.log(Array.from("hrishi"));
console.log(Array.from({ name: "hrishi" })); // this is a trickey function just returne the array in specific scnerios or
// else returns empty array []

console.log(Array.of(100, 200, 300));
