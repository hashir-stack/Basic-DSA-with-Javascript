// Binary Search Algorithm :-

// Binary search is the fastest searching algorithm, much better than linear search. It works only on sorted data (ascending or descending order).  

// Key requirement: Data must be sorted. Even if data looks unsorted in some cases, specific situations allow binary search (explained later).

// -------------------------------------------------------------------------------------------------------------------------------

// How Binary Search Works
// Start with a sorted array and a target value to find (e.g., target = 67). 

// Find the middle element (mid) using:

// mid = (first + last)/2

// (Use Math.floor() for integer division).  

// Compare mid element with target 3 possible cases:  

// Case 1: mid == target → Found! Return mid index. 

// Case 2: mid > target → Target is on left side (discard right half, set last = mid - 1).  

// Case 3: mid < target → Target is on right side (discard left half, set first = mid + 1).  

// Repeat until found or first > last (not found, return -1). 

// ------------------------------------------------------------------------------------------------------------------

// Step-by-Step Examples

// Example 1: Target = 67 (found quickly)

// Array indices: 0 to 10, mid=5 (67? No, < target) → first=6

// New mid=8 → 67 found at index 8.  

// Example 2: Target = 25

// mid=5 (67 > 25) → last=4

// mid=3 (still >25) → adjust window → found at index 7.  

// Not Found Case: If first > last after loop, return -1.