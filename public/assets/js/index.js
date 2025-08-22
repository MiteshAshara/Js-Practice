fetch('./public/components/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    });

fetch('./public/components/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });

function getLoggedInUser() {
    const match = document.cookie.match(/userCredentials=([^;]+)/);
    if (match) {
        try {
            const user = JSON.parse(decodeURIComponent(match[1]));
            return user.username || "";
        } catch { }
    }
    return "";
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    const loginSection = document.getElementById("login-section");
    const welcomeSection = document.getElementById("welcome-section");
    const welcomeUsername = document.getElementById("welcome-username");
    const logoutBtn = document.getElementById("logout-btn");

    const username = getLoggedInUser();
    if (username) {
        if (loginSection) loginSection.style.display = "none";
        if (welcomeSection) welcomeSection.style.display = "block";
        if (welcomeUsername) welcomeUsername.textContent = username.charAt(0).toUpperCase() + username.slice(1);
        if (logoutBtn) {
            logoutBtn.onclick = function () {
                document.cookie = "userCredentials=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                window.location.reload();
            };
        }
        return;
    }
    if (loginSection) loginSection.style.display = "block";
    if (welcomeSection) welcomeSection.style.display = "none";

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!username || !password) {
            alert("Please enter both username and password.");
            return;
        }

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://dummyjson.com/auth/login");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState  === XMLHttpRequest.DONE) {
                try {
                    const data = JSON.parse(xhr.responseText);
                    if (xhr.status === 200 && data && data.id) {
                        const userData = { username, password };
                        document.cookie = `userCredentials=${encodeURIComponent(JSON.stringify(userData))}; max-age=${60 * 60 * 24}; path=/`;
                        window.location.href = "/dashbaord.html";
                    } else {
                        document.getElementById("loginMessage").textContent = data.message || "Invalid username or password.";
                    }
                } catch {
                    document.getElementById("loginMessage").textContent = "Error Please Try Again";
                }
            }
        };
        xhr.onerror = function () {
            document.getElementById("loginMessage").textContent = "Error Please Try Again";
        };
        xhr.send(JSON.stringify({
            username: username,
            password: password,
        }));
    });
});