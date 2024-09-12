/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. PRINCIPLE 1: GLOBAL/WINDOW BINDING: this refers to the window object
* 2. PRINCIPLE 2: this refers to the value within the object it is called. i.e. Person.sayHi() this will refer to values in Person
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// function saySomething(something) {
//   console.log(something);
//   return name;
// }
// saySomething("Hello!");

// Principle 2

// code example for Implicit Binding

const Person = {
    name: 'Ken',
    workplace: 'BBY',
    sayHi: function () {
      console.log(`Hi my name is ${this.name}! I work at ${this.workplace}`)}
  }
  Person.sayHi();

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding