//  need to create promise the promise before consuming!!

//  promise is a object representing the eventual completion or failure of asynchronous operation

// we can create the instance of object in the js same as class in c, c++

//  create a new promise

//  promise takes callBack function as the argument :

// const promiseOne = new Promise(function (resolve, reject) {
//   //  don any async tasks
//   //  db calls
//   //  now example to show the working of promise
//   setTimeout(function () {
//     console.log("inside promise one sec");
//     //  here we tell the program that the task is completed
//     resolve();
//   }, 2000);
// });

// // this has the direct association with the resolve parameter which we have given in a promise

// promiseOne.then(function () {
//   console.log("promiseOne resolved");
// });

// //  anothey way to declare a promise :

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("inside promise 2");
//     resolve();
//   }, 2000);
// }).then(function () {
//   console.log("promise 2 completed!!");
// });

// // sending data after the work is completed :

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ user: "happy", email: "happy@gmail.com" });
//   }, 2000);
// });

// promiseThree.then(function (response) {
//   console.log("response received form promise 3", response);
// });

// const promiseFour = new Promise(function (resolve, reject) {
//   let error = true;
//   setTimeout(function () {
//     if (!error) {
//       resolve({ name: "hrishi", password: 123 });
//     } else {
//       reject("There is an error in promise four!!");
//     }
//   }, 2000);
// });

// //  chaining of then
// promiseFour
//   .then(function (user) {
//     console.log(user);
//     return user.name;
//   })
//   .then(function (userName) {
//     console.log(userName);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(function () {
//     console.log("promise four is either resolved or rejected");
//   });

//  handling the promise uisng async and await

// const promiseFive = new Promise(function (resolve, reject) {
//   let error = true;
//   setTimeout(function () {
//     if (!error) {
//       resolve({ name: "hrishi", password: 123 });
//     } else {
//       reject("There is an error in promise four!!");
//     }
//   }, 2000);
// });

// //  async and await must be used by a funstion:
// //  async await cannot dirrectly handle errors
// //  while using the async and await use the try catch block or else it will throw an error when there is an error!!
// //  the error we encounter here will be an network error, the response status code: 404, or others are not received in errors!!

// async function consumingPromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumingPromiseFive();

//  new promise to get the response:

// async function getAllUsers() {
//   try {
//     let response = await fetch("https://api.github.com/users/itshrishi");
//     // console.log(typeof response);
//     // need to use aait as the json conversion takes time
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getAllUsers();

// we can use fetch directl also :

fetch("https://api.github.com/users/itshrishi")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(erroe);
  });
