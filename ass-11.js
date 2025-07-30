// ==================25/7/2025==================

// Write a function that accepts an array of values (numbers, strings, etc.). Returns an object with all unique values (using Set) and A frequency count of each value (using Map)
 /* <input id="inputArray" placeholder="Enter values (comma-separated)">
    <button onclick="getUniqueValues()">Process</button>

    <p><strong>Unique:</strong> <span id="uniqueOutput"></span></p>
    <pre id="frequencyOutput"></pre>

    <script>
        function getUniqueValues() {
            const input = document.getElementById("inputArray").value;
            const values = input
                .split(",")
                .map((v) => v.trim())
                .filter((v) => v !== "");

            const unique = [...new Set(values)];
            const freq = {};

            values.forEach((v) => {
                freq[v] = (freq[v] || 0) + 1;
            });

            document.getElementById("uniqueOutput").innerText = unique.join(", ");

            let freqText = "";
            for (let key in freq) {
                freqText += key + ": " + freq[key] + "\n";
            }
            document.getElementById("frequencyOutput").innerText = freqText;
        }
    </script> */

// Create a function that parses a given date string. Calculates and returns days left from today with user friendly message
     /*   function daysLeft(dateString) {
            const targetDate = new Date(dateString);
            const today = new Date();
            const timeDiff = targetDate - today;
            const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

            if (daysLeft > 0) {
                return `There are ${daysLeft} days left until ${targetDate.toDateString()}.`;
            } else if (daysLeft === 0) {
                return `Today is the day!`;
            } else {
                return `The date ${targetDate.toDateString()} has already passed.`;
            }
        }

        console.log(daysLeft("2025-07-27")); */

// Build a mini calculator that uses callbacks
/* function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return b !== 0 ? a / b : "Cannot divide by zero";
}

function calculator(a, b, operationCallback) {
  return operationCallback(a, b);
}

console.log("Add:", calculator(5, 3, add)); // 8
console.log("Subtract:", calculator(5, 3, subtract)); // 2
console.log("Multiply:", calculator(5, 3, multiply)); // 15
console.log("Divide:", calculator(5, 3, divide)); // 1.6666666666666667 */

// Use WeakMap & WeakSet  Storing login metadata (timestamp, Role, etc.) Tracking which users have been processed (e.g., logged in).
// const loginMetadata = new WeakMap();
// const processedUsers = new WeakSet();

// const user1 = { name: "Test" };
// const user2 = { name: "Test2" };

// function loginUser(user, role) {
//   const timestamp = new Date();

//   loginMetadata.set(user, {
//     role: role,
//     loginTime: timestamp,
//   });
//   processedUsers.add(user);

// }

// function isUserProcessed(user) {
//   return processedUsers.has(user);
// }

// loginUser(user1, "Admin");
// loginUser(user2, "User");

// console.log(user1, loginMetadata.get(user1)); // { role: 'Admin', loginTime: ... }
// console.log(user2, loginMetadata.get(user2)); // { role: 'User', loginTime: ... }


