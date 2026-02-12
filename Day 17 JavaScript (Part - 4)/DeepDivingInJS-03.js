/* 1. Print odd and even numbers from 1 to 10 */
console.log("Odd numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) 
{
    if (i % 2 !== 0)
    {
        console.log(i);
    }
}

console.log("Even numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) 
{
    if (i % 2 === 0) 
    {
        console.log(i);
    }
}

/* 2. Example of infinite loop (DO NOT RUN THIS CODE!) */
// while (true) {
//     console.log("This is an infinite loop!");
// }

/* 3. Program for multiplication table of a number */
let num = 5;
console.log(`Multiplication table of ${num}:`);
for (let i = 1; i <= 10; i++) 
{
    console.log(`${num} x ${i} = ${num * i}`);
}

/* 4. What is break keyword?
   - The 'break' keyword is used to exit a loop or switch statement before it finishes its normal execution.
   Example: */
for (let i = 1; i <= 10; i++) 
{
    if (i === 6) 
    {
        break; // Loop stops when i is 6
    }
    console.log(i);
}

/* 5. Concept of loops in array */
const arr = [10, 20, 30, 40, 50];
console.log("Looping through array:");
for (let i = 0; i < arr.length; i++) 
{
    console.log (arr[i]);
}

/* 6. Nested array (2D array) and looping through it */
const nestedArr = 
[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Looping through nested array:");
for (let i = 0; i < nestedArr.length; i++)
{
    for (let j = 0; j < nestedArr[i].length; j++) 
    {
        console.log(nestedArr[i][j]);
    }
}

// Todo Application
// This is a simple todo application that allows users to add, delete, and list tasks.
/* let todo = [];
let request = prompt("Please enter your todo request");
while (true)
{
    if (request == "exit" || request == "quit")
    {
        console.log ("Exiting or quitting the todo application. Goodbye!");
        break;
    }
    if (request == "list")
    {
        console.log("Your todo list is :");
        console.log ("----------------");
        for (let i = 0; i < todo.length; i ++)
        {
            console.log (i , todo [i]);
        }
        console.log ("----------------");
    }
    else if (request == "add")
    {
        let task = prompt("Please enter the task that you want to add");
        todo.push (task)
        console.log ("task added");
        
    }
    else if (request == "delete")
    {
       let index = prompt("Please enter the index of the task that you want to delete");
       todo.splice (parseInt (index) , 1);
       console.log ("Task deleted");
    }
    else
    {
        console.log ("Invalid request. Please try again.");
    }
    request = prompt("Please enter your next todo request");
} */


// let arr = ["Govind" , 78 , 89 , 67.5];
// console.log(arr); // ["Govind", 78, 89, 67.5]
// console.log(arr [0][0]); // "G"
// console.log(arr [0].length); // 6
// let emptyArr = [];
// console.log(emptyArr.length); 
// console.log(["Govind" , 2 , 3 , 4]); 



// let cars = ["BMW", "Audi", "Mercedes", "Toyota"];
// console.log (cars); // ["BMW", "Audi", "Mercedes", "Toyota"]
// cars.push("Honda"); // Adds the element to the end of the array .
// console.log(cars); // ["BMW", "Audi", "Mercedes", "Toyota", "Honda"]
// cars.pop(); // Removes the last element from end of the array .
// console.log(cars); // ["BMW", "Audi", "Mercedes", "Toyota"]
// cars.unshift("Ford"); // Adds the element to the beginning of the array .
// console.log(cars); // ["Ford", "BMW", "Audi", "Mercedes", "Toyota"]
// cars.shift(); // Removes the first element from the beginning of the array .
// console.log(cars); // ["BMW", "Audi", "Mercedes", "Toyota"]



let cars = ["BMW", "Audi", "Mercedes", "Toyota", "BMW"];
// console.log(cars.indexOf("bMW")); // 0 // Gives the first occurrence of "BMW" (element). Otherwise -1 if element not found .
// console.log(cars.lastIndexOf("BMW")); // 4 // Gives the last occurrence of "BMW" or (element). Otherwise -1 if element not found .
// console.log(cars.includes("Audi")); // true // Checks if "Audi" is present in the array .
// console.log(cars.includes("Honda")); // false // Checks if "Honda" is present in the array .


// let carsBrand1 = ["BMW", "Audi", "Mercedes", "Toyota"];
// let carsBrand2 = ["Ford", "Honda", "Lexus", "Porsche"];
// let allCars = carsBrand1.concat(carsBrand2); // Merges two arrays into one and returns a new array after merging . Order of the element is preserved.
// console.log(allCars); // ["BMW", "Audi", "Mercedes", "Toyota", "Ford", "Honda", "Lexus", "Porsche"]
// console.log (carsBrand1.reverse()); // ["Toyota", "Mercedes", "Audi", "BMW"] // Reverses the order of elements in the original array and returns original but modified array .
// console.log (carsBrand1); // ["Toyota", "Mercedes", "Audi", "BMW"] // Original array is also modified . Because reverse() method modifies the original array in place .


// let cars = ["BMW", "Audi", "Mercedes", "Toyota"];
// console.log(cars.slice ()); // When nothing is passed, it returns a shallow copy of the entire array .
// console.log(cars.slice (1)); // ["Audi", "Mercedes", "Toyota"] // Returns a shallow copy of the array starting from index 1 .
// console.log(cars.slice (1, 3)); // ["Audi", "Mercedes"] // Returns a shallow copy of the array starting from index 1 to index 3 (exclusive) .
// console.log(cars.slice (5)); // [] // When the starting index is greater or equal to the length of the array, then it returns a shallow copy of array as empty array .
// console.log(cars.slice (-2)); // ["Mercedes", "Toyota"] // When the starting index is negative that means give the desired last element . // NOTE : When the starting index is negative, and it's greater than or equal to the length of the array, then it returns a shallow copy of the complete array .
// console.log(cars.slice (-5)); // ["Mercedes", "Toyota"] // NOTE : When the starting index is negative, and it's greater than or equal to the length of the array, then it returns a shallow copy of the complete array .


// splice method : Used to remove , replace and add element in place .
                // It do not make the shallow cooy of original array rather modifiy the original array and returns the modified original array .
// let cars = ["BMW", "Audi", "Mercedes", "Toyota"];
// console.log (cars.splice(1)); // ["Audi", "Mercedes", "Toyota"] // If only starting index is given then it remove and returns the element(s) from given starting index 
// console.log (cars); // ["BMW"] // This is the original modified array
// console.log (cars.splice(1, 2)); // ["Audi", "Mercedes"] // If starting index and deletecount value is given then it remove that much elements which is equal to the deletecount's value from the given starting index and then returns removed values .
// console.log(cars); // ["BMW", "Toyota] // This is the original modified array .
// console.log (cars.splice(1, 1, "Lexus", "Porsche" , "Suzuki")); // first remove that much elements which is equal to the deletecount's value from the given starting index and then returns removed values after then add elements from given starting index with the addition of list of element i.e : "Lexus" and "Porsche" .
// console.log(cars); 


// let cars = ["BMW", "Audi", "Mercedes", "Toyota"];
console.log (cars.sort ()) // ["Audi", "BMW", "Mercedes", "Toyota"] // Sorts the elements of the array in ascending order and returns the sorted array . It modifies the original array in place .
console.log(cars); 


// const cars = ["BMW", "Audi", "Mercedes", "Toyota"];
// console.log (cars);
// cars [0] = "Lexus"; // Modifies the first element of the array
// console.log(cars); // ["Lexus", "Audi", "Mercedes", "Toyota"]


// let cars = ["BMW", "Audi", "Mercedes", "Toyota"];
// console.log (cars);
// cars = ["Lexus", "Suzuki"]; // Modifies the first element of the array
// console.log(cars); // ["Lexus", "Suzuki"]    


