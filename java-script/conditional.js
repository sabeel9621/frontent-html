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

let a = 10;
let b = 20;
let c = 50;
let d = 80;

if (a > b) {
    if (b > c) {
        if (c > a) {
            console.log(a);
        }
        else {
            console.log(d);
        }
  }
}
if (b > c) {
    if (b > a) {
        console.log(b);
    }
    else {
        console.log(d);
    }
}

if (c > b) {
    if (c > d) {
        console.log(c);
    }
    else { console.log(d); }
}