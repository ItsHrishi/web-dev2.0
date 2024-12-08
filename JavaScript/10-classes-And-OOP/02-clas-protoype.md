# JavaScript Prototypes and Classes

## Overview of Prototypes in JavaScript

- JavaScript follows **prototypal behavior**, which allows objects to inherit properties and methods from other objects.
- The **prototype chain** is traversed by JavaScript when looking for a property or method. It keeps searching until it either:
  - Finds the property/method, or
  - Reaches a `null` value, which signifies the end of the prototype chain.

## Key Features of Prototypes

- **Prototype** is the core feature enabling:
  - Access to `this` in functions.
  - The `new` keyword for object creation.
  - Inheritance and other advanced behaviors in JavaScript.

### Prototypal Inheritance

- JavaScript uses **prototypal inheritance** to share properties and methods between objects.
  - Every object in JavaScript has an internal reference to its **prototype** (except the base object whose prototype is `null`).
  - This prototype can be accessed and modified.

### Functions as Objects

- In JavaScript, **functions are first-class citizens**:
  - A function is both a function and an object.
  - Functions can have properties and methods like objects.
  - This dual behavior makes JavaScript flexible for creating reusable components.

### `Object.getPrototypeOf` and `Object.setPrototypeOf`

- You can use:
  - `Object.getPrototypeOf(obj)` to retrieve the prototype of an object.
  - `Object.setPrototypeOf(obj, proto)` to set or modify an object’s prototype.

### Base Object Prototype

- The reference of the base object’s prototype is `null`.
  - This acts as the root of all prototype chains.

## The `new` Keyword and Constructor Functions

- JavaScript provides a **constructor functionality** through the `new` keyword:
  - When a function is called with `new`, it creates a new object.
  - The new object’s prototype is set to the constructor function’s `prototype` property.
  - The `this` keyword inside the constructor refers to the newly created object.

## Important Notes

- Everything in JavaScript is an **object**, including:
  - Arrays
  - Functions
  - Objects themselves
- JavaScript's object-oriented capabilities are built on its prototype system rather than classical classes (though ES6 introduced `class` syntax, which is syntactic sugar over prototypes).

## Additional Resources

- To explore prototypes further, consider these:
  - [MDN Web Docs: Prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
  - [JavaScript Info: Prototypal Inheritance](https://javascript.info/prototype-inheritance)
