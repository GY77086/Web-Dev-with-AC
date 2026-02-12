/*
Introduction to JavaScript

JavaScript is a versatile, high-level, interpreted programming language that plays a crucial role in web development. It is one of the three core technologies of the World Wide Web, alongside HTML (HyperText Markup Language) and CSS (Cascading Style Sheets). JavaScript enables developers to create interactive, dynamic, and user-friendly web pages.

What is JavaScript?
- JavaScript is a scripting language that runs in web browsers and on servers (using environments like Node.js).
- It allows developers to implement complex features such as interactive forms, animations, real-time updates, and more.
- JavaScript code can be embedded directly into HTML pages or included as separate files.

Key Features:
1. Lightweight and Interpreted:
    - JavaScript is executed line-by-line by the browser's JavaScript engine.
    - No need for compilation; changes can be tested instantly.

2. Object-Oriented:
    - Supports objects, prototypes, and inheritance.
    - Allows creation and manipulation of complex data structures.

3. Event-Driven:
    - Can respond to user actions (events) such as clicks, mouse movements, keyboard input, etc.
    - Enables interactive web applications.

4. Platform-Independent:
    - Runs on any device or operating system with a compatible web browser.
    - No installation required for end-users.

5. Versatile Usage:
    - Used for both client-side (browser) and server-side (Node.js) development.
    - Powers web, mobile, desktop, and even IoT applications.

Brief History:
- JavaScript was created in 1995 by Brendan Eich while working at Netscape Communications.
- Originally named Mocha, then LiveScript, and finally JavaScript.
- Despite its name, JavaScript is not related to Java; the name was chosen for marketing purposes.
- Standardized as ECMAScript (ES) by ECMA International.

Common Uses of JavaScript:
- Adding interactivity to web pages (e.g., form validation, dynamic content updates).
- Manipulating HTML and CSS (Document Object Model or DOM manipulation).
- Communicating with servers asynchronously (AJAX, Fetch API).
- Creating single-page applications (SPAs) using frameworks like React, Angular, and Vue.
- Server-side programming with Node.js.
- Game development, mobile app development, and more.

Basic Syntax and Concepts:
- Statements usually end with semicolons (optional but recommended).
- JavaScript is case-sensitive (e.g., 'Variable' and 'variable' are different).
- Variables can be declared using var (function-scoped), let, or const (block-scoped).
- Supports multiple data types: number, string, boolean, object, undefined, null, symbol, and bigint.
- Functions are first-class objects and can be assigned to variables, passed as arguments, or returned from other functions.
- Supports control structures: if-else, switch, loops (for, while, do-while), etc.

Advantages:
- Essential for modern web development.
- Supported by all major browsers.
- Large ecosystem of libraries and frameworks.
- Active community and continuous evolution.

Limitations:
- Security risks if not used properly (e.g., cross-site scripting).
- Browser compatibility issues (mostly resolved in modern browsers).
- Can be disabled by users in browsers (rare).

In summary, JavaScript is a foundational technology for the web, enabling interactive and dynamic user experiences. Its flexibility and widespread support make it a must-learn language for web developers.
*/



