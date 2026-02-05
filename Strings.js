// 1. What is a String?

// Definition: A string is a group/collection/sequence/combination of characters enclosed in double quotes ("") or single quotes ('') in JavaScript.

// Without quotes, JavaScript treats it as a variable (causes "not defined" error). 
// Examples: "ali", 'Sheris' are strings; ali (without quotes) is undefined. 
// Strings can represent: names, descriptions, addresses, data. 
// --------------------------------------------------------------------------------------------

// 2. String vs Array

// Strings behave like arrays (accessible via indexing: s[2]), but are NOT arrays.  

// Proof they're not arrays:

// Arrays have push(), pop() methods → Strings don't (s.push() gives "not a function" error).  

// Arrays are mutable (change original: arr[1] = 30 works). 

// Strings are immutable (s[1] = 'y' doesn't change original string).

// mutable means doesn't change its original state.
// -------------------------------------------------------------------------------------------------

// 3. Immutability in Detail

// Strings maintain their original state - changes require reassignment. 
// s = s + " World" creates a new string (old string unchanged).  
// Reassignment = new memory allocation.

// ----------------------------------------------------------------------------------------------

// 4. Key String Properties & Methods
// Method/Property          	      Description                                     	Example
// length	                      Property (no ()), returns character count	            s.length → 6 for "Sheris" 
// slice(start, end)	          Extracts substring (end exclusive), 
//                                supports negative indices	                            s.slice(2,5) → "eri"; s.slice(-4, -1) → "ris"  
// substring(start, end)	      Like slice but only positive indices, end exclusive	s.substring(2,5) → "eri" 
// toUpperCase()	              Converts to uppercase	                                "sheris".toUpperCase() → "SHERIS" 
// toLowerCase()	              Converts to lowercase	                                "SHERIS".toLowerCase() → "sheris" 
// concat()	                      Joins strings	                                        "Sheris".concat(" World") → "Sheris World" 
// trim()	                      Removes leading/trailing spaces	                    " Sheris ".trim() → "Sheris"  
// charAt(index)	              Gets character at index	                            s.charAt(2) → "e" 
// charCodeAt(index)	          Returns Unicode value of character	                "A".charCodeAt(0) → 65

// Other methods (try yourself): 
// indexOf(), 
// lastIndexOf(), 
// includes(), 
// startsWith(), 
// endsWith(), 
// replace(), 
// replaceAll(), 
// split(). 

// -----------------------------------------------------------------------------------------------------------------
// 5. Unicode/ASCII Values 
// Capital A-Z: 65-90

// Small a-z: 97-122

// Digits 0-9: 48-57

// "A".charCodeAt(0) → 65; "a".charCodeAt(0) → 97  

// Homework: Research Unicode characters & their importance.
// -----------------------------------------------------------------------------------------------------------------

// Problem 1: Print Each Character on New Line

// let s = "Sheris";
// for(let i = 0; i < s.length; i++) {
//     console.log(s[i]);  
// }  
// OutPut =>// 
// S,
// h, 
// e, 
// r,
// i,
// s
// --------------------------------------------------------------------------------------------------------

// Problem 2: Print Characters in Reverse (Individual)

// for(let i = s.length-1; i >= 0; i--) {
//     console.log(s[i]);  output=> // 
//                                      s, 
//                                      i, 
//                                      r, 
//                                      e, 
//                                      h, 
//                                      S
// }  

// ------------------------------------------------------------------------------------------------------
// Problem 3: Print Complete String in Reverse

// let reverse = "";
// for(let i = s.length-1; i >= 0; i--) {
//     reverse += s[i];  // "sirehS"
// }
// console.log(reverse);

// Note: Inefficient (reassigns memory n times for length n)

// -------------------------------------------------------------------------------------------------------

// Problem 4: Check Palindrome (Two Ways)

// Naive (Inefficient):

// let s = prompt("Enter string");
// let reverse = "";
// for(let i = s.length-1; i >= 0; i--) {
//     reverse += s[i];
// }
// console.log(s === reverse ? "Palindrome" : "No Palindrome");

// -------------------------------------------------------------------------------------------------------------------------------

// Efficient (Two Pointer - O(n) time, O(1) space):

// let s = prompt("Enter string");
// let i = 0;
// let j = s.length - 1;
// let isPalindrome = true;

// while(i < j) {
//     if(s[i] !== s[j]) {
//         isPalindrome = false;
//         break;
//     }
//     i++;
//     j--;
// }
// console.log(isPalindrome ? "Palindrome" : "No Palindrome");

// -------------------------------------------------------------------------------------------------------------------------
// Problem 5: Toggle Case of Each Character

// let s = prompt("Enter string");
// let toggle = "";

// for(let i = 0; i < s.length; i++) {
//     let charCode = s.charCodeAt(i);
    
//     if(charCode >= 65 && charCode <= 90) {  // Capital
//         toggle += String.fromCharCode(charCode + 32);  // +32 = small
//     } 
//     else if(charCode >= 97 && charCode <= 122) {  // Small
//         toggle += String.fromCharCode(charCode - 32);  // -32 = capital
//     } 
//     else {
//         toggle += s[i];  // Non-letter
//     }
// }
// console.log(toggle); 

//                                                  OR

// Easy way to understand

// let s = prompt("Enter string");
//  let toggle = "";

//  for(let i = 0; i < s.length; i++) {
//      let charCode = s.charCodeAt(i);
//      let strToggle = s[i];
//     if(charCode >= 65 && charCode <= 90) {  // Capital
//          toggle += strToggle.toLowerCase()  //  small 
//     }else if(charCode >= 97 && charCode <= 122) {  // Small
//          toggle += strToggle.toUpperCase()  // capital
//      } 
//      else {
//         toggle += s[i];  // Non-letter
//      }
//  }
//  console.log(toggle);

// Program 1 (using charCodeAt and String.fromCharCode)
// - Pros:
// - Shows the underlying ASCII logic clearly (+32 for lowercase, -32 for uppercase).
// - Useful for learning how character codes work.
// - Slightly faster at a low level since it avoids extra function calls (toLowerCase() / toUpperCase()).
// - Cons:
// - Less intuitive for beginners—requires remembering ASCII ranges and offsets.
// - More error-prone if extended to non-English alphabets or Unicode characters.
// - Harder to maintain and understand at a glance.

// Program 2 (using toLowerCase() and toUpperCase())
// - Pros:
// - Much easier to read and understand—no need to memorize ASCII values.
// - More maintainable and beginner-friendly.
// - Works reliably with Unicode and extended alphabets (not just A–Z).
// - Cons:
// - Slightly less efficient due to function calls, but the difference is negligible in real-world use.
// - Doesn’t explicitly teach ASCII manipulation, so less educational for low-level learning.
// Verdict
// - For learning ASCII and character codes → Program 1 is better.
// - For practical, clean, and maintainable code → Program 2 is better.
// Since you’re refining your skills and aiming for clarity and scalability, Program 2 is the better choice in real-world projects.

// ----------------------------------------------------------------------------------------------
