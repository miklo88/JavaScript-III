/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When in the global scope, the value of “this” will be the window/console Object;
* 2. Whenever a function is called by a preceding dot, the object before that dot is this.
Copy

* 3. Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Whenever JavaScript’s call or apply method is used, this is explicitly defined.
*
* write out a code example of each explanation above
*/
// code example for Window Binding
// Principle 1
function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("carl");
  
  
  // Principle 2
  
  // code example for Implicit Binding
  const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myObj.sayHello('carl');
  const sayNameFunc = obj => {
    obj.sayName = function() {
      console.log(`Paint me ${this.name}`);
      console.log(this);
    };
  };
  const me = { name: 'Red' };
  const you = { name: 'Green' };
  sayNameFunc(me);
  sayNameFunc(you);
  
  // Invoke Methods on our objects
  me.sayName();
  you.sayName();
  
  // Principle 3
  
  // code example for New Binding
  function UncordialCat(greeter) {
    this.greeting = 'angered emotional';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const GrumpyCat = new UncordialCat('Grumpy Cat');
  const GrumpyCatDog = new UncordialCat('Grumpy CatDog');
  
  GrumpyCat.speak();
  GrumpyCatDog.speak();
  
  // Principle 4
  // Whenever JavaScript’s call or apply method is used, this is explicitly defined.
  
  // code example for Explicit Binding
  
  function UncordialCat(greeter) {
    this.greeting = 'angered emotional';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      // console.log(this);
    };
  }
  
  const GrumpyCat = new UncordialCat('Grumpy Cat');
  const GrumpyCatDog = new UncordialCat('Grumpy CatDog');
  
  GrumpyCat.speak.call(GrumpyCatDog); 
  GrumpyCatDog.speak.apply(GrumpyCat);
  
  