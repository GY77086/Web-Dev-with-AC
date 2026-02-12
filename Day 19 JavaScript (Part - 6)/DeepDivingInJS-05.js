/*
==========================
Functions in JavaScript
==========================

1. Function Declaration:
A function is a reusable block of code that performs a specific task.

Example:
*/
// function greet() 
// {
//     console.log("Hello, World!");
// }
// greet(); // Output: Hello, World!

/*
--------------------------
2. Function with Arguments:
Functions can accept parameters (arguments) to work with dynamic values.
*/
// function add(a, b) 
// {
//     return a + b;
// }
// console.log(add(5, 3)); // Output: 8

/*
--------------------------
3. The return Keyword:
The return statement ends function execution and specifies the value to be returned.
*/
// function square(x) 
// {
//     return x * x;
// }
// let result = square(4); // result = 16

/*
--------------------------
4. Scope in JavaScript:
Scope determines the accessibility of variables.

a) Global Scope:
Variables declared outside any function are in the global scope.
*/
// let globalVar = "I'm global";
// function showGlobal() 
// {
//     console.log(globalVar);
// }
// showGlobal(); // Output: I'm global

/*
b) Function Scope:
Variables declared inside a function are only accessible within that function.
*/
// function testScope() 
// {
//     let localVar = "I'm local";
//     console.log(localVar);
// }
// testScope();
// console.log(localVar); // Error: localVar is not defined

/*
c) Block Scope (ES6+):
Variables declared with let or const inside a block {} are only accessible within that block.
*/
// if (true) 
// {
//     let blockVar = "I'm block scoped";
//     console.log(blockVar);
// }
// console.log(blockVar); // Error: blockVar is not defined

/*
--------------------------
5. Function Expression:
A function can be assigned to a variable. This is called a function expression.
*/
// const multiply = function(x, y) 
// {
//     return x * y;
// };
// console.log(multiply(2, 4)); // Output: 8

/*
--------------------------
6. Higher Order Function:
A higher order function is a function that takes another function as an argument or returns a function.
*/
// function operate(a, b, operation) 
// {
//     return operation(a, b);
// }
// function subtract(x, y) 
// {
//     return x - y;
// }
// console.log(operate(10, 3, subtract)); // Output: 7

// Example: Returning a function
// function makeMultiplier(factor) 
// {
//     return function(x) 
//     {
//         return x * factor;
//     };
// }
// const double = makeMultiplier(2);
// console.log(double(5)); // Output: 10

/*
--------------------------
7. Methods:
A method is a function that is a property of an object.
*/
// const person = 
// {
//     name: "Alice",
//     greet: function() 
//     {
//         console.log("Hello " + this.name);
//     }
// };
// person.greet(); // Output: Hello Alice

/*
--------------------------
Summary:
- Functions are reusable blocks of code.
- Arguments allow functions to accept input.
- return keyword sends a value back from a function.
- Scope: global, function, and block.
- Function expressions assign functions to variables.
- Higher order functions take/return functions.
- Methods are functions inside objects.
*/





// FUNCTION 
// let name = prompt ("enter the name");
// function printName (userName)
// {
//     console.log (userName + " Yadav");
// }
// printName (name);
// console.log (name);


// let myName = prompt ("enter the name");
// let myAge = prompt ("enter the age");
// function printInfo (userName , userAge)
// {
//     console.log (`${userName} Yadav 's age is ${userAge}`);
// }
// printInfo (myAge , myName);
// console.log (myName);

// function sum (a , b)
// {
//     return a + b;
// }
// console.log (sum (sum (2 , 3) , 6));



// let arr = ["hello" , "world" , "how" , "are" , "you"];
// function concat (strArr)
// {
//     let ans = "";
//     for (let i = 0; i < strArr.length; i ++)
//     {
//         ans += strArr [i];
//     }
//     return ans;
// }
// console.log (concat (arr));



// FUNCTION EXPRESSION 

// let sum = function (a , b)
// {
//     return a + b;
// }
// console.log (sum (2 , 4));

// let printName = function () // The function expression is assigned to a variable named printName
// {
//     console.log ("Govind"); // "Govind"
// }
// printName =  function () 
// {
//     console.log ("Sanu"); 
// }
// printName (); // "Sanu" 


// HIGH ORDER FUNCTIONS : A function that takes another function as an argument or returns a function as a result is called a higher-order function.
// FUNCTION TAKING ANOTEHR FUNCTION AS AN ARGUMENT
function singleGreet ()
{
    console.log ("Hello World!");
    console.log ("Hello Universe!");
}

