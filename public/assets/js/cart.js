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
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartTableBody = document.getElementById('cart-tbody');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartTotal = document.getElementById('cart-total');
    const couponInput = document.querySelector('.input-group input[placeholder="Coupon Code"]');
    const couponBtn = document.querySelector('.input-group button[type="button"]');
    const couponDiscountRow = document.getElementById('coupon-discount-row');
    const couponDiscountAmount = document.getElementById('coupon-discount-amount');
    const couponInputGroup = document.getElementById('coupon-input-group');

    let subtotal = 0;
    let couponApplied = false;
    let couponDiscount = 0;

    let couponState = JSON.parse(localStorage.getItem('couponState') || '{}');
    if (couponState && couponState.applied) {
        couponApplied = true;
        couponDiscount = couponState.discount || 0;
    }

    if (couponState && couponState.code && couponInput) {
        couponInput.value = couponState.code;
    }

    function getCouponCode() {
        const match = document.cookie.match(/userCredentials=([^;]+)/);
        const monthAbbr = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        const now = new Date();
        const mon = monthAbbr[now.getMonth()];
        if (match) {
            try {
                const user = JSON.parse(decodeURIComponent(match[1]));
                return (user.username ? user.username.toUpperCase() : "USER") + "DEVIT" + mon + "202526";
            } catch { }
        }
        return "USERDEVIT" + mon + "202526";
    }

    function updateTotals(total) {
        let discount = 0;

        if (couponApplied && couponState && couponState.code) {
            discount = Math.round(total * 0.3);
            couponDiscount = discount;
            localStorage.setItem('couponState', JSON.stringify({ applied: true, discount: couponDiscount, code: couponState.code }));
            couponDiscountRow.style.display = "";
            couponDiscountAmount.textContent = "-$" + discount.toLocaleString();
            cartTotal.textContent = "$" + (total - discount).toLocaleString();
        } else {
            couponDiscountRow.style.display = "none";
            cartTotal.textContent = `$${total.toLocaleString()}`;
        }
        cartSubtotal.textContent = `$${total.toLocaleString()}`;
    }

    function renderCart() {
        if (cartItems.length === 0) {
            cartTableBody.innerHTML = `
                    <tr>
                        <td colspan="6" class="text-center">Your cart is empty. <a href="/dashbaord.html" class="text-dark text-decoration-none">Continue shopping</a></td>
                    </tr>
                 `;
            updateTotals(0);
            return;
        }

        let total = 0;
        cartTableBody.innerHTML = cartItems.map((item, index) => {
            const quantity = item.quantity || 1;
            const subtotal = item.price * quantity;
            total += subtotal;
            return `
                        <tr class="text-center align-middle">
                            <td>
                                <img src="${item.image}" alt="image not found" width="80" height="80" width="auto" class="me-3">
                            </td>
                            <td>${item.name}</td>
                            <td>$${item.price}</td>
                            <td>
                                <input type="number" class="form-control-sm text-center quantity-input" 
                                    value="${quantity}" min="1" data-index="${index}">
                            </td>
                            <td class="item-subtotal">$${subtotal.toLocaleString()}</td>
                            <td>
                                <button class="btn btn-danger btn-sm remove-item" data-index="${index}">
                                    <i class="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                     `;
        }).join('');
        updateTotals(total);

        cartTableBody.querySelectorAll('.quantity-input').forEach(input => {
            input.addEventListener('input', function () {
                const id = parseInt(this.getAttribute('data-index'));
                const newQuantity = parseInt(this.value) || 1;
                cartItems[id].quantity = newQuantity;
                localStorage.setItem('cart', JSON.stringify(cartItems));
                renderCart();
            });
        });
        cartTableBody.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', function () {
                const id = parseInt(this.getAttribute('data-index'));
                cartItems.splice(id, 1);
                localStorage.setItem('cart', JSON.stringify(cartItems));
                renderCart();
                if (typeof updateCounts === 'function') updateCounts();
                else {
                    var c = document.getElementById('cart-count');
                    if (c) c.textContent = cartItems.length || "0";
                }
            });
        });
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
                let total = 0;
                cartItems.forEach(item => {
                    const quantity = item.quantity || 1;
                    total += item.price * quantity;
                });
                couponDiscount = Math.round(total * 0.3);
                localStorage.setItem('couponState', JSON.stringify({ applied: true, discount: couponDiscount, code: expectedCoupon }));
                couponDiscountRow.style.display = "";
                couponDiscountAmount.textContent = "-$" + couponDiscount.toLocaleString();
                cartTotal.textContent = "$" + (total - couponDiscount).toLocaleString();
                couponBtn.disabled = true;
                couponInput.disabled = true;
                couponBtn.textContent = "Applied";
                couponBtn.classList.remove("btn-danger");
                couponBtn.classList.add("btn-success");
                if (couponInputGroup) {
                    couponInputGroup.innerHTML = `<input type="text" class="form-control bg-light" value="${expectedCoupon}" readonly>
                        <button class="btn btn-outline-danger" type="button" id="remove-coupon-btn">Remove Coupon</button>`;
                    document.getElementById('remove-coupon-btn').onclick = function () {
                        localStorage.removeItem('couponState');
                        window.location.reload();
                    };
                }
            } else {
                alert("Your Coupon code is : " + expectedCoupon);
            }
        };
        if (couponApplied) {
            couponBtn.disabled = true;
            couponInput.disabled = true;
            couponBtn.textContent = "Applied";
            couponBtn.classList.remove("btn-danger");
            couponBtn.classList.add("btn-success");
        }
    }
    renderCart();
});
