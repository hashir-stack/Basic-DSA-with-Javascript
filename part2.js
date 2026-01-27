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
//Problem :
// Age-Based Ticket Pricing
// You’re building a cinema app:
// - Children (age 0–12) → ₹200
// - Teenagers (13–19) → ₹300
// - Adults (20–59) → ₹500
// - Seniors (60+) → ₹250

// let age = 65;
// if (age >= 0 && age <= 12) {
//     console.log("Ticket Price: ₹200");
// } else if (age >= 13 && age <= 19) {
//     console.log("Ticket Price: ₹300");
// } else if (age >= 20 && age <= 59) {
//     console.log("Ticket Price: ₹500");
// } else if (age >= 60) {
//     console.log("Ticket Price: ₹250");
// } else {
//     console.log("Invalid age entered");
//}

//-----------------------------------------------------------------------------------------------------------------------------------------
// Electricity Bill Problem (Tiered Pricing)
// Slab Rates:
// 0-100 units: ₹4.2/unit
// 101-200 units: ₹6/unit  
// 201-400 units: ₹8/unit
// >400 units: ₹13/unit  

// Bottom-to-Top Approach (Key Insight):

// let unit = Number(prompt("Enter electricity units"));
// let amount = 0;
// if (unit > 400) {
//     amount += (unit - 400) * 13;  // Highest slab first  
//     unit = 400;  // Reset for next slab
// }
// if (unit > 200) {
//     amount += (unit - 200) * 8;
//     unit = 200;
// }
// if (unit > 100) {
//     amount += (unit - 100) * 6;
//     unit = 100;
// }
// amount += unit * 4;  // Base slab  
// console.log(amount);
// Example: 700 units

// 700-400 = 300 × 13 = 3900 (unit=400)
// 400-200 = 200 × 8 = 1600 (unit=200)
// 200-100 = 100 × 6 = 600 (unit=100)
// 100 × 4 = 400
// Total: 6500 
// Why Bottom-to-Top? Natural progression, handles partial slabs correctly

// Another Way to solve

// function calculateBill(units) {
//     let bill = 0;

//     if (units <= 100) {
//         bill = units * 4.2;
//     } else if (units <= 200) {
//         bill = (100 * 4.2) + ((units - 100) * 6);
//     } else if (units <= 400) {
//         bill = (100 * 4.2) + (100 * 6) + ((units - 200) * 8);
//     } else {
//         bill = (100 * 4.2) + (100 * 6) + (200 * 8) + ((units - 400) * 13);
//     }

//     return bill;
// }

// // Example usage:
// let unitsConsumed = 450;
// console.log("Total Bill: ₹" + calculateBill(unitsConsumed));
//----------------------------------------------------------------------------------------------------------------------------------------
//INR Denomination Problem
// Problem: Break amount into notes (500 → 200 → 100 → 50 → 20 → 10 → 5 → 2 → 1)

// javascript


// let amount = Number(prompt("Enter amount"));
// let temp = amount;
// if (amount >= 500) {
//     let notes = Math.floor(amount / 500);
//     console.log(`${notes} notes of 500`);
//     amount %= 500;  // remainder  
// }
// // Repeat for 200, 100, 50, 20, 10, 5, 2
// console.log(`${amount} notes of 1`);  // Final remainder  
// Math Operations:

// Math.floor(num / denom) = Number of notes 
// amount % denom = Remainder 
// Example: 4823



// 4823 ÷ 500 = 9 notes (4500 used, 323 left)
// 323 ÷ 200 = 1 note (200 used, 123 left) 
// 123 ÷ 100 = 1 note (100 used, 23 left)
// 23 ÷ 20 = 1 note (20 used, 3 left)
// 3 ÷ 2 = 1 note (2 used, 1 left)
// 1 note of 1  