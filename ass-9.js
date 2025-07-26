// ==================23/7/2025==================

// Write a function checkKeyword(str, keyword) that returns true if the keyword is found in the given str, case-insensitive.
// function checkKeyword(str, keyword) {
//   return str.toLowerCase().includes(keyword.toLowerCase());
// }

// console.log(checkKeyword("Hello World", "111111")); // true

// Create a function getWeekNumber(date) that returns the ISO 8601 week number of a given date.
// function getWeekNumber(date) {
//   const d = new Date(
//     Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
//   );
//   const dayNum = d.getUTCDay() || 7; // ISO week starts on Monday (1), Sunday = 7
//   d.setUTCDate(d.getUTCDate() + 4 - dayNum); // Set to nearest Thursday
//   const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
//   const weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
//   return weekNo;
// }

// const date = new Date("2025-07-23");
// console.log(getWeekNumber(date)); // Output: 30

// Days between two dates
// function daysBetween(start, end) {
//   const startDate = new Date(start);
//   const endDate = new Date(end);
//   const msPerDay = 1000 * 60 * 60 * 24;
//   return Math.round((endDate - startDate) / msPerDay);
// }
// console.log(daysBetween("2025-07-01", "2025-07-23")); // Output: 22

// getWeekNumber(new Date("2025-01-01")); // Week 1
// getWeekNumber(new Date("2025-12-31")); // Week 1 or 53 depending

// function getWeekNumber(date) {
//   const target = new Date(date.valueOf());

//   const dayNr = (date.getDay() + 6) % 7;
//   target.setDate(target.getDate() - dayNr + 3);

//   // January 4th is always in week 1
//   const jan4 = new Date(target.getFullYear(), 0, 4);
//   const diff = (target - jan4) / 86400000; // days difference

//   // Calculate ISO week number
//   return 1 + Math.floor(diff / 7);
// }

// console.log(getWeekNumber(new Date("2025-01-01")));
// console.log(getWeekNumber(new Date("2025-12-31")));

// Write a function daysBetween(date1, date2) that calculates and returns the number of full days between the two dates.
// daysBetween("2025-07-01", "2025-07-23"); // 22

// function daysBetween(date1, date2) {
//   const d1 = new Date(date1);
//   const d2 = new Date(date2);

//   d1.setHours(0, 0, 0, 0);
//   d2.setHours(0, 0, 0, 0);

//   const msPerDay = 1000 * 60 * 60 * 24;
//   const diffInMs = Math.abs(d2 - d1);

//   return Math.floor(diffInMs / msPerDay);
// }

// console.log(daysBetween("2025-07-01", "2025-07-23")); // 22

// Write a function cleanNames(str) that takes a comma-separated string and returns an array of trimmed
// cleanNames(" John , Jane , Bob ") // ["John", "Jane", "Bob"]
// function cleanNames(str) {
//   return str.split(",").map(name => name.trim()).filter(name => name);
// }
// console.log(cleanNames(" John , Jane , Bob ")); // ["John", "Jane", "Bob"]

//const v/s static theroy
//const : Declares a constant value that can’t be reassigned.Value is constant. For objects/arrays, contents can change.Accessed like any variable	Not typically related to OOP directly.
// static : Declares a class-level or shared member/function/variable.Class or file scoped, depends on language.Static members can change unless marked final or const.Used for tracking data shared across instances.Accessed with class name: ClassName.staticVar.Common in OOP – shared among all objects of a class.Stored in a shared memory segment across instances.

// Create a countdown timer that counts down from 10 to 0 in the console using setInterval(), and logs "Done!" when finished.
// let i = 10;
// const timer = setInterval(show, 1000);

// function show() {
//   console.log(i--);
//   if (i < 0) {
//     clearInterval(timer);
//     console.log("Done!");
//   }
// }

// Create a class Car with a static property totalCars and a const object inside a function.
// class Car {
//   static totalCars = 0;
//   constructor(model) {
//     this.model = model;
//     Car.totalCars++;
//   }
// }

// function createCar() {
//   const car = new Car("Toyota");
//   console.log("Model:", car.model);
//   console.log("Total Cars:", Car.totalCars);
// }

// createCar();

//write a function parseCSV(str) that
// function parseCSV(str) {
//   return str.trim().split('\n').map(row => row.split(','));
// }
// const csv = `
// name,age,city
// Alice,30,New York
// Bob,25,London
// `;
// console.log(parseCSV(csv));




//const string = "Hello my name is Meet Ashara" print reverse if character length is 4 or more
// const string = "Hello my name is Meet Ashara";
// const result = string
//   .split(" ")
//   .map(word => word.length >= 4 ? word.split("").reverse().join("") : word)
//   .join(" ");
// console.log(result);

//if x==1 && if x==2 && x==3 console.log("True") put x value make condition true use object
// let x = {
//   value: 1,
//   valueOf: function () {
//     return this.value++;
//   },
// };

// if (x == 1 && x == 2 && x == 3) {
//   console.log("true");
// }
    
// const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10, 11]]]]];

// const flatArr = JSON.stringify(arr)
//   .replace(/\[|\]/g, "") 
//   .split(",") 
//   .map(Number); 

// console.log(flatArr);

// const num = [1 + "1"]-1
// console.log(num)  // [10]

//find digit of power of 2
// function checkPowerOfTwo(num) {
//   let power = 0;
//   let value = 1;

//   while (value < num) {
//     value *= 2;
//     power++;
//   }

//   if (value === num) {
//     console.log(`${num} is 2^${power}`);
//   } else {
//     console.log(`${num} is NOT a power of 2`);
//   }
// }

// checkPowerOfTwo(16); 
// checkPowerOfTwo(20); 
