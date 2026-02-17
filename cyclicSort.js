// Cyclic Sort Algorithm 

// When to Use Cyclic Sort?

// Cyclic Sort is a clever sorting method for arrays containing numbers in a specific range: 1 to n or 0 to n-1, where n is the array length. It's efficient for in-place sorting of such constrained data.

// ------------------------------------------------------------------------------------------------------------------------------

// Key Observation: In a sorted array:

// For 1 to n range: Each element's correct index = element - 1

// For 0 to n-1 range: Each element's correct index = element itself 

// ------------------------------------------------------------------------------------------------------------------------------

// Core Algorithm (1 to n range)
// Start pointer i at index 0

// For each i:

// Calculate correct index = arr[i] - 1

// If arr[i] != arr[correct index], swap arr[i] and arr[correct index]

// Do NOT increment i after swap (stay to check new element at i)

// Only increment i++ when arr[i] is already at correct position 

// Example (Unsorted: [6,5,8,1,2,1,4,3]):

// Initial:  [6,5,8,1,2,1,4,3]  i=0
// i=0: 6 should be at index 5 → swap → [1,5,8,1,2,6,4,3]
// i=0: 1 should be at index 0 ✓ → i++
// i=1: 5 should be at index 4 → swap → [1,2,8,1,5,6,4,3]
// ...continues until sorted: [1,2,3,4,5,6,7,8] 