// ==================24/7/2025==================

// Do Print 1 to 100 and diveded by 3 and 5 do skip and 3 and 5 multiply are there in 1 to 100 in js.
// for (let i = 1; i <= 10; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         continue;
//     }
//     console.log(i);
// }


// Write a Paragraph and it's already Hide with Hide Button now in same button add Show paragraph and When Click On Show Paragraph It's Show Paragraph in js.
/* <button id="toggleBtn" onclick="toggleParagraph()">Show Paragraph</button>

  <p id="myPara">This is a sample paragraph that can be shown or hidden using the button above.</p>

  <script>
    function toggleParagraph() {
      const para = document.getElementById("myPara");
      const btn = document.getElementById("toggleBtn");

      if (para.style.display === "none") {
        para.style.display = "block";
        btn.textContent = "Hide Paragraph";
      } else {
        para.style.display = "none";
        btn.textContent = "Show Paragraph";
      }
    }
  </script> */



// Write a program that give input Password and Put Show Eye icon when we click icon the password will be visible and again click on icon it's hide details
   /*  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        integrity="sha512-..." crossorigin="anonymous" referrerpolicy="no-referrer" />
        
      <div class="password-container">
        <input type="password" id="password" placeholder="Enter Password">
        <span class="toggle-eye" onclick="togglePassword()">
            <i class="fas fa-eye" id="eyeIcon"></i>
        </span>
    </div>

    <script>
        function togglePassword() {
            const passwordField = document.getElementById("password");
            const eyeIcon = document.getElementById("eyeIcon");

            if (passwordField.type === "password") {
                passwordField.type = "text";
                eyeIcon.classList.remove("fa-eye");
                eyeIcon.classList.add("fa-eye-slash");
            } else {
                passwordField.type = "password";
                eyeIcon.classList.remove("fa-eye-slash");
                eyeIcon.classList.add("fa-eye");
            }
        }
    </script> */


// Make a Dropdown Menu and Add deatils with JSON File add details in JSONfile that all you want to add in dropDown.

/* <style>
    #dropdown {
        width: 200px;
        padding: 5px;
        background-color: blanchedalmond;
        border: 2px solid #ccc;
    }
</style>
<select id="dropdown"></select>
    <script>
        fetch("./ass-10-data.json")
            .then(response => {
                if (!response.ok) throw new Error("Failed to load JSON");
                return response.json();
            })
            .then(data => {
                const dropdown = document.getElementById("dropdown");
                data.forEach(item => {
                    const option = document.createElement("option");
                    option.value = item.value;
                    option.textContent = item.label;
                    dropdown.appendChild(option);
                });
            })
            .catch(err => console.error("Error loading JSON:", err));
    </script> */


// Make a Multiple inputs(Dropdown,Checkbox,Radio) and Add Details via in JSON File.
    /* <label for="country">Country:</label>
    <select id="country">
        <option value="USA">USA</option>
        <option value="India">India</option>
        <option value="UK">UK</option>
    </select>
    <br><br>

    <label>Skills:</label><br>
    <input type="checkbox" name="skills" value="JavaScript"> JavaScript<br>
    <input type="checkbox" name="skills" value="Python"> Python<br>
    <input type="checkbox" name="skills" value="HTML"> HTML<br><br>

    <label>Gender:</label><br>
    <input type="radio" name="gender" value="Male"> Male<br>
    <input type="radio" name="gender" value="Female"> Female<br><br>
    <button onclick="collectData()">Add Details</button>

    <h3>JSON Output:</h3>
    <pre id="output"></pre>

    <script>
        function collectData() {
            const country = document.getElementById("country").value;

            const skillNodes = document.querySelectorAll("input[name='skills']:checked");

            const skills = Array.from(skillNodes).map(cb => cb.value);

            const genderNode = document.querySelector("input[name='gender']:checked");

            const gender = genderNode ? genderNode.value : null;
            
            const userDetails = {
                country: country,
                skills: skills,
                gender: gender
            };
            document.getElementById("output").textContent = JSON.stringify(userDetails, null, 2);
        }
    </script> */
    
// Add Radio Button and make one Radio BUtton Disable While click on button, and same do enable that radiobutton. and put submit button to get details what we want.
/* <h2>Choose Gender</h2>

    <input type="radio" name="gender" value="Male" id="male"> Male<br>
    <input type="radio" name="gender" value="Female" id="female"> Female<br><br>

    <button onclick="toggleFemale()">Disable/Enable 'Female'</button><br><br>
    <button onclick="submitData()">Submit</button>

    <h3>Output (JSON):</h3>
    <pre id="output"></pre>

    <script>
        function toggleFemale() {
            const femaleRadio = document.getElementById("female");
            femaleRadio.disabled = !femaleRadio.disabled;
        }

        function submitData() {
            const genderNode = document.querySelector("input[name='gender']:checked");
            const gender = genderNode ? genderNode.value : null;

            const data = {
                gender: gender
            };

            document.getElementById("output").textContent = JSON.stringify(data, null, 2);
        }
    </script> */

// Find a Diffrence Between 2 array with deatils like capital and small latter find with the use of includes() Method in js.
// const array1 = ['A', 'B', 'C', 'D'];
// const array2 = ['a', 'b', 'c', 'd'];
// const difference = array1.filter(item => !array2.includes(item.toLowerCase()));
// console.log(difference); // Output: ['A', 'B', 'C', 'D']


// find all function use in website any site per page
//  Right-click the page → Inspect->source->ctrl+p open file search->functions

// write js display global and block scope varibale in chrome
// var globalVar = 'I am global';
// let blockVar = 'I am block scoped';
// const blockConst = 'I am also block scoped';

// {
//   let innerBlock = 'inside block';
//   console.log('Block Scope Variables:');
//   console.log({ blockVar, blockConst, innerBlock });
// }

// console.log('Global Scope Variables:');
// console.log({ globalVar });

// write js without console on browser
// how to debug website forntend
// make table 10 row even row make bg gray others white
 /* <style>
        table {
            width: 50%;
            border-collapse: collapse;
            margin: 20px;
        }

        th,
        td {
            border: 1px solid #333;
            padding: 10px;
            text-align: center;
        }

        tr:nth-child(even) {
            background-color: #f0f0f0;
        }

</style> 
    
    <table>
        <tr>
            <th>#</th>
            <th>Name</th>
        </tr>
        <tr>
            <td>1</td>
            <td>Row 1</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Row 2</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Row 3</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Row 4</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Row 5</td>
        </tr>
        <tr>
            <td>6</td>
            <td>Row 6</td>
        </tr>
        <tr>
            <td>7</td>
            <td>Row 7</td>
        </tr>
        <tr>
            <td>8</td>
            <td>Row 8</td>
        </tr>
        <tr>
            <td>9</td>
            <td>Row 9</td>
        </tr>
        <tr>
            <td>10</td>
            <td>Row 10</td>
        </tr>
    </table> */


// display if name is length is 2 or 4 make first latter capital if 3 do not implement
// const names = ['jo', 'john', 'doe', 'mary', 'paul','ACP']
// names.forEach(name => {
//   if (name.length === 2 || name.length === 4) {
//     console.log(name.charAt(0).toUpperCase() + name.slice(1))
//   }
// })

