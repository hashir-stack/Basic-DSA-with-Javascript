// Cyclic Sort Algorithm 

// When to Use Cyclic Sort?

// Cyclic Sort is a clever sorting method for arrays containing numbers in a specific range: 1 to n or 0 to n-1, where n is the array length. It's efficient for in-place sorting of such constrained data.

// ------------------------------------------------------------------------------------------------------------------------------

// Key Observation: In a sorted array:

// For 1 to n range: Each element's correct index = element - 1

// For 0 to n-1 range: Each element's correct index = element itself 