/*
Using the Console in JavaScript

The console is a built-in object in JavaScript that provides access to the browser's debugging console (such as Chrome DevTools, Firefox Developer Tools, etc.) or the terminal in Node.js. It is primarily used for logging information, debugging code, and displaying errors or warnings.

How to Use the Console:

1. Opening the Console:
    - In browsers: Press F12 or Ctrl+Shift+I (Cmd+Option+I on Mac) to open Developer Tools, then go to the "Console" tab.
    - In Node.js: The console output appears directly in your terminal or command prompt.

2. Common Console Methods:
    - console.log(): Outputs general information or values.
      Example: console.log("Hello, World!");
    - console.error(): Displays error messages in red.
      Example: console.error("This is an error!");
    - console.warn(): Shows warning messages in yellow.
      Example: console.warn("This is a warning!");
    - console.info(): Outputs informational messages (similar to log in most browsers).
      Example: console.info("Some info");
    - console.debug(): For debugging messages (may be hidden by default).
      Example: console.debug("Debug message");
    - console.clear(): Clears the console window.
      Example: console.clear();

3. Advanced Console Features:
    - console.table(): Displays tabular data as a table.
      Example: console.table([{name: "Alice", age: 25}, {name: "Bob", age: 30}]);
    - console.group() and console.groupEnd(): Groups related logs together.
      Example:
         console.group("User Info");
         console.log("Name: Alice");
         console.log("Age: 25");
         console.groupEnd();
    - console.time() and console.timeEnd(): Measures how long an operation takes.
      Example:
         console.time("Loop");
         for(let i=0; i<1000; i++){}
         console.timeEnd("Loop");

4. Why Use the Console?
    - Debugging: Track variable values, function calls, and errors.
    - Testing: Quickly test snippets of code.
    - Monitoring: Observe application flow and performance.

In summary, the console is an essential tool for JavaScript developers to debug, test, and monitor code during development.
*/


/*
Variables in JavaScript

A variable is a named container for storing data values. Variables allow you to store, retrieve, and manipulate data in your programs. In JavaScript, variables can hold different types of data, such as numbers, strings, objects, arrays, and more.

How to Declare Variables:
JavaScript provides three ways to declare variables:
1. var
2. let
3. const

1. var:
- Introduced in ES5 and earlier.
- Function-scoped: Accessible within the function where it's declared, or globally if declared outside any function.
- Can be re-declared and updated within its scope.
- Hoisted to the top of its scope (initialized as undefined).
Example:
    var x = 10;
    var x = 20; // Allowed
    x = 30;     // Allowed

2. let:
- Introduced in ES6 (ES2015).
- Block-scoped: Accessible only within the block ({ ... }) where it's declared.
- Can be updated but not re-declared in the same scope.
- Not hoisted in the same way as var (temporal dead zone).
Example:
    let y = 5;
    // let y = 6; // Error: Cannot re-declare in same scope
    y = 7;       // Allowed

3. const:
- Introduced in ES6 (ES2015).
- Block-scoped like let.
- Must be initialized at the time of declaration.
- Cannot be updated or re-declared in the same scope.
- The value itself is constant, but if it's an object or array, its properties/elements can be changed.
Example:
    const PI = 3.14;
    // PI = 3.1415; // Error: Assignment to constant variable

    const arr = [1, 2, 3];
    arr.push(4); // Allowed: array contents can change

Variable Naming Rules:
- Must start with a letter, underscore (_), or dollar sign ($).
- Subsequent characters can be letters, digits, underscores, or dollar signs.
- Case-sensitive (myVar and myvar are different).
- Cannot use reserved keywords (e.g., let, var, if, else).

Types of Variables (by Scope):
1. Global Variables: Declared outside any function or block, accessible everywhere.
2. Local Variables: Declared inside a function or block, accessible only there.

Data Types Variables Can Hold:
- Number: let num = 42;
- String: let name = "Alice";
- Boolean: let isActive = true;
- Object: let person = { name: "Bob" };
- Array: let list = [1, 2, 3];
- Null: let empty = null;
- Undefined: let notSet;
- Symbol: let sym = Symbol("id");
- BigInt: let big = 12345678901234567890n;

Dynamic Typing:
- JavaScript is dynamically typed, so variables can change type at runtime.
Example:
    let data = 10;      // Number
    data = "Hello";     // Now a String

Best Practices:
- Use let and const instead of var for block scoping and to avoid hoisting issues.
- Use const by default, unless you need to reassign the variable.
- Choose meaningful variable names.

Examples:
*/
var globalVar = "I am global";
let blockVar = "I am block-scoped";
const constantVar = "I cannot change";

// Demonstrating scope
function testScope() 
{
    var functionVar = "Function scope";
    if (true) 
    {
        let blockScoped = "Block scope";
        console.log(blockScoped); // Accessible here
    }
    // console.log(blockScoped); // Error: not accessible here
    console.log(functionVar); // Accessible here
}
testScope();

