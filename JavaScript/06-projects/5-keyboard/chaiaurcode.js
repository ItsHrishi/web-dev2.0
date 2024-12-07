console.log("Project 5");

// const body = document.querySelector("body");
const insert = document.querySelector("#insert");
const newElement = document.createElement("p");
insert.appendChild(newElement);

// body.addEventListener("keypress", function (e) {
//   console.log(e.key);
//   newElement.innerHTML = `the entered key is "${e.key}"`;
// });

// we can do it without using the bosy also :

window.addEventListener("keypress", function (e) {
  console.log(e.key);
  newElement.innerHTML = `the entered key is "${e.key}"`;
});
