/*
Object Literals in JavaScript

An object literal is a comma-separated list of name-value pairs wrapped in curly braces. 
It is the simplest way to create an object in JavaScript.
*/

// Creating an Object Literal
// const person = 
// {
//     name: "Alice",
//     age: 25,
//     isStudent: true,
//     greet: function() 
//     {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };

// console.log(person.name); // Alice
// person.greet(); // Hello, my name is Alice

// Nested Objects
// const company = 
// {
//     name: "TechCorp",
//     address: 
//     {
//         street: "123 Main St",
//         city: "Metropolis",
//         zip: "12345"
//     },
//     employees: 
//     [
//         {name: "Bob", role: "Developer" },
//         {name: "Carol", role: "Designer" }
//     ]
// };

// console.log(company.address.city); // Metropolis
// console.log(company.employees[1].name); // Carol

// Array of Objects
// const products = 
// [
//     {
//         id: 1,
//         name: "Laptop",
//         price: 800
//     },
//     {
//         id: 2,
//         name: "Phone",
//         price: 500
//     },
//     {
//         id: 3,
//         name: "Tablet",
//         price: 300
//     }
// ];

// products.forEach(product => 
// {
//     console.log(`${product.name}: $${product.price}`);
// });
// Output:
// Laptop: $800
// Phone: $500
// Tablet: $300

// Math Object
// The Math object provides mathematical constants and functions.
// console.log(Math.PI); // 3.141592653589793
// console.log(Math.sqrt(16)); // 4
// console.log(Math.pow(2, 3)); // 8
// console.log(Math.max(10, 20, 5)); // 20
// console.log(Math.min(10, 20, 5)); // 5

// Generating a Random Integer
// Math.random() returns a floating-point number between 0 (inclusive) and 1 (exclusive).
// To get a random integer between min and max (both inclusive) :
function getRandomInt(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    // The maximum and minimum are inclusive
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 10)); // Random integer between 1 and 10


// console.log (Math.ceil(0.0)); // 0
// console.log (Math.ceil(0.1)); // 1
// console.log (Math.floor(0.1)); // 0
console.log (Math.random()); // Generates a random number between 0 and 1 (1 is exclusive)
// Math.floor(Math.random() * 10); // Generates a random number between 0 and 9 (both inclusive) by multiplying the random number by 10 and then flooring it to get an integer value.
// console.log (Math.ceil(Math.random() * 10)); // Generates a random number between 1 and 10 (both inclusive) by multiplying the random number by 10 and then ceiling it to get an integer value.
// console.log (Math.floor(Math.random() * 10));
// console.log (Math.ceil(Math.random() * 10));



/*
Summary:
- Object literal: { key: value, ... }
- Nested objects: Objects inside objects
- Array of objects: [ { ... }, { ... }, ... ]
- Math object: Math.PI, Math.sqrt(), Math.random(), etc.
- Random integer: Use Math.random() and Math.floor()
*/

// Guess the number game 
// const max = parseInt (prompt ("enter the max number"));
// const random = Math.ceil (Math.random() * max);
// let guess = prompt ("guess the number between 1 and " + max);
// while (true)
// {
//     if (guess == "quit" || guess == "exit")
//     {
//         console.log ("Exiting or quitting the game. Goodbye!");
//         break;
//     }
//     if (guess == random)
//     {
//         console.log ("Congratulations! You guessed the number correctly. Random number was " + random);
//         break;
//     }
//     else if (guess < random)
//     {
//         guess = prompt ("hint: your guess was too small. Please try again ");
//     }
//     else
//     {
//         guess = prompt ("hint: your guess was too large. Please try again ");
//     } 
// }*




// OBJECT LITERALS
let student =
{
    name: "Govind", 
    1: 20,    
    marks: [78, 89, 67.5],
};
// console.log(student); // { name: 'Govind', age: 20, marks: [ 78, 89, 67.5 ] } // Printing the entire student object .
// console.log(student ["1"]); // [ 78, 89, 67.5 ] // Accessing the marks property using bracket notation .
// console.log(student.marks); // [ 78, 89, 67.5 ] // Accessing the marks property using dot notation (dot operator) .
// console.log(student.marks [0]); // 78 // Accessing the first element of the marks array using dot notation .
// console.log(student["marks"][1]); // 89 // Accessing the second element of the marks array using bracket notation .
// let marksValue = "marks";
// console.log (student [marksValue]); // [ 78, 89, 67.5 ] // Accessing the marks property using variable in bracket notation .
// console.log (student.marksValue); // undefined // Accessing the marksValue property using variable in dot notation (dot operator) .



// UPDATION OF PROPERTY 
// let student =
// {
//     name: "Govind", 
//     age1: 20,    
//     marks: [78, 89, 67.5],
// };
// student ["age"] = 23;
// console.log (student.age1);


// ADDITION OF PROPERTY 
// let student = 
// {
//     name: "Govind", 
//     age: 20,    
//     marks: [78, 89, 67.5],
// };
// student ["gender"] = ["Male"];
// console.log (student);


// DELETION OF PROPERTY (USING KEYS) 
// delete student ["gender"];
// console.log (student);


const obj = 
{
    1: "a",
    true: "b",
    marks1: [23,34,45],
    undefined: "d"
};


console.log (obj["undefined"]); // d
console.log (obj [1]); // a
console.log (obj.marks1[0]); // 23


// NESTED OBJECTS (Object of Objects)
// const classInfo = 
// {
//     sanu: 
//     {
//         grade: "A+",
//         city: "Delhi"
//     }, 
//     govind:
//     {
//         grade: "A+",
//         city: "Mumbai"
//     }
// };
// console.log (classInfo); // Entire classInfo object
// console.log (classInfo.sanu); // { grade: 'A+', city: 'Delhi' } // Accessing the sanu object
// console.log (classInfo.govind); // { grade: 'A+', city: 'Mumbai' } // Accessing the govind object
// console.log (classInfo.sanu.city); // Delhi // Accessing the city property of sanu object using dot notation
// console.log (classInfo ["govind"]["city"]); // Mumbai // Accessing the city property of govind object using bracket notation
// console.log (classInfo ["sanu"]["grade"]);


// UPDATION OF PROPERTY
// classInfo ["sanu"]["city"] = "kanpur";
// console.log (classInfo);
 

// ADDITION OF PROPERTY  
// classInfo ["sanu"]["adress"] = "xyz";
// console.log (classInfo);


// ARRAYS OF OBJECTS 
// const classInfo = 
// [
//     {
//         name: "sanu",
//         grade: "A+",
//         city: "Delhi"
//     },
//     {
//         name: "govind",
//         grade: "A+",
//         city: "Mumbai"
//     }
// ];

// ACCESSING THE OBJECT 
// console.log (classInfo [1]["city"]); // Mumbai
// console.log (classInfo [0].grade); // A+
// console.log (Math.abs (-10)); // 10 // Accessing the abs method of Math object








// What is an Object ?
// An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.

// let calculator = 
// {
//     add1: function addition (a , b) 
//     {
//         return a + b;
//     },
//     subtract: function (a , b) 
//     {
//         return a - b;
//     },
//     multiply: function (a , b) 
//     {
//         return a * b;
//     },
//     divide: function (a , b) 
//     {
//         return a / b;
//     }
// };
// console.log (calculator.add1);
// console["log"] (Math["random"] ());