// Dynamic typing
let dynamic = 100;
console.log(typeof dynamic); // "number"
dynamic = "Now a string";
console.log(typeof dynamic); // "string"




/*
Data Types in JavaScript

A data type specifies the kind of value a variable can hold. JavaScript is a dynamically typed language, meaning variables can hold any type of data and their type can change at runtime.

JavaScript has two main categories of data types:
1. Primitive Data Types
2. Non-Primitive (Reference) Data Types

1. Primitive Data Types:
These are basic, immutable data types. When you assign a primitive value to a variable, it stores the actual value.

a) Number:
- Represents both integer and floating-point numbers.
- Example:
    let num1 = 42;
    let num2 = 3.14;
    let num3 = -7;
    let num4 = Infinity;
    let num5 = NaN; // Not-a-Number

b) String:
- Represents a sequence of characters, enclosed in single, double, or backticks (template literals).
- Example:
    let str1 = "Hello";
    let str2 = 'World';
    let str3 = `Template literal with ${str1}`;

c) Boolean:
- Represents logical values: true or false.
- Example:
    let isActive = true;
    let isComplete = false;

d) Undefined:
- A variable that has been declared but not assigned a value is undefined.
- Example:
    let x;
    console.log(x); // undefined

e) Null:
- Represents the intentional absence of any object value.
- Example:
    let y = null;

f) Symbol (ES6):
- Represents a unique and immutable value, often used as object property keys.
- Example:
    let sym1 = Symbol('id');
    let sym2 = Symbol('id');
    console.log(sym1 === sym2); // false

g) BigInt (ES2020):
- Used for integers larger than 2^53 - 1.
- Example:
    let big = 1234567890123456789012345678901234567890n;

2. Non-Primitive (Reference) Data Types:
These types store references to objects, not the actual value.

a) Object:
- Collection of key-value pairs.
- Example:
    let person = 
    {
        name: "Alice",
        age: 25
    };

b) Array:
- Ordered list of values (can be of any type).
- Example:
    let arr = [1, 2, 3, "four", true];

c) Function:
- Functions are objects in JavaScript.
- Example:
    function greet() { console.log("Hello!"); }
    let sayHi = function() { console.log("Hi!"); };

d) Date, RegExp, Map, Set, WeakMap, WeakSet, etc.:
- Built-in object types for special purposes.

Type Checking:
- Use typeof operator for primitives:
    console.log(typeof 123); // "number"
    console.log(typeof "abc"); // "string"
    console.log(typeof true); // "boolean"
    console.log(typeof undefined); // "undefined"
    console.log(typeof null); // "object" (historical bug)
    console.log(typeof Symbol("id")); // "symbol"
    console.log(typeof 123n); // "bigint"
    console.log(typeof {}); // "object"
    console.log(typeof []); // "object"
    console.log(typeof function(){}); // "function"

- Use Array.isArray() to check for arrays:
    console.log(Array.isArray([1,2,3])); // true

- Use instanceof for objects:
    let date = new Date();
    console.log(date instanceof Date); // true

Special Notes:
- null is of type "object" due to a legacy bug.
- Arrays and functions are technically objects.
- Primitives are immutable; objects are mutable.
- JavaScript automatically converts between types when needed (type coercion).

Examples:
*/


// Primitive Data Types Examles:
// Number
let num2 = 100;
let floatNum = 3.1415;
let negativeNum = -50;
let inf = Infinity;
let notANumber = NaN;

// String
let greeting = "Hello, World!";
let singleQuote = 'Single quotes';
let templateSum = `Sum: ${num2 + floatNum}`;

// Boolean
let isJavaScriptFun = true;
let isRaining = false;

// Undefined
let notDefined;
console.log(notDefined); // undefined

// Null
let emptyValue = null;

// Symbol
let symA = Symbol('desc');
let symB = Symbol('desc');
console.log(symA === symB); // false

// BigInt
let bigIntNum = 9007199254740991n;

// Object
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2023
};

