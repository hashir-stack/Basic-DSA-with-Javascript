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

// -------------------------------------------------------------------------------------------------------------

// 3. Array Definition (Data Structure)

// Array = Linear Data Structure that stores multiple values continuously in memory  

// Linear: One after another (vs Tree/Graph = non-linear) 
// Continuous: Adjacent memory locations (vs LinkedList = non-contiguous) 


// Memory: [10][20][30][40]  ← Continuous (Array)
// vs     [10]xxx[20]xx[30]  ← Non-continuous (LinkedList)

// ----------------------------------------------------------------------------------------------------------------

// 4. Taking Input Dynamically (from prompt)

// Problem: Take 5 values from user and store in array.

// Naive way (bad for large arrays):

// arr[0] = prompt("Enter value 1");
// arr[1] = prompt("Enter value 2");
// // ... repeat 5 times ❌
// Loop way (scalable):

// let arr = [];
// for(let i = 0; i < 5; i++) {
//     arr[i] = Number(prompt("Enter value"));
// }
// Key: i < arr.length iterates correctly from 0 to length-1 

// -------------------------------------------------------------------------------------------------------------

// 5. Sum of Array Elements
// Concept: Accumulator variable outside loop 

// let arr = [10, 20, 30, 40, 50];
// let sum = 0; // ← Outside loop (CRITICAL)         (agar array loop  ke andar raha to wapas se wo empty  or zero  ho jayega)

// for(let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]; // Accumulate
// }
// console.log(sum); // 150
// Why outside? Inside loop = resets to 0 each iteration 
// --------------------------------------------------------------------------------------------------------------

// 6. Find Maximum Element
// Algorithm: Assume first element is max, compare with rest 


// let arr = [13, 78, 2, 100, 45];
// let max = arr[0]; // Start with first

// for(let i = 1; i < arr.length; i++) {
//     if(arr[i] > max) {
//         max = arr[i];
//     }
// }
// console.log(max); // 100