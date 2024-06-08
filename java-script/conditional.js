// let age = 19;
// if (age > 18) {
//     console.log("you are elagible for vote");
// }
// else {
// console.log("you are not eligible for vote")
// }


// let age = 5;
// if (age > 18) {
//     console.log('you are eligible for vote');
// }
// else if (age > 10 && age < 18) {

//     console.log("you are able to give half vote")
// }
// else {
//     console.log("you are not elegible for vote");
// }


// let a = 10;
// if (a > 0) {
//     console.log("positive number");
// }
// else if (a < 0) {
//     console.log("negitave number");
// }
// else {
//     console.log("zero");
// }

// let a = 10;
// let b = 20;
// if (10 >=20) {
//     console.log("a is maximum", a);
// }
// else {
//     console.log("b is maximum", b);
// }


// 1 Write a Java Script Program to find maximum between two numbers.

// let a = 10;
// let b = 20;
// if (a > b) {
//     console.log("a is maximum", a)

// }
// else {
//     console.log("b is maximum", b);
// }

//2 Write a Java Script Program to find maximum between Four numbers

// let a = 10;
// let b = 20;
// let c = 50;
// let d = 80;

// if (a > b) {
//     if (b > c) {
//         if (c > a) {
//             console.log(a);
//         }
//         else {
//             console.log(d);
//         }
//   }
// }
// if (b > c) {
//     if (b > a) {
//         console.log(b);
//     }
//     else {
//         console.log(d);
//     }
// }

// if (c > b) {
//     if (c > d) {
//         console.log(c);
//     }
//     else { console.log(d); }
// }

//3 Write a Java Script Program to check whether a number is negative, positive or zero.

// let a = -10;
// if (a > 0) {
//     console.log("positive number");
// }
// else if (a < 0) {
//     console.log("negative number")
// }
// else {
//     console.log("zero");
// }

// 4 Write a Java Script Program to check whether a number is divisible by 5 and 11 or not.


// let a = 55;
// if (a % 2 == 0) {
//     console.log("divisible");
// }
// else {
//     console.log("not ");
// }

// Write a Java Script Program to check whether a number is even or odd.

// let a = 11;
// if (a % 2 == 0) {
//     console.log("even number");
// }
// else {
//     console.log("odd number");
// }

// Write a Java Script Program to check whether a year is leap year or not

// let a = 2016;
// if (a % 400 == 0 || a % 4 == 0) {
//     console.log("leap year");
// }
// else if (a % 100 === 0) {
//     console.log("not leap year")
// }
// else {
//     console.log("not leap year");
// }

// Write a Java Script Program to check whether a character is alphabet or not.

// let a = "b";
// if (a >= "a" && a <= "z") {
//     console.log("alphabet")
// }
// else {
//     console.log("mismatch");
// }
// Write a Java Script Program to check whether a character is alphabet or not.


// let a = "h";

// if (a == 'a' || a == 'i' || a == 'o' || a == 'e' || a == 'u') {
//     console.log("wovel");
// }
// else { console.log("consonent" )};


// Write a Java Script Program to input any character and check whether it is alphabet, digit or special character

// let a = '$';
// if (a > 0) {
//     console.log("number");
// }
// else if (a >= 'a' && a <= 'z') {
//     console.log("alphabet");
// }
// else {
//     console.log("special charector");
// }

// Write a Java Script Program to check whether a character is uppercase or lowercase alphabet.

// let a = "A";
// if (a >= 'a' && a <= 'z') {
//     console.log("lowercase");
// }
// else {
//     console.log("uppercase");
// }

// Write a Java Script Program to input week number and print week day.

// let a = 4;
// if (a == 1) {
//     console.log("sunday");
// }
// else if (a == 2) {
//     console.log("monday");
// }
// else if (a == 3) {
//     console.log("tuesday");
// }
// else if (a == 4) {
//     console.log("wednesday");
// }
// else if (a == 5) {
//     console.log("thursday");
// }
// else if (a == 6) {
//     console.log("friday");
// }
// else if (a == 7) {
//     console.log("saturday");
// }
// else {
//     console.log("mismatch");
// }

// Write a Java Script Program to input month number and print number of days in that month.
// let a = 12;
// if (a == 1) {
//     console.log("jan");
// }
// else if (a == 2) {
//     console.log("feb");
// }
// else if (a == 3) {
//     console.log("march");
// }
// else if (a == 4) {
//     console.log("april");
// }
// else if (a == 5) {
//     console.log("may");
// }
// else if (a == 6) {
//     console.log("june");
// }
// else if (a == 7) {
//     console.log("july");
// }
// else if (a == 8) {
//     console.log("aug");
// }
// else if (a == 9) {
//     console.log("sep");
// }
// else if (a == 10) {
//     console.log("oct");
// }
// else if (a == 11) {
//     console.log("nov");
// }
// else if (a == 12) {
//     console.log("dec");
// }
// else {
//     console.log("mismatch");
// }

