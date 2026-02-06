// What is Complexity?

// Complexity measures how complicated or difficult a task is - its level (easy, medium, hard, tough).  
// Examples: Solving Sudoku (easy-medium) vs Rubik's Cube (tough) 
// Finding factors of a number (easier) vs counting primes up to n (tougher)

// ---------------------------------------------------------------------------------------------------------------------------------

// Time Complexity: Key Definition -:

// Time complexity = Amount of time taken (number of operations) as a function of input size n.  
// NOT actual clock time (rich kid's supercomputer vs poor kid's 4GB PC - same code, different hardware)  
// Measures operations/steps (e.g., loop from 1 to n = n operations) 
// Always assume worst case (element found at the end in linear search)  
// Focus on large inputs (small n doesn't need optimization; 1000s/billions of employees need systems)
// -----------------------------------------------------------------------------------------------------------------------------

// Big O Notation (Most Important)

// 3 notations exist, but use Big O (upper bound/worst case) for interviews.  

// Notation	Represents	Example
// Big O (O)	Worst case (upper bound)	Max 10 min trip 
// Theta (Θ)	Average case	6-7 min trip 
// Omega (Ω)	Best case (lower bound)	Min 10 min 
// Why Big O? Interviews focus on worst case. 

// -------------------------------------------------------------------------------------------------------------------
// Time Complexity Types (From Best to Worst)
// Here's the hierarchy with examples:

// Complexity	Name	When it Happens	Example
// O(1)	Constant	1 operation, or fixed n (e.g., n=10 given)  	Sum formula: 
// n
// (
// n
// +
// 1
// )
// /
// 2
// n(n+1)/2 
// O(log n)	Logarithmic	n halves each step (binary search)  	n=500 → ~9 operations 
// O(n)	Linear	Loop 1 to n, n operations  	Linear search (worst case) 
// O(n log n)		Outer loop n × inner log n  	Sort + binary search per element
// O(n²)	Quadratic	Nested loops (n × n)  	Strong number (digits loop × factorial loop) 
// O(2ⁿ)	Exponential	2ⁿ operations (n=5 → 32 ops) 	Subsets, recursion 
// O(n!)	Factorial	n! operations (n=5 → 120 ops) 	Permutations 

// -----------------------------------------------------------------------------------------------------------
