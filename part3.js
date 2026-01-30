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

// 3. Right Angle Triangle (Increasing Stars)
// plaintext
// Copy
// * 
// * * 
// * * * 
// * * * * 
// * * * * *  (n = 5)
// Logic: Inner loop runs j <= i (stars = current row number). 

// Code: Change base pattern's inner condition to j <= i.

// for exmaple :

// const prompt = require('prompt-sync')();
// let n = parseInt(prompt('Enter n: '));

// for (let i= 1; i=< n ; i++){
//     for(let j = 1 ; j =< 1 ; j++){
//         process.stdout.write('* ');
//     }
//     console.log();
// }
// -------------------------------------------------------------------------------------------------

// Number Pattern (1 to i)

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// Code: Print j instead of *. j resets to 1 each row

// const prompt = require('prompt-sync')();
// let n = parseInt(prompt('Enter n: '));

// for (let i= 1; i=< n ; i++){
//     for(let j = 1 ; j =< 1 ; j++){
//         process.stdout.write(j + ' ');
//     }
//     console.log();
// }

// ------------------------------------------------------------------------------------------------

// Alphabet Pattern (A to ...)

// A
// A B
// A B C
// A B C D
// A B C D E
// Logic: Use ASCII. Capital A = 65.

// javascript
// Copy
// let ch = 65;  // 'A'
// for(let i=1; i<=n; i++) {
//     for(let j=1; j<=i; j++) {
//         process.stdout.write(String.fromCharCode(ch++) + ' ');
//     }
//     console.log();
//     ch = 65;  // Reset for next row
// }
// Key: ch resets per row (new inner loop).

// -------------------------------------------------------------------------------------------------

// 4. Inverted Right Angle Triangle (Decreasing Stars)

// * * * * *
// * * * * 
// * * * 
//  * * 
//  * 
// Logic 1: j <= (n - i + 1) (stars decrease by 1 each row). 

// solution:

// const prompt = require('prompt-sync')();
// let n = parseInt(prompt('Enter n: '));

// for (let i= 1; i=< n ; i++){
//     for(let j = 1 ; j =< (n-i) + 1 ; j++){
//         process.stdout.write(j + ' ');
//     }
//     console.log();
// }


// Logic 2: Outer loop i=n; i>=1; i--, inner j<=i (start from bottom). 

// Multiple ways exist—pick what clicks! 
