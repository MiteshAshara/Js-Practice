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
    
// Add Radio Button and make one Radio BUtton Disable While click on button, and same do enable that radiobutton. and put submit button to get details what we want.

// Find a Diffrence Between 2 array with deatils like capital and small latter find with the use of includes() Method in js.
// const array1 = ['A', 'B', 'C', 'D'];
// const array2 = ['a', 'b', 'c', 'd'];
// const difference = array1.filter(item => !array2.includes(item.toLowerCase()));
// console.log(difference); // Output: ['A', 'B', 'C', 'D']


// find all function use in website any site per page
// write js display global and block scope varibale in chrome
// write js without console on browser
// how to debug website forntend
// make table 10 row even row make bg gray others white
// display if name is length 2,4 display capital word