// Array
let colors = ["red", "green", "blue"];

// Function
function add(a, b) {
    return a + b;
}
let multiply = function(x, y) {
    return x * y;
};

// Type checking
console.log(typeof num2); // "number"
console.log(typeof greeting); // "string"
console.log(typeof isJavaScriptFun); // "boolean"
console.log(typeof notDefined); // "undefined"
console.log(typeof emptyValue); // "object"
console.log(typeof symA); // "symbol"
console.log(typeof bigIntNum); // "bigint"
console.log(typeof car); // "object"
console.log(typeof colors); // "object"
console.log(typeof add); // "function"
console.log(Array.isArray(colors)); // true
console.log(car instanceof Object); // true
console.log(colors instanceof Array); // true

/*
Summary Table:

| Data Type   | Example                | typeof result   |
|-------------|------------------------|-----------------|
| Number      | 42, 3.14, NaN, Infinity| "number"        |
| String      | "abc", 'xyz'           | "string"        |
| Boolean     | true, false            | "boolean"       |
| Undefined   | undefined              | "undefined"     |
| Null        | null                   | "object"        |
| Symbol      | Symbol("id")           | "symbol"        |
| BigInt      | 123n                   | "bigint"        |
| Object      | {a:1}, [1,2,3], etc.   | "object"        |
| Function    | function(){}           | "function"      |

JavaScript's flexible and dynamic type system is powerful, but requires careful handling to avoid bugs due to implicit type conversions.
*/


// 1. Arithmetic Operators
let a = 10, b = 3;
console.log(a + b); // Addition: 13
console.log(a - b); // Subtraction: 7
console.log(a * b); // Multiplication: 30
console.log(a / b); // Division: 3.333...
console.log(a % b); // Modulus (Remainder): 1
console.log(a ** b); // Exponentiation: 1000
console.log(++a); // Increment: 11
console.log(--b); // Decrement: 2

// 2. Assignment Operators
let x = 5;
x += 2; // x = x + 2
x -= 1; // x = x - 1
x *= 3; // x = x * 3
x /= 2; // x = x / 2
x %= 2; // x = x % 2
x **= 3; // x = x ** 3
console.log(x);

// 3. Comparison Operators
let y = 10, z = '10';
console.log(y == z); // true (loose equality)
console.log(y === z); // false (strict equality)
console.log(y != z); // false
console.log(y !== z); // true
console.log(y > 5); // true
console.log(y < 5); // false
console.log(y >= 10); // true
console.log(y <= 9); // false

// 4. Logical Operators
let p = true, q = false;
console.log(p && q); // AND: false
console.log(p || q); // OR: true
console.log(!p); // NOT: false

// 5. Bitwise Operators
let m = 5, n = 1;
console.log(m & n); // AND: 1
console.log(m | n); // OR: 5
console.log(m ^ n); // XOR: 4
console.log(~m); // NOT: -6
console.log(m << 1); // Left shift: 10
console.log(m >> 1); // Right shift: 2
console.log(m >>> 1); // Unsigned right shift: 2

// 6. String Operators
let str1 = "Hello", str2 = "World";
console.log(str1 + " " + str2); // Concatenation: "Hello World"
let str3 = "Number: " + 5; // "Number: 5"
console.log(str3);

// 7. Ternary Operator (Conditional)
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote);

// 8. Type Operators
console.log(typeof 123); // "number"
console.log(typeof "abc"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof {}); // "object"
console.log(typeof undefined); // "undefined"
console.log(Array.isArray([1,2,3])); // true
console.log(123 instanceof Number); // false

// 9. Comma Operator
let k = (1, 2, 3);
console.log(k); // 3

// 10. Optional Chaining Operator (?.)
let user = { name: "Alice", address: { city: "NY" } };
console.log(user.address?.city); // "NY"
console.log(user.contact?.phone); // undefined

// 11. Nullish Coalescing Operator (??)
let foo = null;
console.log(foo ?? "default"); // "default"






