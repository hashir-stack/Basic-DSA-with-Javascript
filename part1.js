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

// Converting the one data type into another data type is called "Type Casting or Type Conversion".

// prompt() always returns string → Use Number(prompt("age")) to get data type as number .
// For Example ==> let age = Number(prompt("Enter your age here ...."));

        // * if user enter "20" or "30" or "40" etc  strings just like this then we can change the data type into number if it is possible then only.

        // * if user enter "hashir" or "ali" etc strings just like this then we can't change the data type into number. The output will be Nan because it not possible to change such such type of stings into number.

            // Number("abc") = NaN (Not a Number).

// ---------------------------------------------------------------------------------------------------------------------------------------

// 4. Swap Two Variables (3 Easy Methods)

// Method I : with extra variable

            // let a = 10 ;
            // let b = 20;
            // let c; // a empty variable

            // c = a ; // c = 10(copy the value of a) , a = 10
            // a = b ; // a = 20  , b = 20
            // b = c ; // b = 10  , c = 10
            // and swaping is done

            // console.log(a ,b ) output will be (20 ,10)

// // Method II : without extra variable

                // let a = 10 ;
                // let b = 20;
                // a = a + b ; //new value of a = 30
                // b = a - b ; //new value of b = 10  because (30 - 20 = 10)
                // a = a - b ; //new value of a = 20 because (30 - 10)
                // and swaping is done

                //  console.log(a ,b ) output will be (20 ,10)

// Method II : Destructuring (modern)

                // let a = 10 ;
                // let b = 20;

                // [a, b] = [b, a];
                // and swaping is done

                //  console.log(a ,b ) output will be (20 ,10)

//-----------------------------------------------------------------------------------------------------------------------------------------
// 


// 5. Arithmetic Operators
// Operator 	What it does	            Example
//   +	          Add	                   5 + 3 = 8
//   -	          Subtract	               5 - 3 = 2
//   *	          Multiply	               5 * 3 = 15
//   /	          Divide (float result)	   12 / 22 = 0.545... 
//   %	          Remainder (modulo)	   7 % 2 = 1


// ---------------------------------------------------------------------------------------------------------------------------------------
// 6. Comparison Operators (Return true/false):

// >, <, >=, <=
// != (not equal), !== (strict not equal)
// Examples:
            // 5 > 3 → true
            // "5" == 5 → true (loose)
            // "5" === 5 → false (strict)
// The primary difference is that the != (loose not equal) operator performs type coercion (automatic type conversion) before comparison, whereas the !== (strict not equal) operator does not perform type coercion, meaning it checks if both the value and the data type are different.

// same as == (loose equality) VS === (strict equality) :

//     In JavaScript, == (loose equality) compares values for equality after converting them to a common type (type coercion). In contrast, === (strict equality) compares both the value and the data type without coercion, returning true only if both match. === is generally preferred for safer, more predictable code. 

                    // Key Differences:
                    // Type Coercion: == converts types (e.g., '5' == 5 is true). === does not (e.g., '5' === 5 is false).
                    // Performance: === is slightly faster because it skips the type conversion step.
                    // Examples:
                    // 0 == false // true
                    // 0 === false // false
                    // null == undefined // true
                    // null === undefined // false 
                    // Best Practice: Always use === to avoid unexpected bugs caused by implicit type coercion
// ----------------------------------------------------------------------------------------------------------------------------------------

// 7. Logical Operators
// && (AND): Both true → true.
// || (OR): Any true → true.