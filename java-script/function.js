


//1 ************** natural 1 to n *****************

// function naturalNumbrer (n) {
//     for (let i 1; i <= n; i++){
//         console.log(i);
//     }
// }
// naturalNumbrer(100)

//2 ************** natural number reverse n to 1 *****************

// function naturalNumberReverse (n) {
//     for (let i = n; i >= 1; i--){
//         console.log(i);
//     }
// }
// naturalNumberReverse(100)



// q3************even number between  1 to 100*************

// function evenNumber () {
//     for (let i = 2; i <= 100; i += 2){
//         console.log(i)
//     }
// }
// evenNumber();

// q4 ************ odd number between  1 to 100 *************



// function oddNumber () {
//     for (let i = 1; i <= 100; i +=2){
//         console.log(i);
//     }
// }
// oddNumber();


// Q5 sum of natural number 1 to n*********


// function sumofnaturalNumber (n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++){
//         sum += i;
//     }
//     return sum
// }
// console.log(sumofnaturalNumber(10))

// sum of all even Number************

// function sumofallevenNumber (n) {
//     let sum = 0;
//     for (let i = 2; i <= n; i += 2){
//         sum += i;
//     }
//     return sum;

// }
// console.log(sumofallevenNumber(50));


// sum of all odd Number************

// function somofalloddNumber (n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i += 2){
//         sum += i;
//     }
//     return sum;
// }
// console.log(somofalloddNumber(100))


// multiplication tabel of any number ***********

// function printMultiplicationTable (number) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${number} x ${i} = ${number * i}`);
//     }
// }

// printMultiplicationTable(2);

// count number of digit in a number

// function countDigits (number) {
//     return number.toString().length;
// }
// console.log(countDigits(123));
// console.log(countDigits(9876543210));

// Write a Java Script Program to find first and last digit of a number.

// Write a Java Script Program to find sum of first and last digit of a number

// Write a Java Script Program to swap first and last digits of a number.

// Write a Java Script Program to calculate sum of digits of a number.

// Write a Java Script Program to calculate product of digits of a number.

// Write a Java Script Program to enter a number and print its reverse.


// Write a Java Script Program to check whether a number is palindrome or not.


// Write a Java Script Program to find frequency of each digit in a given integer.


// Write a Java Script Program to enter a number and print it in words.


// Write a Java Script Program to print all ASCII character with their values.


// Write a Java Script Program to find power of a number using for loop.


// Write a Java Script Program to find all factors of a number.


// Write a Java Script Program to calculate factorial of a number.


// // Write a Java Script Program to find HCF(GCD) of two numbers.


// Write a Java Script Program to find LCM of two numbers.






// function armstrong (n) {
//     let temp = n;
//     let freq = 0;
//     while (temp!= 0) {
//         temp = parseInt(temp/ 10);
//         freq++;

//     }
//     let sum = 0;
//     while (n != 0) {
//         let rem = n % 10;
//         sum = sum + rem ** freq;
//         n = parseInt(n / 10);

//     }
//     return sum;

// }
// let ans = armstrong(123);
// console.log(ans)


// function sumofnaturalNumber (n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++){

//         sum += i;

//     }
//     return sum;
// }
// console.log(sumofnaturalNumber(100));

// function sumofallevenNumber (n) {
//     let sum = 0;
//     for (let i = 2; i <= n; i+=2){
//         sum += i;
//     }
//     return sum;
// } console.log(sumofallevenNumber(20));


// function somofalloddNumber (n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i += 2){
//         sum += i;
//     }
//     return sum;
// } console.log(somofalloddNumber(20));

// function printMultiplicationTable (number) {
//     for (let i = 1; i <= 10; i++){
//         console.log(`${number}x ${i} = ${number*i}`);
//     }
// }
// printMultiplicationTable(2);


// function printMultiplicationTable (number) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${number} x ${i} = ${number * i}`);
//     }
// }

// printMultiplicationTable(5);

// function countDigits (number) {
//     return number.toString().length;

// }
// console.log(countDigits(123));




// function asignments******-----******--*-*-*-*-
// ************************************************
    // *******************************************--------------------------------------------=========================================================


// function add(a,b){
//     console.log(a+b)
// }
// function minus(a,b){
//     console.log(a-b)
// }
// function mul(a,b){
//     console.log(a*b)
// }
// function divide(a,b){
//     console.log(a/b)
// }
// add(10,20)
// minus(20,10)
// mul(10,50)
// divide(4,5)
// minus(5,3)

// function add(a,b=30){
//     return a+b
// }
// let an=add(10,20)
// console.log(an)


// function add(a,b=30){
//     return a+b
// }
// let ans=add(10)
// console.log(ans)

// function add(a=20,b=30){
//     return a+b
// }
// let ans=add()
// console.log(ans)



// check prime or not proime number.....
// function primeNotprime(n){
//     for (let i=2;i<n;i++){
//         if(n%i==0)
//         return 1
//     }
//     return 0
// }
// let ans =primeNotprime(6)
// if(ans==0){
//     console.log("prime number")
// }
// else{
//     console.log(" not prime number")
// }

