/*
    JavaScript String Methods
    ------------------------
    Strings in JavaScript are sequences of characters. JavaScript provides many built-in methods to work with strings.
    Below are some of the most commonly used string methods with examples.
*/

// 1. length
const str = "Hello, World!";
console.log(str.length); // 13

// 2. charAt(index)
console.log(str.charAt(0)); // 'H'

// 3. charCodeAt(index)
console.log(str.charCodeAt(0)); // 72

// 4. at(index) (ES2022+)
console.log(str.at(-1)); // '!'

// 5. concat()
const str2 = " How are you?";
console.log(str.concat(str2)); // 'Hello, World! How are you?'

// 6. includes(substring)
console.log(str.includes("World")); // true

// 7. indexOf(substring)
console.log(str.indexOf("o")); // 4

// 8. lastIndexOf(substring)
console.log(str.lastIndexOf("o")); // 8

// 9. startsWith(substring)
console.log(str.startsWith("Hello")); // true

// 10. endsWith(substring)
console.log(str.endsWith("!")); // true

// 11. slice(start, end)
console.log(str.slice(7, 12)); // 'World'

// 12. substring(start, end)
console.log(str.substring(7, 12)); // 'World'

// 13. substr(start, length) (deprecated)
console.log(str.substr(7, 5)); // 'World'

// 14. toLowerCase()
console.log(str.toLowerCase()); // 'hello, world!'

// 15. toUpperCase()
console.log(str.toUpperCase()); // 'HELLO, WORLD!'

// 16. trim()
const str3 = "   Hello!   ";
console.log(str3.trim()); // 'Hello!'

// 17. trimStart() / trimLeft()
console.log(str3.trimStart()); // 'Hello!   '

// 18. trimEnd() / trimRight()
console.log(str3.trimEnd()); // '   Hello!'

// 19. repeat(count)
console.log("ha".repeat(3)); // 'hahaha'

// 20. replace(search, replacement)
console.log(str.replace("World", "JavaScript")); // 'Hello, JavaScript!'

// 21. replaceAll(search, replacement) (ES2021+)
console.log("aabbcc".replaceAll("b", "B")); // 'aaBBcc'

// 22. split(separator, limit)
console.log(str.split(", ")); // ['Hello', 'World!']

// 23. match(regex)
console.log(str.match(/[A-Z]/g)); // ['H', 'W']

// 24. matchAll(regex) (ES2020+)
const matches = [...str.matchAll(/o/g)];
console.log(matches.map(m => m.index)); // [4, 8]

// 25. padStart(targetLength, padString)
console.log("5".padStart(3, "0")); // '005'

// 26. padEnd(targetLength, padString)
console.log("5".padEnd(3, "0")); // '500'

// 27. valueOf()
console.log(str.valueOf()); // 'Hello, World!'

// 28. toString()
console.log(str.toString()); // 'Hello, World!'

// 29. localeCompare(compareString)
console.log("a".localeCompare("b")); // -1

// 30. normalize([form])
const accented = "\u00E9"; // 'é'
const combined = "e\u0301"; // 'e' + '́'
console.log(accented === combined); // false
console.log(accented.normalize() === combined.normalize()); // true

// 31. search(regex)
console.log(str.search(/World/)); // 7

// 32. toLocaleLowerCase()
console.log(str.toLocaleLowerCase()); // 'hello, world!'

// 33. toLocaleUpperCase()
console.log(str.toLocaleUpperCase()); // 'HELLO, WORLD!'

// 34. anchor(name) (deprecated, for HTML)
console.log("example".anchor("top")); // '<a name="top">example</a>'

// 35. big(), blink(), bold(), fixed(), fontcolor(), fontsize(), italics(), link(), small(), strike(), sub(), sup()
// (deprecated, for HTML)
console.log("text".bold()); // '<b>text</b>'

// Note: Some methods are deprecated and should not be used in modern code.

// Summary:
// - String methods allow you to manipulate, search, and transform string data.
// - Most methods return a new string and do not modify the original string (strings are immutable).
// - Always check browser compatibility for newer methods (like at(), replaceAll(), matchAll()).
// For more details, refer to the MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String







/*
    JavaScript Arrays
    -----------------
    Arrays are ordered collections of values. Each value is called an element, and each element has a numeric position called its index (starting from 0).
    Arrays can hold any type of data: numbers, strings, objects, other arrays, etc.
*/

// Creating Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array("a", "b", "c");
const arr3 = Array.of(5, 6, 7);
const arr4 = Array(3); // [empty × 3]

// Accessing Elements
console.log(arr1[0]); // 1
console.log(arr2[2]); // 'c'

// Modifying Elements
arr1[1] = 20;
console.log(arr1); // [1, 20, 3, 4]

// Array Length
console.log(arr1.length); // 4

// Adding Elements
arr1.push(5); // Add to end
arr1.unshift(0); // Add to start
console.log(arr1); // [0, 1, 20, 3, 4, 5]

