//   we are creating a new method on the string

// creat the method on all the object :

Object.prototype.hrishi = function () {
  console.log("hrishi is present on all the objects");
};

const user = {
  name: "tom",
};

const array = [11, 2, 31];

// shows that the flow of the prototype is one directional and everything is object
array.hrishi();

// user.hrishi();

String.prototype.trueLength = function () {
  //   console.log(this);
  return this.trim().length;
};

const abc = "abc   ";

console.log(abc.trueLength());

//  inheritance :

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailabel: false,
};

const TASupport = {
  makeAssignment: "js assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

console.log(TASupport.isAvailabel);

// mordern syntax

Object.setPrototypeOf(TeachingSupport, Teacher);

console.log(TeachingSupport.makeVideo);
