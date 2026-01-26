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


// 2. Shop Discount Problem

// Problem: Calculate payable amount based on bill ranges
// 0-5000: 0% discount
// 5001-7000: 5% discount  
// 7001-9000: 10% discount
// >9000: 20% discount 


// Method 1 => Brute Force (Repetitive):

// let amount = Number(prompt("What is the final amount?"));  
// if (amount > 0 && amount <= 5000) {
//     let payable = amount;  // 0% discount  
//     console.log(`Payable: ${payable}`);
// } else if (amount > 5000 && amount <= 7000) {
//     let discount = Math.floor((5 * amount) / 100);
//     let payable = amount - discount  
//     console.log(`Payable: ${payable}`);
// }
// // ... continue for other ranges  



// Efficient Approach (DRY):

// let discount = 0;  // Initialize  
// if (amount > 0 && amount <= 5000) {
//     discount = 0;
// } else if (amount > 5000 && amount <= 7000) {
//     discount = 5;
// } else if (amount > 7000 && amount <= 9000) {
//     discount = 10;
// } else {
//     discount = 20;
// }
// let payable = amount - Math.floor((discount * amount) / 100);

// Pro Tip: Range questions common in interviews (movie ratings, grades)

// -----------------------------------------------------------------------------------------------------------------------------