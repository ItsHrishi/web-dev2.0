// imediately invvoked function expression
// due to the problem of global scopes pollution there is the method hoch executes the function as soon as it is declared:
//  to remove teh globals scoped variable pollution we use iffi

// always remember to add the semicolen to the iife after the declaration as it will throw error if not!!
(function chai() {
  console.log("this is 'named iife' function!!");
})();

//passing the values to the iife (unnamed iife)
((name) => {
  console.log(`this is arrow iife function with variable -> ${name}`);
})("Happy");

// ********************************************************************************************************************************

// sample of why iife is used!!

// Example: Database Connection
// Let’s say you want to write a function to set up a database connection. You might have temporary variables, like dbUrl, options, or connection, that are only needed while setting up the connection. These don’t need to exist in the global scope.

// Without IIFE (Polluting the Global Scope):

// Variables declared in the global scope
const dbUrl = "mongodb://localhost:27017/mydatabase";
const options = { useNewUrlParser: true, useUnifiedTopology: true };

function connectToDatabase() {
  const connection = `Connecting to ${dbUrl} with options ${JSON.stringify(
    options
  )}`;
  console.log(connection);
}

connectToDatabase();

// The variables are still accessible globally!
// console.log(dbUrl); // "mongodb://localhost:27017/mydatabase"
// console.log(options); // { useNewUrlParser: true, useUnifiedTopology: true }
// Here, dbUrl and options are leaking into the global scope, even though you only needed them temporarily.

// With IIFE (Avoiding Global Pollution):

(function () {
  // Variables are scoped inside the IIFE
  const dbUrl = "mongodb://localhost:27017/mydatabase";
  const options = { useNewUrlParser: true, useUnifiedTopology: true };

  function connectToDatabase() {
    const connection = `Connecting to ${dbUrl} with options ${JSON.stringify(
      options
    )}`;
    console.log(connection);
  }

  connectToDatabase();
})();

// Outside the IIFE, these variables are not accessible!
// console.log(typeof dbUrl); // "undefined"
// console.log(typeof options); // "undefined"
// What happens here?
// The variables dbUrl, options, and even the connectToDatabase function are private inside the IIFE.
// They disappear after the IIFE runs.
// The global scope remains clean, avoiding potential bugs from variable name conflicts.
// In real-world projects, this is helpful for keeping temporary setup code isolated and tidy!
