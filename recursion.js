//  Recursion :-

// Recursion in JavaScript is a technique where a function calls itself until a base case is met. It’s often used for problems that can be broken down into smaller, similar subproblems, such as factorials, Fibonacci sequences, or tree traversal.
//                                                          or

// Function calls itself repeatedly until base case (stopping point). 

// Recursion Examples (JavaScript Code)

// 1. Print "Hello World" n Times

// function temp(n) {
//   if (n === 0) return;  // Base case
//   console.log("Hello World");
//   temp(n - 1);  // Recursive call
// }
// temp(5);
// Prints during forward pass (5 pushes, then pops).
//----------------------------------------------------------------------------------------------------------------------------------

// Key Points
// - Base Case: Prevents infinite recursion.
// - Recursive Case: Breaks the problem into smaller parts.
// - Call Stack: Each recursive call is stored until the base case is reached, then results are returned back up.

// Pros
// - Elegant solutions for problems like tree traversal, sorting, and mathematical sequences.
// - Makes code more readable for divide-and-conquer problems.

// Cons
// - Can be less efficient due to stack usage.
// - Risk of stack overflow if the base case is missing or incorrect.

// ----------------------------------------------------------------------------------------------------------------------------------

// 2. Print n to 1 (In desending Order)

// function print(n) {
//   if (n === 0) return;
//   console.log(n);  // Before recurse
//   print(n - 1);
// }
// Prints forward: 5 4 3 2 1.
// ----------------------------------------------------------------------------------------------------------------------------

 

