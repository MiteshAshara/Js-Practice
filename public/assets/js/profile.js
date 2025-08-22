document.addEventListener('DOMContentLoaded', function () {
    const logoutBtn = document.getElementById('logout-btn');

    if (logoutBtn) {
        logoutBtn.addEventListener('click', function () {
            document.cookie = "userCredentials=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            window.location.href = "/";
        });
    }
});
fetch('./public/components/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
        setTimeout(function () {
            if (typeof updateCounts === 'function') {
                updateCounts();
            } else {
                var wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
                var cart = JSON.parse(localStorage.getItem('cart') || '[]');
                var w = document.getElementById('wishlist-count');
                var c = document.getElementById('cart-count');
                if (w) w.textContent = wishlist.length || "0";
                if (c) c.textContent = cart.length || "0";
            }
        }, 0);
    });

fetch('./public/components/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });

document.addEventListener('DOMContentLoaded', function () {
    function getUserFromCookie() {
        const match = document.cookie.match(/userCredentials=([^;]+)/);
        if (match) {
            try {
                return JSON.parse(decodeURIComponent(match[1]));
            } catch { }
        }
        return {};
    }
    const user = getUserFromCookie();
    const username = user.username || "User";
    document.getElementById('profile-username').textContent = `${username.charAt(0).toUpperCase() + username.slice(1)}`;
});

document.addEventListener('DOMContentLoaded', function () {
    const profileForm = document.getElementById('profile-form');
    if (profileForm) {
        const saved = JSON.parse(localStorage.getItem('profileData') || '{}');
        if (saved.firstName) document.getElementById('firstName').value = saved.firstName;
        if (saved.lastName) document.getElementById('lastName').value = saved.lastName;
        if (saved.email) document.getElementById('email').value = saved.email;
        if (saved.address) document.getElementById('address').value = saved.address;
        if (saved.country) document.getElementById('country').value = saved.country;
        if (saved.state) document.getElementById('state').value = saved.state;
        if (saved.city) document.getElementById('city').value = saved.city;
        if (saved.gender) {
            if (saved.gender === "Male") document.getElementById('male').checked = true;
            if (saved.gender === "Female") document.getElementById('female').checked = true;
        }
        if (Array.isArray(saved.interests)) {
            document.getElementById('gaming').checked = saved.interests.includes('Gaming');
            document.getElementById('mobile').checked = saved.interests.includes('Mobile');
            document.getElementById('laptop').checked = saved.interests.includes('Laptop');
        }
        if (saved.mobileNumber) document.getElementById('mobileNumber').value = saved.mobileNumber;
        if (saved.currentPassword) document.getElementById('currentPassword').value = saved.currentPassword;
        if (saved.newPassword) document.getElementById('newPassword').value = saved.newPassword;
        if (saved.confirmNewPassword) document.getElementById('confirmNewPassword').value = saved.confirmNewPassword;

        profileForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const data = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                address: document.getElementById('address').value,
                country: document.getElementById('country').value,
                state: document.getElementById('state').value,
                city: document.getElementById('city').value,
                gender: document.getElementById('male').checked ? 'Male' : 'Female',
                interests: [
                    document.getElementById('gaming').checked ? 'Gaming' : null,
                    document.getElementById('mobile').checked ? 'Mobile' : null,
                    document.getElementById('laptop').checked ? 'Laptop' : null
                ].filter(Boolean),
                mobileNumber: document.getElementById('mobileNumber').value,
                currentPassword: document.getElementById('currentPassword').value,
                newPassword: document.getElementById('newPassword').value,
                confirmNewPassword: document.getElementById('confirmNewPassword').value
            };
            localStorage.setItem('profileData', JSON.stringify(data));
            alert('Profile saved!');
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    document.body.addEventListener('click', function (e) {
        if (e.target.closest('.toggle-password')) {
            var eye = e.target.closest('.toggle-password');
            var input = document.getElementById(eye.getAttribute('data-target'));
            if (!input) return;
            if (input.type === "password") {
                input.type = "text";
                eye.querySelector('i').classList.replace('fa-eye', 'fa-eye-slash');
            } else {
                input.type = "password";
                eye.querySelector('i').classList.replace('fa-eye-slash', 'fa-eye');
            }
        }
    });
});
