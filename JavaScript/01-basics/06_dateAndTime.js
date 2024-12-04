// dates and time

let mydate = new Date();

// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toISOString());
// console.log(typeof mydate);

// to get the value in miliseconds: this gives the precise value of now used mostly for bookings and gaming
let myTimeStamp = Date.now();

console.log(new Date(Date.now()).toString());
console.log(myTimeStamp);

// customize the local string format :

console.log(mydate.toLocaleString("default", { dayPeriod: "long" }));
