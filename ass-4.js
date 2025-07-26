// Create a form with three input fields: name, email, and password. Validate all three using getElementById.
/*
    <div div class="container mt-5" >
        <h2 class="mb-4 text-secondary text-center">Registration Form</h2>
        <form onsubmit="return validateForm()">

            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" id="name" class="form-control" placeholder="Enter your name">
            </div>

            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="text" id="email" class="form-control" placeholder="Enter your email">
            </div>

            <div class="mb-3">
            
                <label for="password" class="form-label">Password</label>
                <input type="password" id="password" class="form-control" placeholder="Enter password">
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>

    <script>
        function validateForm() {
        const test = document
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value;

            if (name === "") {
                alert("Name is required");
                return false;
            }

            if (!email.includes("@") || !email.includes(".")) {
                alert("Enter a valid email");
                return false;
            }

            if (password.length <= 6) {
                alert("Password must be at least 6 characters");
                return false;
            }

            alert("Form submitted successfully!");
            return true;
        }
    </script> */

//Add 3 <div> elements and change the color of each using getElementsByTagName.
/* <style>
        div {
            width: 150px;
            height: 100px;
            margin: 10px;
            border: 1px solid #ccc;
            display: inline-block;
        }
</style>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    <script>
        const divs = document.getElementsByTagName("div");
        divs[0].style.backgroundColor = "lightcoral";
        divs[1].style.backgroundColor = "lightgreen";
        divs[2].style.backgroundColor = "lightblue";
        divs[3].style.backgroundColor = "lightblue"; 
    </script> */
    
// Make a form with a checkbox group for hobbies using getElementsByName. Show selected hobbies on submit.
/* <div class="container mt-5">
        <div class="card">
            <div class="card-header bg-light text-center">
                <h4 class="mb-0">Select Your Hobbies</h4>
            </div>
            <div class="card-body">
                <form onsubmit="return showHobbies()">
                    
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="hobby" value="Reading" id="reading">
                        <label class="form-check-label" for="reading">Reading</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="hobby" value="Traveling" id="traveling">
                        <label class="form-check-label" for="traveling">Traveling</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="hobby" value="Gaming" id="gaming">
                        <label class="form-check-label" for="gaming">Gaming</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="hobby" value="Cooking" id="cooking">
                        <label class="form-check-label" for="cooking">Cooking</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="hobby" value="Game" id="game">
                        <label class="form-check-label" for="game">Game</label>
                    </div>

                    <button type="submit" class="btn btn-outline-primary mt-3">Submit</button>
                    <ul id="output" class="list-group list-group-flush"></ul>
                </form>
            </div>
        </div>
    </div>

    <script>
        function showHobbies() {
            let a = document.getElementById("output");
            a.innerHTML = "";
            document.getElementsByName("hobby").forEach(h => {
                if (h.checked) a.innerHTML += `<b>You Have Checked : ${h.value}</b>`;
            });
            return false;
        }
    </script> */

// Use innerText and innerHTML on same element. Show the difference in rendering.
/* <div class="container mt-5">
        <div class="card">
            <div class="card-header bg-primary text-white">
                <h5 class="mb-0">innerText vs innerHTML Example</h5>
            </div>

            <div class="card-body">
                <div id="demo" class="border p-3 mb-3" style="min-height: 50px;"></div>
                <button onclick="useInnerText()" class="btn btn-outline-secondary me-2">Use innerText</button>
                <button onclick="useInnerHTML()" class="btn btn-outline-success">Use innerHTML</button>
                <button onclick="clearContent()" class="btn btn-outline-dark">Clear</button>
            </div>
        </div>
    </div>
    
    <script>
        function useInnerText() {
            document.getElementById("demo").innerText = "<b>Hello</b>,Meet";
        }

        function useInnerHTML() {
            document.getElementById("demo").innerHTML = "<b>Hello</b>,<em>Meet<em>";
        }

        function clearContent(){
            document.getElementById("demo").innerText = "";
            document.getElementById("demo").innerHTML = "";
        }        
    </script> */

// Create a form:
// Validate non-empty fields
// Match password & confirm password
// Validate email
// Alert success if all are valid

/* <div class="container mt-3">
        <h3 class="text-center text-secondary">Login Form</h3>
        <form id="myForm" class="container mt-5">
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" placeholder="Enter Username" required>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Enter E-mail" required>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Enter Password" required>
            </div>
            <div class="mb-3">
                <label for="confirmPassword" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="confirmPassword" placeholder="Enter Confirm Password" required>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>

        <script>
            document.getElementById('myForm').addEventListener('submit', function (event) {
                event.preventDefault();
                
                const username = document.getElementById('username').value;
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                const confirmPassword = document.getElementById('confirmPassword').value;

                if (!username || !email || !password || !confirmPassword) {
                    alert('All fields are required!');
                    return;
                }

                if (password !== confirmPassword) {
                    alert('Passwords do not match!');
                    return;
                }

                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email)) {
                    alert('Invalid email format!');
                    return;
                }

                alert('Form submitted successfully!');

                document.getElementById('myForm').reset();
            });
        </script>
    </div> */

// Create a form that validates age and name
// Name must be at least 3 characters long.
// Age must be a number between 18 and 60.
// Show appropriate alert messages if validation fails.
// Show “Form submitted successfully” only if all validations pass.

 /* <div class="container mt-5">
        <div class="card">
            <div class="card-header bg-dark text-white">
                <h4 class="text-center mb-0">User Information Form</h4>
            </div>
            <div class="card-body">
                <form onsubmit="return validateForm()">
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" id="name" class="form-control" placeholder="Enter your name" onkeypress="return /[a-zA-Z]/.test(event.key)">
                    </div>

                    <div class="mb-3">
                        <label for="age" class="form-label">Age</label>
                        <input type="number" id="age" class="form-control" placeholder="Enter your age" onkeypress="return /[0-9]/.test(event.key)" oninput="this.value = this.value.slice(0, 3)">
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                    <button type="reset" class="btn btn-secondary">Reset</button>
                </form>
            </div>
        </div>
    </div>
    <script>
        function validateForm() {
            const name = document.getElementById('name').value;
            const age = document.getElementById('age').value;

            // if (!/^[a-zA-Z]+$/.test(name)) {
            //     alert("Name must contain only alphabetic characters.");
            //     return false;
            // }

            if (name.length < 3) {
                alert("Name must be at least 3 characters long.");
                return false;
            }

            if (age < 12 || age > 99) {
                alert("Age must be a number between 12 and 99.");
                return false;
            }

            else {
                alert("Form submitted successfully");
            }
            return true;
        }

    </script> */