// Removing Elements
arr1.pop(); // Remove from end
arr1.shift(); // Remove from start
console.log(arr1); // [1, 20, 3, 4]

// Array Methods

// 1. concat()
const arr5 = arr1.concat([6, 7]);
console.log(arr5); // [1, 20, 3, 4, 6, 7]

// 2. join(separator)
console.log(arr1.join("-")); // '1-20-3-4'

// 3. slice(start, end)
console.log(arr1.slice(1, 3)); // [20, 3]

// 4. splice(start, deleteCount, ...items)
arr1.splice(2, 1, 99); // Remove 1 at index 2, insert 99
console.log(arr1); // [1, 20, 99, 4]

// 5. indexOf(value)
console.log(arr1.indexOf(99)); // 2

// 6. lastIndexOf(value)
console.log([1, 2, 1, 2].lastIndexOf(1)); // 2

// 7. includes(value)
console.log(arr1.includes(20)); // true

// 8. forEach(callback)
arr1.forEach((item, idx) => console.log(idx, item));

// 9. map(callback)
const doubled = arr1.map(x => x * 2);
console.log(doubled); // [2, 40, 198, 8]

// 10. filter(callback)
const filtered = arr1.filter(x => x > 10);
console.log(filtered); // [20, 99]

// 11. reduce(callback, initialValue)
const sum = arr1.reduce((acc, val) => acc + val, 0);
console.log(sum); // 124

// 12. reduceRight(callback, initialValue)
const rightSum = arr1.reduceRight((acc, val) => acc + val, 0);
console.log(rightSum); // 124

// 13. find(callback)
console.log(arr1.find(x => x > 50)); // 99

// 14. findIndex(callback)
console.log(arr1.findIndex(x => x > 50)); // 2

// 15. some(callback)
console.log(arr1.some(x => x < 0)); // false

// 16. every(callback)
console.log(arr1.every(x => x > 0)); // true

// 17. fill(value, start, end)
const filled = [1, 2, 3].fill(0, 1, 3);
console.log(filled); // [1, 0, 0]

// 18. copyWithin(target, start, end)
const arr6 = [1, 2, 3, 4, 5];
arr6.copyWithin(0, 3, 5);
console.log(arr6); // [4, 5, 3, 4, 5]

// 19. flat(depth)
const nested = [1, [2, [3, 4]]];
console.log(nested.flat(2)); // [1, 2, 3, 4]

// 20. flatMap(callback)
const flatMapped = [1, 2, 3].flatMap(x => [x, x * 2]);
console.log(flatMapped); // [1, 2, 2, 4, 3, 6]

// 21. toString()
console.log(arr1.toString()); // '1,20,99,4'

// 22. toLocaleString()
console.log(arr1.toLocaleString()); // '1,20,99,4'

// 23. entries()
for (const [idx, val] of arr1.entries()) 
{
    console.log(idx, val);
}

// 24. keys()
for (const key of arr1.keys()) 
{
    console.log(key);
}

// 25. values()
for (const value of arr1.values()) 
{
    console.log(value);
}

// 26. Array.isArray(obj)
console.log(Array.isArray(arr1)); // true

// Sorting Arrays

// 1. sort()
const nums = [4, 2, 5, 1, 3];
nums.sort(); // Default: converts to string and sorts lexicographically
console.log(nums); // [1, 2, 3, 4, 5]

// Custom sort (numeric)
nums.sort((a, b) => b - a);
console.log(nums); // [5, 4, 3, 2, 1]

// 2. reverse()
nums.reverse();
console.log(nums); // [1, 2, 3, 4, 5]

// Array References

const a = [1, 2, 3];
const b = a; // b references the same array as a
b[0] = 99;
console.log(a); // [99, 2, 3]

// To copy an array (shallow copy):
const c = a.slice();
c[0] = 1;
console.log(a); // [99, 2, 3]
console.log(c); // [1, 2, 3]

// Constant Arrays

const constArr = [1, 2, 3];
constArr[0] = 10; // Allowed: elements can be changed
// constArr = [4, 5, 6]; // Error: cannot reassign the variable

// Nested Arrays (Multidimensional Arrays)
const matrix = 
[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][2]); // 6

// Iterating Nested Arrays
for (let row of matrix)
{
    for (let val of row) 
    {
        console.log(val);
    }
}

// Array Destructuring
const [first, second] = arr1;
console.log(first, second);

// Spread Operator
const arr7 = [...arr1, ...nums];
console.log(arr7);

// Summary:
// - Arrays are ordered, mutable collections of values.
// - Use array methods for adding, removing, searching, transforming, and iterating elements.
// - Arrays are reference types; assignment copies the reference, not the values.
// - Use slice(), spread operator, or Array.from() for shallow copies.
// - Nested arrays allow for multidimensional data structures.
// - Sorting can be customized with a compare function.
// For more details, refer to MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array