/*
Strings in JavaScript

A string in JavaScript is a sequence of characters used to represent text. Strings are one of the primitive data types in JavaScript and are immutable, meaning their contents cannot be changed after creation (though you can create new strings from existing ones).

How to Create Strings:
1. Using single quotes:    let str1 = 'Hello';
2. Using double quotes:    let str2 = "World";
3. Using backticks (template literals): let str3 = `Hello, ${str2}!`;

Examples:
*/
let single = 'Single quotes';
let double = "Double quotes";
let templateExample = `Template literal with ${single} and ${double}`;

// String Length
let message = "JavaScript";
console.log(message.length); // 10

// Accessing Characters
console.log(message[0]); // "J"
console.log(message.charAt(1)); // "a"

// String Immutability
let greet = "Hello";
greet[0] = "h"; // Does nothing
console.log(greet); // "Hello"

// Common String Methods
let text = "  JavaScript is Awesome!  ";
console.log(text.toUpperCase()); // "  JAVASCRIPT IS AWESOME!  "
console.log(text.toLowerCase()); // "  javascript is awesome!  "
console.log(text.trim()); // "JavaScript is Awesome!"
console.log(text.includes("Awesome")); // true
console.log(text.startsWith("  Java")); // true
console.log(text.endsWith("!  ")); // true
console.log(text.indexOf("is")); // 14
console.log(text.lastIndexOf("a")); // 17
console.log(text.replace("Awesome", "Powerful")); // "  JavaScript is Powerful!  "
console.log(text.slice(2, 12)); // "JavaScript"
console.log(text.substring(2, 12)); // "JavaScript"
console.log(text.split(" ")); // ["", "", "JavaScript", "is", "Awesome!", "", ""]

// Concatenation
let first = "Hello";
let second = "World";
let combined = first + " " + second; // "Hello World"
let combined2 = `${first}, ${second}!`; // "Hello, World!"

// Escaping Characters
let quote = 'He said, "It\'s JavaScript!"';
console.log(quote);

// Multi-line Strings (using template literals)
let multiLine = `This is
a multi-line
string.`;
console.log(multiLine);

// String to Number and Number to String
let numStr = "123";
let num = Number(numStr); // 123
let strFromNum = String(456); // "456"

// Iterating Over a String
for (let char of "JS") {
    console.log(char); // "J" then "S"
}

// Unicode and Special Characters
let smile = "😊";
console.log(smile.length); // 2 (because of surrogate pairs)
console.log("Line1\nLine2"); // Newline

/*
Summary Table:

| Operation                | Example                                 | Result/Description                |
|--------------------------|-----------------------------------------|-----------------------------------|
| Length                   | "abc".length                            | 3                                 |
| Access char              | "abc"[1]                                | "b"                               |
| toUpperCase()            | "abc".toUpperCase()                     | "ABC"                             |
| toLowerCase()            | "ABC".toLowerCase()                     | "abc"                             |
| trim()                   | " abc ".trim()                          | "abc"                             |
| includes()               | "abc".includes("b")                     | true                              |
| startsWith()             | "abc".startsWith("a")                   | true                              |
| endsWith()               | "abc".endsWith("c")                     | true                              |
| indexOf()                | "abcabc".indexOf("b")                   | 1                                 |
| lastIndexOf()            | "abcabc".lastIndexOf("b")               | 4                                 |
| replace()                | "abc".replace("b", "x")                 | "axc"                             |
| slice()                  | "abcdef".slice(1,4)                     | "bcd"                             |
| split()                  | "a,b,c".split(",")                      | ["a","b","c"]                     |
| concat()                 | "a".concat("b")                         | "ab"                              |
| Template literal         | `Hello, ${name}`                        | "Hello, Alice" (if name="Alice")  |
| Escape quote             | 'It\'s JS'                              | "It's JS"                         |
| Multi-line (template)    | `line1\nline2`                          | line1 (newline) line2             |

Strings are fundamental for handling and manipulating text in JavaScript. They offer a rich set of methods for searching, modifying, and formatting textual data.
*/