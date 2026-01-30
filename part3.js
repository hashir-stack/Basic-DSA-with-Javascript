// 1. Pre-Setup for Pattern Programming (Node.js Environment)
// Why Node.js? 
//          Browser console.log() adds new lines after output. For patterns, use process.stdout.write() to print on the same line.  

// Install Node.js (watch their video if needed).
// Run code: Open terminal (Ctrl + `` ``), type node app.js.
// Input in terminal: Install prompt-sync via npm install prompt-sync, then:

// For eg :
// const prompt = require('prompt-sync')();
// let n = prompt('Enter a number: ');
// process.stdout.write(n);  // Prints without new line

// console.log() → new line after output (browser + Node).
// process.stdout.write() → same line (Node only).

// ------------------------------------------------------------------------------------------------
// 2. Core Pattern Building Blocks

// Rows & Columns: Outer loop (i) controls rows (always 1 to n). Inner loop (j) controls columns (stars per row).

//                          * * * * *
//                          * * * * *
//                          * * * * *
//                          * * * * *
//                          * * * * *  (for n=5)

// Code -

// const prompt = require('prompt-sync')();
// let n = parseInt(prompt('Enter n: '));

// for(let i=1; i<=n; i++) {  // Rows
//     for(let j=1; j<=n; j++) {  // Columns
//         process.stdout.write('* ');
//     }
//     console.log();  // New line after each row
// }


// Dry Run Logic: Outer i runs n times. Each time, inner j runs n times (prints n stars), then console.log() → next row

// ------------------------------------------------------------------------------------------------
