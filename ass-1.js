// single line comment
/* multi-line comment 
   This is a multi-line comment
   that spans multiple lines.
*/

//simple program to add two numbers
// var a = 1 + 2, b = 3 + 4;
/* var a = 1 + 2;
var b = 3 + 4;
console.log("Here is A : " + a);
console.log("Here is B : " + b);
console.log("Here A + B is : " + (a + b)); */

// let,var,const

// var : Function-scoped,Can be re-declared and updated
/* var x = 10;
var x = 20; // Allowed
console.log("Here Var Example is : " + x); */

// let : Block-scoped, Cannot be re-declared in the same scope, Can be updated
/* let y = 10;
// let y = 20; // Not allowed
y = 40; // Allowed
console.log("Here Let Example is : " + y); */

// const : Block-scoped, Cannot be re-declared or updated
/* const z = 5;
// z = 20; // Not allowed
// const z = 30; // Not allowed
console.log("Here Const Example is : " + z); */


//conditional statements
// - if , switch

// if statement
// var num = 10;
// if (num > 0) {
//     console.log("Number is positive");
// } else if (num < 0) {
//     console.log("Number is negative");
// } else {
//     console.log("Number is zero");
// }

// var age = 10;
// if (age >= 18){
//     console.log("You are eligible to vote.");
// }
// else {
//     console.log("You are not eligible to vote.");
// }

// switch statement
// var day = 2;
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Sunday");
//         break;
// }


//Data Types
// - Primitive Data Types: Number, String, Boolean, Null
// - Non-Primitive Data Types: Object, Array, Function

// let age = 25;
// console.log(age +":"+ typeof (age));

// let name = "Alice";
// console.log(name +":"+ typeof (name));

// let isStudent = true;
// console.log(isStudent + ":" + typeof (isStudent));

// let salary = null;
// console.log(salary + ":" + typeof (salary));

//operators

//Arithmetic Operators
// let a = 10;
// let b = 3;

// console.log(a + b); // 13 (Addition)
// console.log(a - b); // 7  (Subtraction)
// console.log(a * b); // 30 (Multiplication)
// console.log(a / b); // 3.33... (Division)
// console.log(a % b); // 1  (Remainder)

//Assignment Operator
// let x = 10;

// x += 5;   // x = x + 5
// console.log(x); // 15

// x -= 3;   // x = x - 3
// console.log(x); // 12

// x *= 2;   // x = x * 2
// console.log(x); // 24

// x /= 4;   // x = x / 4
// console.log(x); // 6

// x %= 4;   // x = x % 4
// console.log(x); // 2

// x **= 3;  // x = x ** 3 (exponentiation)
// console.log(x); // 8

//Logical Operators
// let a = true;
// let b = false;

// console.log(a && b); // false → AND: both must be true
// console.log(a || b); // true  → OR: at least one is true
// console.log(!a);     // false → NOT: reverses true to false

//loop
//For loop
// for (let i = 1; i <= 5; i++)
// {
//     console.log(i);
// }

//while loop
// let i = 8;
// while (i <= 15) {
//     console.log(i);
//     i++;
// }

//Do...While loop
// let j = 1;
// do {
//     console.log(j);
//     j++
// } while (j <= 5);

//write a prgram to print number is odd or even.us8e % and if condition
// let number = 10;
// if(number % 2 == 0) {
//     console.log("Number is Even");
// }
// else {
//     console.log("Number is Odd");
// }

// write a program to print number is prime or not
// let num = 30;
// let isPrime = true;
// if (num <= 1) {
//     isPrime = false;
// }
// for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//         isPrime = false;
//         break;
//     }
// }
// if (isPrime) {
//     console.log(num + " is a prime number.");
// }
// else {
//     console.log(num + " is not a prime number.");
// }

//Pattern Printing
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// let k = 1;
// for (let i = 1; i <= 4; i++) {
//     let Pattern = "";
//     for (let j = 1; j <= i; j++)
//     {
//         Pattern += k + " ";
//         k++;
//     }
//     console.log(Pattern);
// }

// let a = document.getElementById("")
// let b = document.getElementsByClassName("")[0]
// let c = document.querySelector(".class")
// let d = document.getElementsByTagName("p");

// 1
// 23
// 456


// let num = 1
// for (let i = 1; i <= 4; i++){
//    let line = "";
//    for (let j = 1; j <= i; j++)
//    {
//       line += num;
//       num++;
//    }
//    console.log(line);
// }

//     *
//    ***
//   *****

// let row = 8
// for (let i = 0; i < row; i++){
//    let line = "";
//    let space = ""
//    for (let k = 0; k < row - i ; k++){
//       space += " ";
//    }

//    for (let j = 1; j <= i*2+1; j++){
//       line +=  "*";
//    }
//    console.log(space + line);
// }


//   *
//  **
// ***

// let row = 8
// for (let i = 0; i < row; i++){
//    let line = "";
//    let space = ""
//    for (let k = 0; k < row - i ; k++){
//       space += " ";
//    }

// let row=3
// for (let i = 1; i <=row ; i++) {
//    let space = " ".repeat(row - i);
//    let star = "*".repeat(2 * i - 1);

//    console.log(space+star);
   
// }

// *
// * *
// * * *
// * * * *
// * * * * *
   
// for (let i = 0; i <= 5; i++)
// {
//    let str = "*"
//    console.log(str.repeat(i))
// }

// 1
// 2 3
// 4 5 6
// 7 8 9 10

// let p = 1;
// for (let i = 0; i <= 4; i++)
// {
//       let str = "";
//       for (let j = 0; j < i; j++)
//       {
//          str += p + " ";
//          p++;
//       }
//       console.log(str);
// }

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// for (let i = 1; i <= 5; i++) {
//     let str = "";
//     for (let j = 1; j <= i; j++) {
//         str += j + " ";
//     }
//     console.log(str.trim());
// }

// * * * * *
//   * * * *
//     * * *
//       * *
//         *

// let a = "3" + 3 - "2" - 4 //27
// let a = [1, 2, 3]
// let b = [3, 4, 5]
// let c = [a + b] //1 2 3 5 6

// let person={
//    age:25,
//    name: "meet",
//    city: "rjk",
//    state: "guj",
// }
// console.log(person.age);


//use boolean to check if student is active or not
// let student = {
//     name: "John",
//     age: 20,
//     isActive: true
// };
// if (student.isActive) {
//     console.log(student.name + " is an active student.");
// }


//declares an object represting a student
// let student = {
//    name: "John",
//    age: 20,
//    subjects: ["Math", "Science", "English"],
// }
// console.log("Name: " + student.name);
// console.log("Age: " + student.age);
// console.log("Subjects: " + student.subjects.join(", "));


//display current date and time and also display random number
// let currentDate = new Date();
// let currentTime = currentDate.toLocaleTimeString();
// console.log("Current Time: " + currentTime);
// let randomNumber = Math.floor(Math.random() * 100) + 1;
// console.log("Random Number: " + randomNumber);


// let room = {
//    wall: "white",
//    floor: "brown",
//    ceiling: "brown",
//    furniture: {
//       table: "wooden",
//       chair: "plastic",
//       sofa: "leather"
//    },
//    appliances: ["fan", "light", "AC"],
//    isClean: true,
// }
// console.log(room.wall);
// console.log(room.furniture.table);
// console.log(room.appliances[0]);
// console.log(room.isClean ? "Room is clean" : "Room is dirty");

//display current full date and time dd/mm/yyyy and DD/MM/YYYY