// n prime number check ke liye
// function primeNotprime(n){
//     for(let i=1;i<n;i++){
//         let flag=0;
//         for(let j=2;j<i;j++){
//             if(i%j==0){
//                 flag=1;
//             }
//         } if(flag==0){
//             console.log(i)
//         }
//     }
// }
// let ans=primeNotprime(100)


// function armstrong(n) {
//     let temp = n;
//     let freq = 0;
//     let sum = 0;
//     while (temp != 0) {
//         temp = parseInt(temp / 10)
//         freq++;
//     }
//     while (n != 0) {
//         let rem = n % 10;
//         sum = sum + rem ** freq;
//         n = parseInt(n / 10)
//     }
//     return sum;
// }
// let no = 254;
// let ans = armstrong(no)
// if (ans == no) {
//     console.log("armstrong number")
// }
// else {
//     console.log(" not a armstrong number")
// }
// 363 changes: 363 additions & 0 deletions363
// java script / functionque.js
// @@ -0, 0 + 1, 363 @@

// Write a Java Script Program to print all natural numbers from 1 to n. – using while loop

// ans.
// function naturalnumber(n){
//     for(let i=1;i<=n;i++){
//       console.log(i)
//     }

// }
// let ans= naturalnumber(10)
// ----------------------------------------------------------
// Write a Java Script Program to print all natural numbers in reverse (from n to 1). – using while loop
// ans.
// function naturalnumber(n){
//     for(let i=n;i>=1;i--){
//       console.log(i)
//     }

// }
// let ans= naturalnumber(10)

// -----------------------------------
// ----------------------------------------


// function oddNumber () {
//     for (let i = 1; i < 10; i++){
//         if (i % 2 !== 0) {
//             console.log(i);
//         }
//     }
// }
// oddNumber();

// Write a Java Script Program to print all even numbers between 1 to 100. – using while loop
// ans.
// function evennumber(n){
//     for(let i=1;i<=n;i++){
//         if(i%2==0){
//             console.log(i)
//         }
//     }
// }
// let ans =evennumber(100)
// ------------------------------------
// Write a Java Script Program to print all odd number between 1 to 100.
// ans.
// function oddnumber(n){
//     for(let i=1;i<=n;i++){
//         if(i%2!=0){
//             console.log(i)
//         }
//     }
// }
// let ans =oddnumber(100)

// -----------------------------------------------
// Write a Java Script Program to find sum of all natural numbers between 1 to n.
// ans.
// function sumofnatural(n){
//     let sum=0
//     for(let i=1;i<=n;i++){
//         sum=sum+i
//         console.log(sum)
//     }

// }
// let ans =sumofnatural(5)
// ----------------------------------------------
// Write a Java Script Program to find sum of all even numbers between 1 to n.
// ans.
// function sumofeven(n){
// let sum=0;
// for(let i=1;i<=n;i++){
//     if(i%2==0){
//         sum=sum+i
//         console.log(sum)
//     }
// }
// }
// let ans=sumofeven(10)
// -------------------------------------------
// Write a Java Script Program to find sum of all odd numbers between 1 to n.
// ans.

// function sumofodd(n){
// let sum=0;
// for(let i=1;i<=n;i++){
//     if(i%2!=0){
//         sum=sum+i
//         console.log(sum)
//     }
// }
// }
// let ans=sumofodd(10)
// --------------------------------------
// Write a Java Script Program to print multiplication table of any number.
// ans.
// function table(n){

//    for(let i=1;i<=10;i++){

//        console.log( n*i)
//    }

// }
// let ans=table(10)

// ----------------------------------------
// Write a Java Script Program to count number of digits in a number.
// ans.
// function count(n){
//     let count=0;
//     while(n!=0){
//         count++
//         n=parseInt(n/10)
//     }
//     console.log(count)
// }
// let ans = count(91234)
// ---------------------------------------

// ------------------------------------
// Write a Java Script Program to calculate sum of digits of a number.
// ans.
// function sumofdigit(n){
//     let count=0;
//     let sum=0;
//     while(n!=0){
//         sum=sum+n%10
//         n=parseInt(n/10)
//     }
//     console.log(sum)
// }
// let ans = sumofdigit(91234)
// ------------------------------------
// Write a Java Script Program to calculate product of digits of a number.
// ans.
// function product(n){
//     let product=1;
//     let rem;
//     while(n!=0){
//         rem=n%10;
//         product=product*rem
//         n=parseInt(n/10)
//     }
//     console.log(product)
// }
// let ans = product(4513)
// --------------------------------------
// Write a Java Script Program to enter a number and print its reverse.
// ans.
// function reverse(n){
//     let rem=0;
//     let rev=0;
//     while(n!=0){
//         rem=n%10;
//         rev=rev*10+rem;
//         n=parseInt(n/10)
//     }
//     console.log(rev)

// }
// let ans= reverse(1234)
// ------------------------------------------
// Write a Java Script Program to check whether a number is palindrome or not.
// ans.
// function pallindrome(n){
//     let rem=0;
//     let rev=0;
//     let palli=n;
//     while(n!=0){
//         rem=n%10;
//         rev=rev*10+rem;
//         n=parseInt(n/10)
//     }
//     if(palli==rev){
//         console.log("pallindrome")
//     }
//     else{
//         console.log(" not a pallindrome")
//     }


