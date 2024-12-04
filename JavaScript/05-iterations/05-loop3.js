//  iterating over the arrays :

const coding = ["cpp", "java", "python", "javaScript"];

// the use of forEach loop on the array
coding.forEach(function (item) {
  //   console.log(item);
});

// same thing using the arrow function
// the for each function takes a call back function where the parameters are the element in the array,
// index numer of that element, and the whole array
coding.forEach((item, index, array) => {
  console.log(item, index, array);
});

// iterating array of objects

const language = [
  {
    language: "cpp",
    fileExtension: ".cpp",
  },
  {
    language: "java",
    fileExtension: ".java",
  },
  {
    language: "pythin",
    fileExtension: ".py",
  },
  {
    language: "typescript",
    fileExtension: ".ts",
  },
];

language.forEach((element) => {
  console.log(element.language);
});
