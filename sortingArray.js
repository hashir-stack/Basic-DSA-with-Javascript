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
 
// Time Complexity: 
// O(n2)O(n2)
//  (sum of arithmetic series: (n-1) + (n-2) + ... + 1 = n(n+1) / 2 ≈ n2/2





 