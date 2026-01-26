// If-Else Refresher

// Key Rules:
// Condition: Must evaluate to true or false (e.g., 12 > 13 = false, 112 > 13 = true)  
// If is independent: Runs alone if no else 
// Else depends on If: Syntax error if else without if 
// Non-conditions (like 12 or "Harsh") always evaluate to true 


// 1. Valid Voter Problem

// Problem: Check if age ≥ 18 (valid voter)

// let ans = prompt("What is your age?");        // Always returns STRING  
// ans = Number(ans);                           // Convert to number (blue color in console)  
// if (isNaN(ans)) {                            // Check invalid input  
//     console.log("Wrong input");
// } else if (ans >= 18) {
//     console.log("You can vote");
// } else {
//     console.log("You cannot vote");
// }

// Key Learnings:
// prompt() always returns string (black color) 
// Use Number() or parseInt() for conversion 
// isNaN() checks if value is Not a Number 
// "Harsh" → NaN → caught by isNaN() check 
// --------------------------------------------------------------------------------------------------
