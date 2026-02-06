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
// Graph view (steepness shows growth):

// Constant: Flat line 

// Log n: Shallow curve 

// Linear: Straight rise 

// n log n: Between n & n² 

// n²: Steeper 

// Exponential/Factorial: Almost vertical

// -----------------------------------------------------------------------------------------------------------
// Calculating Time Complexity from Code
// Rules:

// Single loop 1→n: O(n) 

// Nested loops: Multiply (n × n = n²) 

// Parallel loops: Add (n + n = 3n → O(n)) 

// Equations: Drop constants/low-degree terms, keep highest (3n²/2 + n log n + n → O(n²))  

// Example: Outer loop n, inner loop i→n (n-1 + n-2 + ... ≈ n²/2 → O(n²)) 

// ---------------------------------------------------------------------------------------------------------------

// Avoiding TLE (Time Limit Exceeded)
// Check constraints (n ≤ 10^x) to pick algorithm.  

// n Constraint	Max Allowed Complexity
// ≤ 10² (100)	O(n!) 
// ≤ 10³ (1K)	O(n⁴) 
// ≤ 10⁴ (10K)	O(n²) 
// ≤ 10⁵ (100K)	O(n log n) 
// ≤ 10⁶ (1M)	O(n) 
// ≤ 10⁸ (100M)	O(log n) 
// ≤ 10⁹ (1B)	O(1) 
// Trick: n ≤ 10^x → max complexity ~ x (e.g., 10^4 → n²). 
