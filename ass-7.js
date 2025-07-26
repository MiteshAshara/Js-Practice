// ==================21/7/2025==================

// Safe JSON Calculator with Exception handling, eval, Promises, Strict Mode, Debugging

// "use strict";
// const safeCalculator = json =>
//   new Promise((res, rej) => {
//     try {
//       res(eval(JSON.parse(json).expression));
//     } catch (e) {
//       rej("Error: " + e.message);
//     }
//   });
// safeCalculator('{"expression":"Meeet"}')
// safeCalculator('{"expression":"2 + 2"}')
//   .then(r => console.log("Result:", r))
//   .catch(e => console.error(e));


// Delayed Task with Promises & Timeout
// Concepts: Promises, Async/Await, Date comparison, Debugging

// const delayedTask = (ms) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Task completed after ${ms} milliseconds`);
//     }, ms);
//   });
// };

// const executeTasks = async () => {
//   console.log("Starting tasks...");
//   const result1 = await delayedTask(1000);
//   console.log(result1);
//   const result2 = await delayedTask(2000);
//   console.log(result2);
//   console.log("All tasks completed.");
// };
// executeTasks();

// Event Delegation with closest()
// Concepts: Event handling, closest(), this, alert

/* <div id="container">
        <button class="btn">Button 1</button>
        <button class="btn">Button 2</button>
        <button class="btn">Button 3</button>
    </div>

    <script>
        document.getElementById("container").addEventListener("click", function (e) {
            const btn = e.target.closest(".btn");
            if (btn) alert("You clicked: " + btn.textContent);
        });
    </script> */


// Hoisting & Debug Scenario
// Concepts: Hoisting, var/let, debugger, Strict Mode

// debugger; // This line will pause the browser if DevTools is open

// Hoisting Example with var
// console.log("Value of a before declaration:", a); // undefined
// var a = 10;
// console.log("Value of a after declaration:", a); // 10

// // Hoisting Example with let
// try {
//   console.log("Value of b before declaration:", b); // Error!
// } catch (e) {
//   console.error("Error:", e.message);
// }

// let b = 20;
// console.log("Value of b after declaration:", b); // 20

// // Without declaring a variable
// try {
//   undeclaredVar = 5; // Error in strict mode
// } catch (e) {
//   console.error("Strict mode error:", e.message);
// }

// Combined Mini Form App
// Concepts: Exception Handling, Promises, Date comparison, this, alert, eval, closest(), Debugging

/*    <form id="form">
        <input type="date" id="dob" required><br><br>
        <input type="text" id="exp" placeholder="e.g. 5+3" required><br><br>
        <button>Submit</button>
    </form>

    <script>
        "use strict";
        document.getElementById("form").addEventListener("submit", function (e) {
            e.preventDefault();
            debugger;

            const dob = new Date(document.getElementById("dob").value);
            const exp = document.getElementById("exp").value;

            if (new Date().getFullYear() - dob.getFullYear() < 18) {
                return alert("You must be at least 18 years old.");
            }

            Promise.resolve().then(() => alert("Result: " + eval(exp)))
                .catch(err => alert("Error: " + err.message));
        });
    </script>
*/

// a();
// function a() {
//     console.log("Meet")
// }
// let car = {
//     name: "car1",
//     model:"2025"
// }
// localStorage.setItem( )

//array[1,2,3,4] new variable assign 7 find array length and index 5 value ?
// let array = [1, 2, 3, 4];
// array[7] = 7; // Assigning value 7 to index 5
// console.log(array.length); // Output: 8
// console.log(array[5]); // Output: undefined (since index 5 was not previously defined)

// console.log(null == 0) //flase, undefined, NaN, empty string
// console.log(null < 0) // null > 0 , false
// console.log(null <= 0) // true

// console("a") setTimeout(console("B")) setTimeout(console("c")) console("D") Promise(console("E")) setinterval(2sec(console("F")))
// console.log("A")
// setTimeout(() => console.log("B"), 0)
// setTimeout(() => console.log("C"), 0)
// console.log("D")
// Promise.resolve().then(() => console.log("E"))
// setInterval(()=>console.log("F"),2000)


// let arr = ['A', 'a', 'b', 'B','1','2','3'];
// console.log(arr.sort());