// ----------------------------------------------------------------------------------------------------
        // let a = "20"
        // console.log(a + 1)
        // console.log(++a)
        // console.log(a++)

        // console.log(null == null)
        // console.log(null === null)

        //console.log("A") set timeout console.log("B") set timeout console.log("C",3500) promise resolve then("E")
        // console.log("A");
        // setTimeout(() => {
        //     console.log("B");
        // }, 2000);
        // setTimeout(() => {
        //     console.log("C");
        // }, 3500);
        // Promise.resolve().then(() => {
        //     console.log("E");
        // });

        // generate a random number between 1 and 100
        // const randomNumber = Math.floor(Math.random() * 100) + 1;
        // console.log("Random Number:", randomNumber);

        //remove duplicates from an array without inbuilt methods
        // const arrayWithDuplicates = [1, 2, 2,3, 3, 4, 4, 5,7,7,7];
        // const uniqueArray = [...new Set(arrayWithDuplicates)];
        // console.log("Unique Array With In built Methods:", uniqueArray);
        
        // ------- Without inbuilt methods -------
        
        // const arrayWithDuplicates = [1, 2, 2,3, 3, 4, 4, 5,7,7,7];
        // const uniqueArray = [];
        // for (let i = 0; i < arrayWithDuplicates.length; i++) {
        //     if (!uniqueArray.includes(arrayWithDuplicates[i])) {
        //         uniqueArray.push(arrayWithDuplicates[i]);
        //     }
        // }
        // console.log("Unique Array:", uniqueArray);

        // Count Number of Vowels in string ex. const name = 'Javascript'.
        // const name = 'Javascript';
        // const vowels = ['a', 'e', 'i', 'o', 'u'];
        // let count = 0;
        // for (let i = 0; i < name.length; i++) {
        //     if (vowels.includes(name[i].toLowerCase())) {
        //         count++;
        //     }
        // }
        // console.log("Number of Vowels:", count);

        // Swapping two variable Without Using Third Variable.
        // let a = 5, b = 10;
        // [a, b] = [b, a];
        // console.log("a:", a); // 10
        // console.log("b:", b); // 5
        // ------- Another Method -------
        // let a = 5;
        // let b = 10;
        // console.log("Before Swapping: a =", a, ", b =", b);
        // a = a + b;
        // b = a - b;
        // a = a - b;
        // console.log("After Swapping: a =", a, ", b =", b);









        // Debounce function
        // function debounce(func, delay) {
        //     let timeoutId
        //     return function (...args) {
        //         clearTimeout(timeoutId)
        //         timeoutId = setTimeout(() => func.apply(this, args), delay)
        //     }
        // }
        // function handleInput() {
        //     console.log("Input triggered!")
        // }

        // const debouncedInput = debounce(handleInput, 3000) // 3 sec
        // debouncedInput() 

        // Write a Program Check if an object is Empty.
        // let obj = {"A": 1, "B": 2, "C": 3}
        // let obj2 = {}
        // (Object.keys(obj).length === 0) ? console.log("Empty Object") : console.log("Not Empty Object")
        // (Object.keys(obj2).length === 0) ? console.log("Empty Object") : console.log("Not Empty Object")

        // Convert an Object to a quareyString.
        // const obj = {
        //     name: "John",
        //     age: 30,
        //     city: "New York"
        // }
        // let queryString = "";
        // for (let key in obj) {
        //     queryString += key + "=" + obj[key] + "&"
        // }
        // queryString = queryString.slice(0, -1)
        // console.log(queryString)

        // ---another method---

        // let obj = { name: "John", age: 30, city: "New York" }
        // const queryString = new URLSearchParams(obj).toString();
        // console.log(queryString)

        //Find the Factorial
        // function factorial(n) {
        //     if (n == 0)
        //         return 1;
        //     return n * factorial(n - 1);
        // }
        // let num = 5;
        // console.log(factorial(num));

        // Check if two arrays are Equal
        // let a1 = [1, 2, 3, 5];
        // let a2 = [1, 2, 3, 5];
        // if (JSON.stringify(a1) == JSON.stringify(a2))
        //     console.log("True");
        // else
        //     console.log("False");

        //Get All Unique values from Nested Array ex.[[1,2],[2,3],[3,4],[4,3],[5,5]]
        // const arr = [[1, 2], [2, 3], [3, 4], [4, 3], [5, 5]];
        // const unique = [...new Set(arr.flat())];
        // console.log(unique); // Output: [1, 2, 3, 4, 5]

        // ------- Without inbuilt methods -------
        // const nestedArray = [[1, 2], [2, 3], [3, 4], [4, 3], [5, 5]];
        // const array = nestedArray.flat();
        // const uniqueSet = new Set(array);
        // const uniqueValues = [...uniqueSet];
        // console.log(uniqueValues); // Output: [1, 2, 3, 4, 5]

        // Convert String to CamalCase.(Your Full Name) after add space 
        // let name = "hey,i am meet ashara"
        // let camelCaseName = name
        //     .toLowerCase()
        //     .split(' ')
        //     .map((word, index) => {
        //         if (index === 0) {
        //             return word;
        //         }
        //         return word.charAt(0).toUpperCase() + word.slice(1);
        //     })
        //     .join(' ');
        // console.log(camelCaseName); // Output: heyIAmMeetAshara


        // Make a TextArea And write a Paraghraph in it and also make a button and when user Click btn the whole Paragraph Will Cpoied
        //   <textarea id="textarea"></textarea>
        // <br>
        // <button onclick="copy()">Copy</button>
        //  function copy() {
        //     const textarea = document.getElementById("textarea");
        //     textarea.select();
        //     document.execCommand("copy");
        // }

        // Check If String Has All new Char display only unique characters as a string
        // let name="hello i am meet"
        // let uniqueChars = [];
        //     for (let i = 0; i < name.length; i++) {
        //         if (!uniqueChars.includes(name[i])) {
        //             uniqueChars.push(name[i]);
        //         }
        //     }
        //     console.log(uniqueChars.join('')); //helo

        // Find The First Non Reapeting Char In String
        // function firstNonRepeatingChar(str) {
        //     for (let char of str) {
        //         if (str.indexOf(char) === str.lastIndexOf(char)) {
        //             return char;
        //         }
        //     }
        //     return null; 
        // }
        // console.log(firstNonRepeatingChar("meet"));

        // Find The Intersection of Two Arrays ex. [[1,2,3],[2,3,4]] / O.P [2,3].
        // const arr1 = [1, 2, 3];
        // const arr2 = [2, 3, 4];
        // const result = arr1.filter(value => arr2.includes(value));
        // console.log(result); // Output: [2, 3]

        // Find a Group of Elements by Frequancy (Write Your Own FullName)Find all pair in an Array that sum to a Target Numbers ex. [-1,2,3,3,4,7] / O.P  [[2,4],[3,3],[7,-1]] ...
        // let name = "hey-meet";
        // let frequency = {};
        // for (let char of name) {
        //     frequency[char] = (frequency[char] || 0) + 1;
        // }
        // console.log(frequency);

        // Find all pair in an Array that sum to a Target Numbers ex. [-1,2,3,3,4,7] / O.P  [[2,4],[3,3],[7,-1]] display outside if not grouped
        // const arr = [-1, 2, 3, 3, 4, 7]
        // const target = 6
        // const result = []
        // for (let i = 0; i < arr.length; i++) {
        //     for (let j = i + 1; j < arr.length; j++) {
        //         if (arr[i] + arr[j] === target) {
        //             result.push([arr[i], arr[j]])
        //         }
        //     }
        // }
        // console.log(result)

