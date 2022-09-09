// This is called the object constructor function for the "object type" or class Person
function Person(firstName, lastName, age, eyeColor) {
    // Person will be the parent class or superclass for a child class called Employee (defined later)
    this.firstName = firstName; 
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeLastName = function (name) {
      // The changeLastName() function assigns the value of name to the person's lastName property.
      // Since this function is defined in the construct, all Person objects will inherit it:
      this.lastName = name; 
    };
  }
  
  // Usage example of creating new Person objects:
  var myMom = new Person("Sally", "Doe", 50, "blue");
  var myDad = new Person("Victor", "Rally", 48, "green");
  
  // Adding a new method to an existing object is easy: 
  myDad.name = function () {
    return this.firstName + " " + this.lastName;
  };
  // The method will be added to myDad, not to myMom or any other person objects.
  
  // Adding a new property to an existing object is also easy:
  myDad.nationality = "English";
  // The property will be added to myDad, not to myMom or any other person objects.
  
  // Calling a method written inside a constructor is easy:
  myMom.changeLastName("Doer");
  // JavaScript knows which Person you are talking about by "substituting" this (line 11) with myMom.
  
  function Employee (firstName, lastName, age, eyeColor, location) {
    // Child is the subclass or child class of Parent.
    Person.call(this, firstName, lastName, age, eyeColor); // Call super constructor of the parent class.
    this.officeLocation = officeLocation; // New property exclusive to the Employee class.
  } // A child class extends the parent class with prototypal inheritance.
  
  var myEmployee = new Employee("Jane", "Roe", 34, "brown", "123 Sesame Street 98765"); // subclass method
  
  myEmployee.lastName = "Doe";
  myEmployee.officeLocation = "245 Sesame Lane 98765";
  
  // ES6 (ECMAScript 2015) introduced the class keyword as an alternative to create classes.
  // Instead of using the keyword function to initiate it, we use the keyword class,
  // then the properties are assigned inside a constructor() method as shown here:
  class Car { // This is our Car class, which will be the parent class or superclass for a child class
    constructor(brandName = "Unknown") {
      // This example includes a default value for the function parameter, meaning
      // this.brand will be assigned "Unknown" if the value is undefined or not passed.
      this.brand = brandName;
    }
  }
  myCar = new Car("Toyota");
  // This code is more reminiscent of other OOP languages, like C++ or Java.