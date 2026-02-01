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
// ----------------------------------------------------------------------------------------------------------------

// 7. Find Second Maximum
// Two variables approach 
 
// let arr = [10, 30, 40, 56, 43, 78];
// let max = Math.max(arr[0], arr[1]);
// let secMax = Math.min(arr[0], arr[1]);

// for(let i = 2; i < arr.length; i++) {
//     if(arr[i] > max) {
//         secMax = max;
//         max = arr[i];
//     }
//     else if(arr[i] > secMax && arr[i] != max) { // Corner case handling
//         secMax = arr[i];
//     }
// }
// Corner cases: Handle duplicates (40,40 → secMax=30, not 40) 

// let arr = [10, 30, 40, 56, 43, 78];
// let max = Math.max(arr[0], arr[1]);
// let secMax = Math.min(arr[0], arr[1]);

// for(let i = 2; i < arr.length; i++) {
//     if(arr[i] > max) {
//         secMax = max;
//         max = arr[i];
//     }
//     else if(arr[i] > secMax && arr[i] < max) { // Corner case handling
//         secMax = arr[i];
//     }
// }
// - < max → ensures second max is strictly smaller than the max (more explicit and safer).

// 🔑 Simple Difference:
// - != max → avoids duplicates of the maximum.
// - < max → ensures second max is strictly smaller than the max (more explicit and safer).
// 👉 In practice, both usually give the same result, but the second version (< max) is more correct and clear, because "second maximum" should always be less than the maximum.
// -------------------------------------------------------------------------------------------------------------
// 8. Reverse Array (Two Methods)

// Method 1: Extra Space (O(n) space) 

// let arr = [10, 20, 30, 40, 50];
// let temp = new Array(arr.length);

// for(let i = 0, j = arr.length-1; i < arr.length; i++, j--) {
//     temp[i] = arr[j];
// }

// Method 2: In-place Swap (O(1) space - BETTER) 

// let arr = [10, 20, 30, 40, 50];
// let i = 0;
// let j = arr.length - 1;

// while(i < j) {
//     // Swap arr[i] and arr[j]
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
// }
// -----------------------------------------------------------------------------------------------------------------

// 9. Move Zeros to Left (Two Pointer)
// Two pointers start together 

// let arr = [1, 0, 1, 0, 0, 1, 1, 0];
// let i = 0, j = 0;

// while(i < arr.length) {
//     if(arr[i] == 0) { // Found zero
//         // Swap with j
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         j++;
//     }
//     i++;
// }
// // Result: [0,0,0,0,1,1,1,1]

// Logic: i searches for 0s, j marks next 1 position 

// --------------------------------------------------------------------------------------------------------------

// 10. Homework Problems
// Minimum element (similar to max, use <)

// Second minimum (similar to second max, use >)

// Move negatives to left, positives to right (same as zeros/ones, use < 0) 

// -----------------------------------------------------------------------------------
// Key Takeaways

// Arrays are dynamic in JS (no fixed size issues)
// Zero-based indexing always
// Two-pointer techniques master for partitioning problems
// Accumulator outside loop for sum/max operations
// In-place operations preferred over extra space 

// ---------------------------------------------------------------------------------------------

// Advance Array Questions And Solutions:

// Left Rotation by 1 Element
// Problem: Rotate array [1, 2, 3, 4, 5] left by 1 → [2, 3, 4, 5, 1]. Each element shifts left; first goes to end.  

// Intuition (Hit & Trial):
// Start from index 0 (i=0).
// Copy arr[i+1] to arr[i], increment i.
// Loop until i < arr.length - 2 (avoids index out of bounds at last element).
// First element (lost during shifts) is copied to end: copy = arr[0]; arr[arr.length-1] = copy. 

// Code:

// let arr = [1,2,3,4,5];
// let copy = arr[0]; //1
// for(let i=0; i < arr.length-1; i++) {
//     arr[i] = arr[i+1];
// }
// arr[arr.length-1] = copy;
// console.log(arr); // [2,3,4,5,1]

// Key Insight: Shifting right-to-left preserves the first element via copy.

// -------------------------------------------------------------------------------------
// Right Rotation by 1 Element
// Problem: Rotate [1, 2, 3, 4, 5] right by 1 → [5, 1, 2, 3, 4]. Each element shifts right; last goes to start.  

// Intuition:

// Wrong approach: Starting from i=0 fails (overwrites propagate incorrectly).
// Correct: Start from last index (i = arr.length-1), shift left-to-right.
// Copy arr[i-1] to arr[i], decrement i.
// Loop from i=arr.length-1 down to i>0 (avoids -1 index).
// Last element (lost) copied to start: copy = arr[arr.length-1]; arr[0] = copy. 

// Code:

// let arr = [1,2,3,4,5];
// let copy = arr[arr.length-1];
// for(let i=arr.length-1; i>0; i--) {
//     arr[i] = arr[i-1];
// }
// arr[0] = copy;
// console.log(arr); // [5,1,2,3,4]       
// ---------------------------------------------------------------------------------------
// Nested Looping (Key Prerequisite)
// Concept: Outer loop runs repeated tasks; inner loop runs sub-tasks inside each iteration.  

// Example: Print "Hello" 3 times, 4 times (12 total).

// for(let j=1; j<=4; j++) {  // Outer: 4 executions
//     console.log(`${j} Execution`);
//     for(let i=1; i<=3; i++) {  // Inner: 3 "Hello" per execution
//         console.log("Hello");
//     }
// }
// Execution Flow:

// j=1: Print "1 Execution" → Inner loop: Hello x3

// j=2: Print "2 Execution" → Inner: Hello x3 (i resets to 1)

// And so on. Total: 4 outer × 3 inner = 12 prints. 

// Use Case: Repeat a full process (like rotation by 1) multiple times.
                                     
