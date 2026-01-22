// 1. Variables: var vs let

// var => Can use before declaration (prints value, no error). Banane se phale use kr sakte hai undefined aa sakta hai error nhi aata
// a = 12;
// console.log(a);
// var a;

// let => Cannot use before declaration ("Cannot access before initialization").
// b = 13;
// console.log(b);
// let b; //==> (throw reference error)
// ---------------------------------------------------------------------------------------------------------------------------------------

// 2. Numbers vs Strings (Key Difference)

// Numbers: 10 + 1 = 11 (addition).  Adding number to number is called Addition.
// Strings: "10" + 1 = "101" (concatenation, joins text). Adding number to string is called Concatenation.
// Console colors: Blue = number, black = string. (For the Tips Purpose only)
// Check type: typeof(variable)

// Case 1 :
// let a = 12;
// let b = "13";
// console.log(typrof(a + b)); // "1213" (string)

// Case 2 :
// let a = 12;
// let b = 13;
// console.log(typrof(a + b)); //25 (number)

// Case 3 : // String + Number + Number => String (concat)
// let a = 10;
// let b = 20;
// console.log("Sum of 10 and 20 is" + a + b); Output => Sum of 10 and 20 is 1020 (string)

// Case 4 : //
// let a = 10;
// let b = 20;
// console.log("Sum of 10 and 20 is" + (a + b)); Output => Sum of 10 and 20 is 30 (string) BOARD mass rule (priority bracket ko milegi)

// Case 5 : //  Number + Number + String => String (concat)
// let a = 10;
// let b = 20;
// console.log(a + b +" is Sum of 10 and 20"  ); Output => 30 is Sum of 10 and 20 (string)
// ----------------------------------------------------------------------------------------------------------------------------------------

// 3. Type Coercion (JS Magic Conversion)
// JS engine changes types based on operator is called Type Coercion.

// + ==> If one side string → concat (text join)  Because + do kaam hai ek addtion krna aur ek concat krna
// For Example :
                // "1" + 1 = 11 Output

// -, *, / ==> Convert string to number first.*  - ,*, /  ye sub operator ka sirf ek hi kaam hai isliye yesa ho raha hai
// For Example :
                // "1" - 1 = 0 Output
                // "1" * 1 = 1 Output
                // "1" / 1 = 1 Output

// ---------------------------------------------------------------------------------------------------------------------------------------