// Write a Java Script Program to count total number of notes in given amount.

// function countNotes (amount) {
//     let noteCounts = {
//         2000: 0,
//         500: 0,
//         200: 0,
//         100: 0,
//         50: 0,
//         20: 0,
//         10: 0,
//         5: 0,
//         2: 0,
//         1: 0
//     };

//     if (amount >= 2000) {
//         noteCounts[2000] = Math.floor(amount / 2000);
//         amount %= 2000;
//     }
//     if (amount >= 500) {
//         noteCounts[500] = Math.floor(amount / 500);
//         amount %= 500;
//     }
//     if (amount >= 200) {
//         noteCounts[200] = Math.floor(amount / 200);
//         amount %= 200;
//     }
//     if (amount >= 100) {
//         noteCounts[100] = Math.floor(amount / 100);
//         amount %= 100;
//     }
//     if (amount >= 50) {
//         noteCounts[50] = Math.floor(amount / 50);
//         amount %= 50;
//     }
//     if (amount >= 20) {
//         noteCounts[20] = Math.floor(amount / 20);
//         amount %= 20;
//     }
//     if (amount >= 10) {
//         noteCounts[10] = Math.floor(amount / 10);
//         amount %= 10;
//     }
//     if (amount >= 5) {
//         noteCounts[5] = Math.floor(amount / 5);
//         amount %= 5;
//     }
//     if (amount >= 2) {
//         noteCounts[2] = Math.floor(amount / 2);
//         amount %= 2;
//     }
//     if (amount >= 1) {
//         noteCounts[1] = Math.floor(amount / 1);
//         amount %= 1;
//     }

//     return noteCounts;
// }

// function displayNoteCounts (noteCounts) {
//     console.log("Note Counts:");
//     for (let note in noteCounts) {
//         console.log(`${note} note: ${noteCounts[note]}`);
//     }
// }

// // Example usage
// const amount = 2738;
// const noteCounts = countNotes(amount);
// displayNoteCounts(noteCounts);


// Write a Java Script Program to input angles of a triangle and check whether triangle is valid or not.

// let a = 40;
// let b = 60;
// let c = 80;

// if (a + b + c == 180) {
//     console.log("valid triangel");
// }
// else {
//     console.log("not valid");
// }

// Write a Java Script Program to input all sides of a triangle and check whether triangle is valid or not.

// let a = 50;
// let b = 50;
// let c = 5;
// if (a == b + c || b == a + c || c == a + b) {
//     console.log("triangel is valid");
// }
// else {
//     console.log("triangel is not valid");
// }


// Write a Java Script Program to check whether the triangle is equilateral, isosceles or scalene triangle.


// let a = 20;
// let b = 20;
// let c = 20;
// if (a == b && b == c) {
//     console.log("equilateral triangel");
// }
// else if (a == b || a == c || b == c) {
//     console.log("isosceles triangel");
// }
// else {
//     console.log("scalene triangel");
// }


// Write a Java Script Program to find all roots of a quadratic equation.

// function findRoots (a, b, c) {
//     let discriminant = b * b - 4 * a * c;
//     let root1, root2;

//     if (discriminant > 0) {
//         root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//         root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//         console.log("Roots are real and different.");
//         console.log("Root 1 =", root1);
//         console.log("Root 2 =", root2);
//     } else if (discriminant === 0) {
//         root1 = root2 = -b / (2 * a);
//         console.log("Roots are real and same.");
//         console.log("Root 1 =", root1);
//         console.log("Root 2 =", root2);
//     } else {
//         let realPart = -b / (2 * a);
//         let imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
//         console.log("Roots are complex and different.");
//         console.log("Root 1 =", realPart.toFixed(2) + " + " + imaginaryPart.toFixed(2) + "i");
//         console.log("Root 2 =", realPart.toFixed(2) + " - " + imaginaryPart.toFixed(2) + "i");
//     }
// }

// // Example usage
// const a = 1;
// const b = -3;
// const c = 2;

// findRoots(a, b, c);


// Write a Java Script Program to calculate profit or loss.

//

// Write a Java Script Program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer.Calculate percentage and grade according to following:
// Percentage >= 90 % : Grade A
// Percentage >= 80 % : Grade B
// Percentage >= 70 % : Grade C
// Percentage >= 60 % : Grade D
// Percentage >= 40 % : Grade E
// Percentage < 40 % : Grade F

// let a = 90;
// let b = 80;
// let c = 85;
// let d = 80;
// let e = 85;
// let f = a + b + c + d + e;
// let g = (f / 5)
//     console.log(g);
// if (g >= 90) {
//     console.log("grade A")
// }
// else if (g >= 80 && g <= 90) {
//     console.log("grade B");
// }
// else if (g >= 70 && g <= 80) {
//     console.log("grade C");
// }
// else if (g >= 60 && g <= 70) {
//     console.log("grade D");
// }
// else if (g >= 40 && g <= 60) {
//     console.log("grade E");
// }
// else {
//     console.log("grade F");
// }
