// ==================22/7/2025==================

// Write a loop from 1 to 100 that skips the multiple of 3 and 5
       /* for (i = 1; i <= 100; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                continue;
            }
            console.log(i);
        } */

// Given an input element with type="email", fetch the value of the type attribute using JavaScript
   /* <label for="email">Email:</label>
    <input type="email" id="email" placeholder="Enter your email">
    <script>
        const emailInput = document.getElementById("email");
        const emailType = emailInput.getAttribute("type");
        console.log(emailType);
    </script> */


// Write a function to hide a paragraph when a button is clicked.
   /* <p id='myPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ullam qui optio.</p>
    <button onclick="Hidepara()">Hide Paragraph</button>
    <button onclick="Showpara()">Show Paragraph</button>
    <script>
        function Hidepara(){
            document.getElementById('myPara').style.display="none"
        }
        function Showpara()
        {
            document.getElementById('myPara').style.display="block"
        }
    </script> */
    
// Prompt the user to enter their age and display it in an alert
   /* <button onclick="Age()">Enter Your Age</button>
    <script>
        function Age(){
            const age = prompt("Enter Your Age : ")
            alert("Your Age is : "+age)
        }
    </script> */

//  Create a form and reset it using a button
   /* <form id="userForm">
        <label>
            Name: <input type="text" name="name">
        </label><br><br>
        <label>
            Email: <input type="email" name="email">
        </label><br><br>
        
        <button type="button" onclick="resetForm()">Reset</button>
    </form>
    <script>
        function resetForm()
        {
            document.getElementById('userForm').reset()
        }
    </script> */

// Write a function that returns the square of a number
// function square(num)
// {
//     return num*num
// }
// console.log(square(4))
/* <label>
     Enter a number: <input type="number" id="num">
 </label><br><br>
 <button onclick="showSquare()">Get Square</button>
 <p id="result"></p>
 <script>
     function square(n) {
         return n * n;
     }
     function showSquare() {
         const input = document.getElementById("num").value;
         const result = square(Number(input));
         document.getElementById("result").textContent = "Square: " + result;
     }
 </script> */

// Split the string "red,green,blue" into an array.
// const colors = "red,green,blue";
// const colorArray = colors.split(",");
// console.log(colorArray);

// Use a ternary operator to display "Pass" if marks are above 40, otherwise "Fail".
// let marks = 39
// let result = (marks > 40) ? "Pass" : "Fail"
// console.log(result)

















// ssr next js13 make an example js
// nullist operator
// 1 to  100 loop print even loop second time odd number
// 1 to 50 count 9 display
// let count = 0;
//   for (let i = 1; i <= 1000; i++) {
//     const digits = i.toString();
//     for (let char of digits) {
//       if (char === '9') count++;
//     }
//   }
//  console.log("Number of times 9 appears:", count);
// 1 to 1000 divisible by 10
// let count = 0;
// for (let i = 1; i <= 50; i++) {
//     if (i % 10 === 0) {
//         console.log(i)
//         count++
//   }
// }
// console.log("Count of numbers divisible by 10:", count);

// make condition display under route 9 op:3 no if else n/a int only
// let a = 2;
// let r = Math.sqrt(a);
// console.log(Number.isInteger(r) ? r : "N/A");

// const text = "Meet"
// const search = "Dev"
// // let caseInsensitiveResuelt = text.toUpperCase().includes(search.toUpperCase())
// let caseInsensitiveResuelt = text.toLowerCase().includes(search.toLowerCase())
// console.log(caseInsensitiveResuelt);

// const today = new Date("2025-09-23")
// console.log("Week Number:",getWeekNumber(today));

// function getWeekNumber(date) {
//     const start = new Date(date.getFullYear(), 0, 1);
//     const diff = date - start
//     const oneWeek = 1000 * 60 * 60 * 24 * 7
//     return Math.ceil((diff+1)/oneWeek)
// }
// const today = new Date("2025-07-23");
// console.log("week number:", getWeekNumber(today));

// const date1 = new Date('2025-07-01')
// const date2 = new Date('2025-07-23')
// const diffTime = Math.abs(date1 - date2)
// const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
// console.log("Difference in days:", diffDays);
// console.log("Difference in days:", diffTime);

// const PI = 3.14
// console.log(PI)