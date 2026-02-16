// Merge Sort Notes: Divide and Conquer Algorithm (JavaScript Implementation)
  
// Core Concept: Merge Sort is a divide and conquer algorithm that breaks down an array into smaller sorted partitions, then merges them back into a fully sorted array.   It's efficient and stable, favored in coding interviews

// How It Works
// - Divide: Recursively split the array into halves until each subarray has one element.
// - Conquer: Merge the subarrays back together in sorted order.
// - Combine: The merge step ensures the final array is sorted

// --------------------------------------------------------------------------------------------------------------

// 2. Merge Step (Conquer) - The Key Insight  

// Goal: Merge two sorted partitions in the same array into one sorted section using extra space.

// Steps:

// Given array with first, mid, last pointers (left partition: first to mid; right: mid+1 to last).  

// Create temp array of size last - first + 1.  

// Use 3 pointers:

// i = first (left start)

// j = mid + 1 (right start)

// k = 0 (temp index)  

// Compare arr[i] and arr[j], copy smaller to temp[k], increment pointers.  

// When one pointer exhausts (i > mid or j > last), copy remaining from other partition.  

// Copy temp back to original array (first to last).  

// Example (array: [1,2,8,9,4,5,12,20]):

// Left: [1,2,8,9]  Right: [4,5,12,20]
// Temp: [1,2,4,5,8,9,12,20] → Copy back   
// Merge Function Code:

// function conquer(arr, first, mid, last) {
//     let temp = new Array(last - first + 1);
//     let i = first, j = mid + 1, k = 0;
    
//     while (i <= mid && j <= last) {
//         if (arr[i] <= arr[j]) {
//             temp[k++] = arr[i++];
//         } else {
//             temp[k++] = arr[j++];
//         }
//     }
    
//     while (i <= mid) temp[k++] = arr[i++];
//     while (j <= last) temp[k++] = arr[j++];
    
//     // Copy back
//     for (let p = 0, t = first; p < temp.length; p++, t++) {
//         arr[t] = temp[p];
//     }
// }   

// --------------------------------------------------------------------------------------------------------

// 3. Divide Step (Recursion)  
// Process:

// Calculate mid = Math.floor((first + last) / 2).  

// Base case: If first >= last, return (single element is sorted).  

// Recurse: divide(arr, first, mid) → divide(arr, mid+1, last).  

// Backtrack: Merge sorted partitions

// Full Divide Function:

// function divide(arr, first, last) {
//     if (first >= last) return;        (Base Case)
    
//     let mid = Math.floor((first + last) / 2);
//     divide(arr, first, mid);
//     divide(arr, mid + 1, last);
//     conquer(arr, first, mid, last);
// }
// ------------------------------------------------------------------------------------------------------

// Usage:

// let arr = [8,2,1,9,5,12,4,20];
// divide(arr, 0, arr.length - 1);
// console.log(arr); // [1,2,4,5,8,9,12,20]   
// 4. Visual Division Process  
// plaintext
// Copy
// Original: [8,2,1,9,5,12,4,20]
//      ↓ mid=3.5 → 3
// L: [8,2,1,9]     R: [5,12,4,20]
//  ↓ mid=1          ↓ mid=5
// [8,2] [1,9]    [5,12] [4,20]
//  ↓      ↓       ↓      ↓
// [8][2] [1][9] [5][12] [4][20]  ← Base case (single elements sorted)
//  ↑      ↑       ↑      ↑
// Merge pairs → larger merges → fully sorted 

// ----------------------------------------------------------------------------------------------------------
// 5. Time & Space Complexity

// Divide: O(logn) levels (halving each time, like binary search).
// Merge:O(n) work per level (linear scan). 
// Total:O(nlogn) (all cases: best, average, worst).
// Space: O(n) (temp array per merge).

// Why Efficient? Consistent performance, stable sort, predictable. 
// 
// ---------------------------------------------------------------------------------------------------------
// Full code for solving the problem :-

// let arr1 = [38, 27, 43, 3, 9, 82, 10];

// function mergere (arr,first,mid,last){
//     let temp = new Array(last - first +1);
//     let i = first; j=mid+1 ;k=0;

//     while(i <= mid && j<= last){
//         if(arr[i]< arr[j]){
//             temp[k] = arr[i]
//             k++;i++
//         }else{
//             temp[k] = arr[j];
//             k++;j++
//         }
//     }
//     while(i <= mid){
//         temp[k] = arr[i]
//             k++;i++
//     }
//     while(j <= last){
//         temp[k] = arr[j]
//             k++;j++
//     }

//     let p =0; t =first;
//     while(p < temp.length){
//         arr[t] = temp[p];
//         t++;p++
//     }
// }

// function divide (arr ,first ,last){
//     if(first>= last) return
//     let mid  = Math.floor((last+first)/2);
//     divide(arr,first,mid) //left side
//     divide(arr,mid+1,last) //right
//     mergere(arr,first,mid,last);
//     return arr;
// }

// console.log("Unsorted Array =>",arr1);
// console.log("Sorted array =>",divide(arr1,0,arr1.length-1))
