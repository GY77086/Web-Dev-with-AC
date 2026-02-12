// this KEYWORD IN JAVASCRIPT:
// this keyword refers to an object that is executing the current piece of code.

// const student = 
// {
//     avg: function getAvg ()
//     {
//         console.log (this); // Refers to the student object because getAvg function is called by student object.
//         let avg = (this.physics + this.chemistry + this.math) / 3;
//         console.log (avg); 
//     },
//     name: "Govind",
//     age: 20,
//     physics: 78,
//     chemistry: 67,
//     math: 89
// }
// function getAvg ()
// {
//     console.log ("hello world");
//     console.log (this); // Refers to the global object (window in browsers) because getAvg function is not called by an object (so it refers to the global object by default i.e window object).
// }
// console.log (window.getAvg ()); // window is the global object in browsers.
// console.log (getAvg ()); // same as window.getAvg().
// console.log (getAvg); // function definition.


// try & catch :
// try : It allows you to define a block of code to be tested for errors while it is being executed.
// catch : It allows you to define a block of code to be executed, if an error occurs in the try block.

// console.log ("hello world");
// console.log ("hello world");
// console.log (x); // x is not defined
// console.log ("hello world2");
// console.log ("hello world2");    



// console.log ("Before try & catch");
// try
// {
//     console.log (x); // x is not defined
// }
// catch (error)
// {
//     console.log (error); // error is an object which contains all the information about the error.
// }
// console.log ("After try & catch");



// Arrow function : 
// It is a shorter syntax for writing function expressions.
// It does not have its own this keyword. It inherits this from the parent scope at the time it is defined.
// It cannot be used as stand alone function. It must be used as a function expression.
// SYNTAX :
// const functionName = (parameter1 , parameter2, parameter3, ........) => { // function body }



// For multiple line function body we have to use the curly braces.
// const sum = (a, b) => 
// {
//     // return a + b;
//     console.log (a + b);
// }
// sum (5, 10);
// console.log (sum);
// console.log (sum (5, 10));




// For single line function body we can omit the curly braces. It is up to you that you want to use curly braces or not.
// const getFirstName = () => console.log ("Govind"); 
// getFirstName ();



// For no or multiple parameters we have to use the parentheses.
// const getFullName1 = (firstName, lastName) => 
// {
//     console.log (firstName + " " + lastName);
// } 



// getFullName1 ("Govind", "Yadav");
// const getFullName2 = () => 
// {
//     console.log ("Sanu" + " " + "Yadav");
// } 
// getFullName2 ();



// For single parameter we can omit the parentheses around the parameter.
// const cube = n => 
// {
//     return n * n * n; 
// console.log (cube (3));



// implicit return :
// If the function body contains a single expression, you can omit the curly braces and the return keyword.
// And you are allowed to return given single expression's value from an arrow function without using the return keyword and curly braces (but ether using () bracket or notusing ()).
// The value of that expression will be returned automatically.
// for example :
const mul = (a, b) => (a * b); // returning the value of single  expression (a * b) using () bracket.
console.log (mul (5, 10));
// OR
// const mul = (a, b) => a * b; // returning the value of single expression (a * b) without using () bracket.
// console.log (mul (5, 10));


// setTimeout() : 
// It is a method that allows you to execute a function after a specified delay (in milliseconds).
// SYNTAX : setTimeout (function or functionName, delayInMilliseconds);
// It returns a unique identifier (timeoutID) that can be used to cancel the timeout using clearTimeout() method.

// function greet ()
// {
//     console.log ("Hello World!");
// }



// console.log ("Hi there!");
// OR
// const greet = () => console.log ("My World!"); // defining the greet function.

// setTimeout (function () {console.log ("and My World!"); console.log ("and My Universe")} , 3000); // greet function will be executed after 3 seconds (3000 milliseconds). 
// OR
// setTimeout (() => console.log ("My World!");  , 3000); // greet function will be executed after 3 seconds (3000 milliseconds). 
// console.log ("Welcome to");



// setInterval() :
// It is a method that allows you to execute a function repeatedly at specified intervals (in milliseconds).
// SYNTAX : setInterval (function or functionName, intervalInMilliseconds);
// It returns a unique identifier (intervalID) that can be used to cancel the interval using clearInterval() method.



// console.log ("Hi there!");
// function greet ()
// {
//     console.log ("Hello World!");
// }
// setInterval (greet, 2000); // greet function will be executed every 2 seconds (2000 milliseconds).
// consle.log ("Welcome to");



 // this message will be displayed immediately.
// console.log ("This message is displayed immediately.");
// const timeoutID = setTimeout (greet, 3000); // storing the timeoutID returned by setTimeout() method.
// console.log (timeoutID); // it will print a unique identifier (a number).
// clearTimeout (timeoutID); // canceling the timeout using clearTimeout() method.