// Sort an Array of Numbers in Ascending and Descending Order
// const arr = [101,201,1,2]
// var result1 = arr.sort((a, b) => a - b); //ascending order
// var result = arr.sort((a, b) => b - a); //descending order
// console.log(result1); // Output: [201, 101, 2, 1]
// console.log(result); // Output: [1, 2, 101, 201]

// console.log(5 && 1); // Output: 1
// console.log(5 || 1); // Output: 5
// console.log(5 ?? 0); // Output: 5

// if([]) {
//     console.log("True");
// }
// else {
//     console.log("False");
// }

// if([] == true) {
//     console.log(" * ");
// }
// else {
//     console.log("------");
// }

// ----------------------------------------------------
// defer
/* <script src="script.js" defer></script>
  <script>
        console.log("JavaScript loaded after HTML is parsed");
        document.addEventListener("DOMContentLoaded", function () {
            console.log("DOM fully loaded");
        });
    </script> */
    
//redirect 
/* <script>
        setTimeout(function () {
            window.location.href = "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_script_defer";
        }, 2000);
    </script> */
    
    
    
// I want to get result in sync like p1, p2 and p3
// function showMessage(message, time) {
//   return new Promise((done) => {
//     setTimeout(() => {
//       console.log(message);
//       done();
//     }, time);
//   });
// }

// async function runMessages() {
//   await showMessage("Hello World 1", 3000); // Wait 3 sec
//   await showMessage("Hello World 2", 1000); // Wait 1 sec
//   await showMessage("Hello World 3", 2000); // Wait 2 sec
// }

// runMessages();

// abc = [1,2,3,4]; 
// xyz = abc; 
// xyz[3] = 6; 
// console.log(xyz) 
// console.log(abc)
// [1, 2, 3, 6]
// [1, 2, 3, 6]

// const array = [1,2,3,4,5,6,7,8,9,10] 
// o/p: [[1,2,3],[4,5,6],[7,8,9],[10]]

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const chunkSize = 3;
// const result = [];
// for (let i = 0; i < array.length; i += chunkSize) {
//   result.push(array.slice(i, i + chunkSize));
// }
// console.log(result);


// const array = [1,2,[3,4,[5],6],7] 
// o/p: [1,2,3,4,5,6,7]
// const array = [1, 2, [3, 4, [5], 6], 7];
// console.log(array.flat(Infinity));

// const obj = {
//   a: "foo",
//   b: function () {
//     console.log(this.a);
//   },
// };
// const c = obj.b;
// obj.b(); //foo
// c(); //undefined
 
// i/p - Reverse a string - Hello How are you - 
// o/p - ollew woh era uoy
// let a = "Hello How are you"
// let reverse = a.split(" ").map(word => word.split("").reverse().join("")).join(" ")
// console.log(reverse); // Output: "olleH woH era uoy"


//featch example 
 /* <pre id="jsonOutput">Loading...</pre>

    <script>
        const url = "https://api.restful-api.dev/objects";

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const output = document.getElementById("jsonOutput");
                output.textContent = JSON.stringify(data, null, 2); 
            })
            .catch(error => {
                document.getElementById("jsonOutput").textContent = "Error: " + error;
            });
    </script> */
    
// const a = { valueOf: () => 2 };
// console.log(a == 2) //true
// console.log(a + 2) // 4
// console.log(a > 2) //false

// const abc = () => { }
// console.log(abc)