function multipleGreet (functionName , n)
{
    for (let i = 0; i < n; i ++)
    {
        functionName ();
    }
}
 multipleGreet (singleGreet , 5); // Calls the singleGreet function 5 times 
//  OR 
// multipleGreet (function (a , b) {console.log ("Hello World!"); console.log ("Hello Universe!");  console.log (a + 2 * b);} , 5); // Calls the anonymous function 5 times


// FUNCTION RETURNING ANOTHER FUNCTION

// let request = prompt ("enter your request (odd/even)");
// function oddEvenFactory (request)
// {
    
//     if (request == "odd")
//     {
//         function isOdd (num)
//         {
//             if (num % 2 != 0)
//             {
//                 console.log (num + " is odd");
//             }
//             else
//             {
//                 console.log (num + " is not odd");
//             }
//         }
//         return isOdd;
        
//         OR
//         return function (num)
//         {
//             if (num % 2 != 0)
//             {
//                 console.log (num + " is odd");
//             }
//             else
//             {
//                 console.log (num + " is not odd");
//             }
//         };
//     }
//     else if (request == "even")
//     {
//         function isEven (num)
//         {
//             if (num % 2 == 0)
//             {
//                 console.log (num + " is even");
//             }
//             else
//             {
//                 console.log (num + " is not even");

//             }
//         }
//         return isEven;
//         OR
//         return function (num)
//         {
//             if (num % 2 == 0)
//             {
//                 console.log (num + " is even");
//             }
//             else
//             {
//                 console.log (num + " is not even");

//             }
//         };
//     }
//     else
//     {
//         console.log ("Invalid request");
//     }  
// }
// let fun1 = oddEvenFactory (request);
// let num = parseInt (prompt ("enter the number"));
// fun1 (num); // Calls the isOdd or isEven function based on the request



/*
==========================
Scope in JavaScript (Detailed Explanation)
==========================

Scope refers to the current context of code, which determines the accessibility (visibility) of variables. In JavaScript, there are three main types of scope:

1. Global Scope
2. Function Scope (Local Scope)
3. Block Scope (ES6+)

--------------------------
1. Global Scope:
--------------------------
Variables declared outside of any function or block are in the global scope. They can be accessed from anywhere in the code.

Example:
*/
// let globalMessage = "I am a global variable";

// function showGlobalMessage() 
// {
//     console.log(globalMessage); // Accessible here
// }

// showGlobalMessage(); // Output: I am a global variable
// console.log(globalMessage); // Output: I am a global variable

/*
--------------------------
2. Function Scope (Local Scope):
--------------------------
Variables declared inside a function (using var, let, or const) are only accessible within that function. They cannot be accessed from outside the function.

Example:
*/
// function localScopeExample() 
// {
//     let localMessage = "I am a local variable";
//     console.log(localMessage); // Accessible here
// }

// localScopeExample(); // Output: I am a local variable
// console.log(localMessage); // Error: localMessage is not defined

/*
--------------------------
3. Block Scope (ES6+):
--------------------------
Variables declared with let or const inside a block (e.g., inside if, for, while, or {}) are only accessible within that block.

Example:
*/
// if (true) 
// {
//     let blockMessage = "I am block scoped";
//     console.log(blockMessage); // Accessible here
// }
// console.log(blockMessage); // Error: blockMessage is not defined

/*
Note: Variables declared with var do NOT have block scope, only function scope.
Example:
*/
// if (true) 
// {
//     var notBlockScoped = "I am NOT block scoped";
//     console.log(notBlockScoped); // Accessible here
// }
// console.log(notBlockScoped); // Accessible here too (var is function scoped)

/*
--------------------------
Summary Table:
--------------------------
| Scope Type    | Declared With         | Accessible Where?                |
|---------------|----------------------|----------------------------------|
| Global        | var, let, const      | Anywhere in the file             |
| Function      | var, let, const      | Only inside the function         |
| Block         | let, const           | Only inside the block {}         |

--------------------------
Nested Scope (Lexical Scope):
--------------------------
Inner functions have access to variables declared in their outer (parent) functions. This is called lexical scope.

Example:
*/
// function outer() 
// {
//     let outerVar = "I'm from outer function";
//     function inner() 
//     {
//         console.log(outerVar); // Can access outerVar
//     }
//     inner();
// }
// outer(); // Output: I'm from outer function

/*
--------------------------
Best Practices:
--------------------------
- Use let and const for block scoping to avoid accidental variable leaks.
- Minimize use of global variables to prevent conflicts and bugs.
- Understand scope to write predictable and bug-free code.
*/


