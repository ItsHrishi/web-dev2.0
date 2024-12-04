//  we are going to do the object destructuring :

const course = {
  courseName: "Aerobics",
  coursePrice: "1099",
  courseInstructor: "Hrishi",
};

// normally we get the values as
console.log(course.courseName);

//  destructuring
const { courseName: cName } = course;
console.log(cName);
