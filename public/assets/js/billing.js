fetch('./public/components/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
        document.addEventListener('click', function (event) {
            var navbarCollapse = document.getElementById('navbarNav');
            var toggler = document.querySelector('.navbar-toggler');
            if (!navbarCollapse || !toggler) return;

            var isOpen = navbarCollapse.classList.contains('show');
            var clickedInsideNavbar = navbarCollapse.contains(event.target) || toggler.contains(event.target);

            if (isOpen && !clickedInsideNavbar) {
                var bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });

fetch('./public/components/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });

const billingForm = document.getElementById('billing-form');
const placeOrderBtn = document.getElementById('place-order');
let couponApplied = false;
let couponDiscount = 0;
let subtotal = 0;
let couponState = JSON.parse(localStorage.getItem('couponState') || '{}');
if (couponState && couponState.applied) {
    couponApplied = true;
    couponDiscount = couponState.discount || 0;
}
function getCouponCode() {
    const match = document.cookie.match(/userCredentials=([^;]+)/);
    const monthAbbr = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const now = new Date();
    const mon = monthAbbr[now.getMonth()];
    if (match) {
        try {
            return ((JSON.parse(decodeURIComponent(match[1])).username || "USER").toUpperCase()) + "DEVIT" + mon + "202526";
        } catch { }
    }

    return "USERDEVIT" + mon + "202526";
}

document.addEventListener('DOMContentLoaded', function () {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartSummary = document.getElementById('cart-summary');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartTotal = document.getElementById('cart-total');
    const couponInput = document.querySelector('.input-group input[placeholder="Coupon Code"]');
    const couponBtn = document.querySelector('.input-group button[type="button"]');
    const couponDiscountRow = document.getElementById('coupon-discount-row');
    const couponDiscountAmount = document.getElementById('coupon-discount-amount');
    const couponInputGroup = document.getElementById('coupon-input-group');

    if (cartItems.length === 0) {
        cartSummary.innerHTML = '<p>Your cart is empty.</p>';
        cartSubtotal.textContent = '$0';
        cartTotal.textContent = '$0';
        return;
    }

    subtotal = 0;
    cartSummary.innerHTML = cartItems.map(item => {
        const quantity = item.quantity || 1;
        const itemSubtotal = item.price * quantity;
        subtotal += itemSubtotal;
        return `
                <div class="cart-item-row d-flex justify-content-between align-items-center mb-3">
                    <div class="cart-item-info d-flex align-items-center">
                        <img src="${item.image || ''}" class="cart-item-img" alt="image not found" style="height:50px">
                        <span>${item.name}</span>
                    </div>
                    <span>$${itemSubtotal.toLocaleString()}</span>
                </div>
            `;
    }).join('');

    cartSubtotal.textContent = `$${subtotal.toLocaleString()}`;

    if (couponApplied && couponDiscount > 0) {
        couponDiscountRow.style.display = "";
        couponDiscountAmount.textContent = "-$" + couponDiscount.toLocaleString();
        cartTotal.textContent = "$" + (subtotal - couponDiscount).toLocaleString();
        if (couponBtn && couponInput) {
            couponBtn.disabled = true;
            couponInput.disabled = true;
            couponBtn.textContent = "Applied";
            couponBtn.classList.remove("btn-danger");
            couponBtn.classList.add("btn-success");
        }
    } else {
        couponDiscountRow.style.display = "none";
        cartTotal.textContent = `$${subtotal.toLocaleString()}`;
    }

    if (couponApplied && couponState.code) {
        if (couponInputGroup) {
            couponInputGroup.innerHTML = `<input type="text" class="form-control bg-light" value="${couponState.code}" readonly>
            <button class="btn btn-outline-danger" type="button" id="remove-coupon-btn">Remove Coupon</button>`;
            document.getElementById('remove-coupon-btn').onclick = function () {
                localStorage.removeItem('couponState');
                window.location.reload();
            };
        }
    } else if (couponInput && couponState && couponState.code) {
        couponInput.value = couponState.code;
    }
    if (couponBtn && couponInput) {
        couponBtn.onclick = function () {
            const expectedCoupon = getCouponCode();
            if (couponInput.value.trim().toUpperCase() === expectedCoupon) {
                couponApplied = true;
                couponDiscount = Math.round(subtotal * 0.3);
                localStorage.setItem('couponState', JSON.stringify({ applied: true, discount: couponDiscount, code: expectedCoupon }));
                couponDiscountRow.style.display = "";
                couponDiscountAmount.textContent = "-$" + couponDiscount.toLocaleString();
                cartTotal.textContent = "$" + (subtotal - couponDiscount).toLocaleString();
                couponBtn.disabled = true;
                couponInput.disabled = true;
                couponBtn.textContent = "Applied";
                couponBtn.classList.remove("btn-danger");
                couponBtn.classList.add("btn-success");
            } else {
                alert("Your Coupon code is: " + expectedCoupon);
            }
        };
    }

    document.getElementById('place-order').addEventListener('click', function () {
        if (!billingForm.checkValidity()) return;
        alert('Order placed successfully!');
        localStorage.removeItem('cart');
        localStorage.removeItem('couponState');
        window.location.reload();
    });
});

placeOrderBtn.addEventListener('click', function (e) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    if (!billingForm.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
        billingForm.classList.add('was-validated');
        return;
    }
    if (cartItems.length === 0) {
        e.preventDefault();
        alert('Your cart is empty. Please add at least one product.');
        return;
    }
});

if (!document.cookie.includes("userCredentials=")) location.href = "/";