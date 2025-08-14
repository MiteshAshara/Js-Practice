function updateCounts() {
    var wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    var cart = JSON.parse(localStorage.getItem('cart') || '[]');
    var w = document.getElementById('wishlist-count');
    var c = document.getElementById('cart-count');
    if (w) w.textContent = wishlist.length || "0";
    if (c) c.textContent = cart.length || "0";
}

function checkLoginStatus() {
    const isLoggedIn = document.cookie.indexOf('loggedIn=') !== -1;
    const userIcon = document.getElementById('user-icon');
    userIcon.style = isLoggedIn ? 'border: 2px solid black;padding: 3px;' : '';
}

document.addEventListener('DOMContentLoaded', function () {
    updateCounts();
    checkLoginStatus();
    window.addEventListener('storage', function (e) {
        if (e.key === 'wishlist' || e.key === 'cart') updateCounts();
    });
});
