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