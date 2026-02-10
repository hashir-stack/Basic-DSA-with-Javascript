// 1. Bubble Sort :-

// Core Idea: Treat the first element as the "bubble element" and move it to its correct sorted position by comparing with right neighbors. Repeat for each phase.  

// Key Steps (Example: [10, 5, 1, 12, 3])
// n elements → n-1 phases (last element auto-sorts).  

// Each phase: One bubble element bubbles to its correct position.

// Compare bubble with right neighbor.

// If bubble > right: SWAP.

// If bubble < right: PASS (no swap).

// Phase-by-Phase Execution
// plaintext
// Copy
// Phase 1: [10, 5, 1, 12, 3] → bubble=10
// 10>5? SWAP → [5, 10, 1, 12, 3]
// 10>1? SWAP → [5, 1, 10, 12, 3]
// 10<12? PASS → [5, 1, 10, 12, 3]
// 10>3? SWAP → [5, 1, 3, 12, 10] → 12 sorted  

// Phase 2: [5, 1, 3, 12, 10] → bubble=5 (ignore sorted 12)
// 5>1? SWAP → [1, 5, 3, 12, 10]
// 5<12? PASS, 5>3? SWAP → [1, 3, 5, 12, 10] → 10 sorted  

// Phase 3-4: Continue until [1, 3, 5, 10, 12]   
// Code Structure (Nested Loops like Pattern Programming)

// let arr = [10, 5, 1, 12, 3];
// let n = arr.length;

// (Ascending Order)
// Outer loop(i): Controls PHASES (n-1 times)
// for(let i = 0; i < n-1; i++) {  // i=0,1,2,3 (4 phases)  
    
    // Inner loop(j): Controls OPERATIONS (decreasing each phase)
//     for(let j = 0; j < n-1-i; j++) {  // Phase1: j<4, Phase2: j<3, etc.  
        
//         // Compare & swap bubble
//         if(arr[j] > arr[j+1]) {
//             // Swap using temp
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;  
//         }
//     }
// }
// console.log(arr); // [1, 3, 5, 10, 12]

// ( Descending Order)
// let arr = [10, 5, 1, 12, 3];
// let n = arr.length;

// for (let i = n - 1; i > 0; i--) {
//   for (let j = 0; j < i; j++) {
//     if (arr[j] < arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }

// console.log(arr);

                                    // or
// let arr = [10, 5, 1, 12, 3];
// let n = arr.length;
// for(let i = 0 ; i < n -1 ; i++){
//     for(let j =0 ; j < (n-1)-i;j++){
//         if (arr[j] < arr[j + 1]) {
// //       let temp = arr[j];
// //       arr[j] = arr[j + 1];
// //       arr[j + 1] = temp;
// //     }
//     }
// }

// console.log(arr);
 
// Time Complexity: 
// O(n2)O(n2)
//  (sum of arithmetic series: (n-1) + (n-2) + ... + 1 = n(n+1) / 2 ≈ n2/2

// ------------------------------------------------------------------------------------------------

// Selection Sort:-

// Selection Sort is one of the simplest sorting algorithms. The idea is:
// - Find the minimum (or maximum) element in the unsorted part of the array.
// - Place it at the beginning of the unsorted part.
// - Repeat until the whole array is sorted.
// i always start form zero index and j from i+1.

// Key Steps (Example: [10, 5, 1, 12, 9])

// Initial: [10, 5, 1, 12, 9] | Sorted: [], Unsorted: [10,5,1,12,9]

// Phase 1 (i=0): Find min=1 (index=2) in unsorted → SWAP arr[0]↔arr[2]
// Result: [1, 5, 10, 12, 9] | Sorted: [1], Unsorted: [5,10,12,9]  

// Phase 2 (i=1): Find min=5 (index=1, already min) → No swap
// Result: [1, 5, 10, 12, 9] | Sorted: [1,5], Unsorted: [10,12,9]

// Phase 3 (i=2): Find min=9 (index=4) → SWAP arr[2]↔arr[4]
// Result: [1, 5, 9, 12, 10] | Sorted: [1,5,9], Unsorted: [12,10]  

// Phase 4 (i=3): Find min=10 → SWAP arr[3]↔arr[4]
// Final: [1, 5, 9, 10, 12]  

// Code Example (Ascending Order)
// let arr = [10, 5, 1, 12, 3];
// let n = arr.length;

// for (let i = 0; i < n - 1; i++) {
//   let minIndex = i;
//   for (let j = i + 1; j < n; j++) {
//     if (arr[j] < arr[minIndex]) {
//       minIndex = j;
//     }
//   }
//   // swap
//   let temp = arr[minIndex];
//   arr[minIndex] = arr[i];
//   arr[i] = temp;
// }

// console.log(arr); // [1, 3, 5, 10, 12]

// Dry Run (Step by Step)
// Array: [10, 5, 1, 12, 3]
// - Pass 1 (i=0): Minimum is 1. Swap with 10. → [1, 5, 10, 12, 3]
// - Pass 2 (i=1): Minimum in rest is 3. Swap with 5. → [1, 3, 10, 12, 5]
// - Pass 3 (i=2): Minimum in rest is 5. Swap with 10. → [1, 3, 5, 12, 10]
// - Pass 4 (i=3): Minimum in rest is 10. Swap with 12. → [1, 3, 5, 10, 12]
// Sorted array achieved.

// Descending Order
// Just flip the comparison:
// if (arr[j] > arr[maxIndex]) {
//   maxIndex = j;
// }

// Selection Sort is easy to understand but not efficient for large datasets (O(n^2) time complexity).











 