// }
// let ans= pallindrome(12321)
// -------------------------------


// -----------------------------------------
// Write a Java Script Program to find power of a number using for loop.

// ans.
// function power(base,exp){

//     let power=1;
//     for(let i=1;i<exp;i++){
//         power=base**exp

//     }
//     console.log(power)
// }
// let ans=power(5,3)
// -------------------------------------------


// -----------------------------------------
// Write a Java Script Program to calculate factorial of a number.
// ans.
// function factorial(n){
//     let fact=1;
//     for(let i=1;i<=n;i++){
//         fact=fact*i
//     }
//     console.log(fact)
// }

// let ans=factorial(5)
// ----------------------------
// Write a Java Script Program to find HCF (GCD) of two numbers.
// ans.
// function hcf(num1,num2){
//     let min=parseInt(num1,num2)
//     let hcf=min;
//     for(let i=1;i<=min; i++){
//         if(num1%i==0 && num2%i==0){
//             hcf=i
//         }
//     }
//     console.log(hcf)
// }
// let ans=hcf(6,12)
// -----------------------------------------------
// Write a Java Script Program to find LCM of two numbers.
// ans.
// function lcm(num1,num2){
//     let max=parseInt(num1,num2)
//     let lcm=max;
//     while(lcm>0){
//         if(lcm%num1==0 && lcm%num2==0){
//             break
//         }
//         lcm=lcm+max
//     }
//    console.log(lcm)
// }
// let ans=lcm(6,12)
// -----------------------------------------
// Write a Java Script Program to check whether a number is Prime number or not.
// ans.
// function prime(n){
//     let flag=0;
//     for(let i=2;i<n;i++){

//         if(n%i==0){
//             flag=1;
//         }

//     }
//     if(flag==0){
//         console.log("primenumber")
//     }
//     else{
//         console.log(" not a primenumber")
//     }

// }
// let ans=prime(9)

// --------------------------------
// Write a Java Script Program to print all Prime numbers between 1 to n.
// ans.
// function primen(n){
//    let flag=0;
//    for(let i=1;i<n;i++){
//     flag=0
//     for(let j=2;j<i;j++){
//         if(i%j==0){
//             flag=1
//         }


//     }
//     if(flag==0){
//         console.log(i)

//    }

// }
// }
// let ans=primen(9)

// ---------------------------------------
// Write a Java Script Program to find sum of all prime numbers between 1 to n.

// ans.
// function primen(n){
//    let flag=0;
//    let sum=0;
//    for(let i=1;i<n;i++){
//     flag=0
//     for(let j=2;j<i;j++){

//         if(i%j==0){

//             flag=1
//         }


//     }
//     if(flag==0){
//          sum=sum+i
//          console.log(sum)
//     }


//    }

// }

// let ans=primen(9)

// ---------------------------------------------------



// -------------------------------------
// Write a Java Script Program to check whether a number is Armstrong number or not.
// ans.
// function armstrong(n) {
//    let temp = n;
//   let freq = 0;
//   let sum = 0;
//    while (temp != 0) {
//         temp = parseInt(temp / 10)
//         freq++;
//      }    while (n != 0) {
//          let rem = n % 10;
//          sum = sum + rem ** freq;
//          n = parseInt(n / 10)
//      }
//      return sum;
//  } let no = 254;
//  let ans = armstrong(no)
//  if (ans == no) {
//      console.log("armstrong number")
//  }
//  else {
//      console.log(" not a armstrong number")
//  }

// ---------------------------------

// Write a Java Script Program to print Fibonacci series up to n terms.
// ans.
// function febonicca(n){
//     let n1=0;
//     let n2=1
//     let n3;
//     console.log(n1)
//     console.log(n2)
// for(let i=1; i<=n;i++){
//     n3=n2+n1;
//     console.log(n3)
//     n1=n2
//     n2=n3
// }

// }
// let ans =febonicca(6)
// ---------------------------------
//

//-------------------------------
//Write a Java Script Program to find frequency of each digit in a given integer.
//ans.

// let num=12345;
// let count=0;
// while(num!=0){
//     count++
//     num=parseInt(num/10)
// }
// console.log(count)

//----------------------------------------------
//Write a Java Script Program to print all Prime numbers between 1 to n.

// let n=100;
// let flag=0;
// for(let i=1;i<n;i++){
//     flag=0
//     for(let j=2;j<i;j++){
//         if(i%j==0){
//             flag=1
//         }
//     }
//     if(flag==0){
//         console.log(i)
//     }
// }

//---------------------------------------

//Write a Java Script Program to find sum of all prime numbers between 1 to n.


// let n=10;
// let flag=0;
// let sum=0;
// for(let i=1;i<n;i++){
//     flag=0
//     for(let j=2;j<i;j++){
//         if(i%j==0){
//             flag=1
//         }
//     }
//     if(flag==0){
//         sum=sum+i
//         console.log(sum)
//     }
// }