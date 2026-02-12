/*
Control Statements in JavaScript

Control statements are constructs that control the flow of execution in a program. They allow you to make decisions, repeat actions, and jump to different parts of code based on certain conditions.

Types of Control Statements:

1. Conditional Statements
2. Looping Statements
3. Jump Statements

----------------------------------------
1. Conditional Statements
----------------------------------------

These statements execute a block of code based on a condition.

a) if statement

Syntax:
if (condition) {
    // code to execute if condition is true
}

Example:
*/
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
}

/*
b) if...else statement

Syntax:
if (condition) {
    // code if true
} else {
    // code if false
}

Example:
*/
let number = 5;
if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}

/*
c) if...else if...else statement

Syntax:
if (condition1) {
    // code
} else if (condition2) {
    // code
} else {
    // code
}

Example:
*/
let marks = 75;
if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}

/*
d) switch statement

Used for multiple conditions based on the value of a variable.

Syntax:
switch(expression) {
    case value1:
        // code
        break;
    case value2:
        // code
        break;
    default:
        // code
}

Example:
*/
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Another day");
}

/*
----------------------------------------
2. Looping Statements
----------------------------------------

Used to repeat a block of code multiple times.

a) for loop

Syntax:
for (initialization; condition; increment) {
    // code
}

Example:
*/
for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}

/*
b) while loop

Syntax:
while (condition) {
    // code
}

Example:
*/
let count = 1;
while (count <= 3) {
    console.log("Count:", count);
    count++;
}

/*
c) do...while loop

Syntax:
do {
    // code
} while (condition);

Example:
*/
let num = 1;
do {
    console.log("Number:", num);
    num++;
} while (num <= 2);

/*
----------------------------------------
3. Jump Statements
----------------------------------------

a) break statement

Used to exit from a loop or switch.

Example:
*/
for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log("Break Example:", i);
}

/*
b) continue statement

Skips the current iteration and continues with the next.

Example:
*/
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log("Continue Example:", i);
}

/*
c) return statement

Used to return a value from a function and exit the function.

Example:
*/
function add(a, b) {
    return a + b;
}
console.log("Sum:", add(2, 3));

/*
----------------------------------------
Summary

- Control statements manage the flow of execution in JavaScript.
- They include conditional statements (if, else, switch), looping statements (for, while, do...while), and jump statements (break, continue, return).
- They are essential for decision making, repetition, and controlling program logic.
*/