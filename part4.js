// 1. What is an Array?
// Arrays are collections of values stored in square brackets [] in JavaScript.  

// Can hold multiple values of different data types (numbers, strings, booleans, objects)

// Dynamic size - grows/shrinks automatically (unlike fixed-size arrays in C++/Java)

// Accessed via zero-based indexing: arr[0], arr[1], etc.  

// Example:

// let arr = [100, 10, 20, 30, "Sheryians", false, {name: "Harsh"}];
// console.log(arr[1]); // 10 (second element, index 1)

// 2. Key Array Methods

// push(): Add element to end 

// pop(): Remove element from end 

// Direct indexing: arr[index] = value to set value 
// -------------------------------------------------------------------------------------------------

// Dynamic Nature Demo:

// let arr = [10, 20, 30];
// arr[7] = 150;                               // Creates empty slots (undefined) at indices 4,5,6
// console.log(arr); //                        output=> [10, 20, 30, undefined, undefined, undefined, undefined, 150]