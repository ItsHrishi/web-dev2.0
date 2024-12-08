//  here we are discusisng about the properyDescriptor :

console.log(Object.getOwnPropertyDescriptor(Math, "PI"));

const movie = {
  name: "tomAndJerry",
  released: "1988",
  watched: 1729,
};

console.log(Object.getOwnPropertyDescriptor(movie, "name"));

for (const i of Object.entries(movie)) {
  console.log(i);
}

Object.defineProperty(movie, "name", {
  writable: false,
  configurable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(movie, "name"));

// now the property of thst object where teh enumerable is set to true cannot be iterated
for (const i of Object.entries(movie)) {
  console.log(i);
}
