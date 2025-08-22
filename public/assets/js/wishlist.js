fetch('./public/components/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
        if (typeof updateCounts === 'function') {
            updateCounts();
        } else {
            var wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
            var cart = JSON.parse(localStorage.getItem('cart') || '[]');
            var w = document.getElementById('wishlist-count');
            var c = document.getElementById('cart-count');
            if (w) w.textContent = wishlist.length;
            if (c) c.textContent = cart.length;
        }
    });

fetch('./public/components/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });

document.addEventListener('DOMContentLoaded', function () {
    const wishlistContainer = document.getElementById('wishlist-items');
    const wishlistCountHeading = document.getElementById('wishlist-count-heading');

    function updateWishlistCountHeading() {
        const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
        wishlistCountHeading.textContent = `(${wishlistItems.length})`;
    }

    function renderWishlist() {
        const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
        updateWishlistCountHeading();
        if (wishlistItems.length === 0) {
            wishlistContainer.innerHTML = `
            <p class="text-center">Your wishlist is empty <a class="text-dark text-decoration-none" href="./dashbaord.html">Continue shopping</a></p>
        `;
            return;
        }
        wishlistContainer.innerHTML = `
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
            ${wishlistItems.map((item, index) => `
                        <div class="col">
                            <div class="card border-0 position-relative h-100 product-card-hover">
                                <button class="btn bg-white btn-sm remove-wishlist-item position-absolute" data-id="${item.id}" style="top:10px; right:10px; z-index:3;">
                                    <i class="fa fa-trash"></i>
                                </button>
                                <img src="${item.image || 'image not found'}" class="card-img-top p-5 bg-light"
                                    style="height:240px; object-fit:contain;" alt="${item.name}">
                                <div class="card-body pt-2 px-2 d-flex flex-column align-items-start">
                                    <div class="fw-bold mb-1" style="font-size:1.05rem;">${item.name}</div>
                                    <div class="text-danger fw-bold mb-2" style="font-size:1.05rem;">$${item.price}</div>
                                    <div class="card-action-hover d-flex gap-2 mt-auto w-100 position-absolute" style="bottom:10px; left:0; justify-content:center;">
                                        <button class="btn btn-dark btn-sm add-to-cart-btn add-to-cart-wishlist" data-index="${index}">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
             `;
    }
    renderWishlist();

    wishlistContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('remove-wishlist-item') || event.target.closest('.remove-wishlist-item')) {
            const btn = event.target.closest('.remove-wishlist-item');
            const id = btn.getAttribute('data-id');
            let wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
            wishlistItems = wishlistItems.filter(item => String(item.id) !== String(id));
            localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
            renderWishlist();
        }
        if (event.target.classList.contains('add-to-cart-wishlist')) {
            const btn = event.target;
            const index = btn.getAttribute('data-index');
            let wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
            const item = wishlistItems[index];
            if (!item) return;
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            if (!cart.some(cItem => String(cItem.id) === String(item.id))) {
                cart.push(item);
                localStorage.setItem('cart', JSON.stringify(cart));
                btn.textContent = "Added!";
                btn.classList.remove('btn-dark');
                btn.classList.add('btn-success');
                setTimeout(() => {
                    btn.textContent = "Add to Cart";
                    btn.classList.remove('btn-success');
                    btn.classList.add('btn-dark');
                }, 1000);
            }
        }
    });
    document.getElementById('move-all-to-bag').addEventListener('click', function () {
        let wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
        if (wishlistItems.length === 0) return;
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        wishlistItems.forEach(wItem => {
            if (!cart.some(cItem => String(cItem.id) === String(wItem.id))) {
                cart.push(wItem);
            }
        });
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('wishlist', JSON.stringify([]));
        wishlistContainer.innerHTML = `
                <p class="text-center">Your wishlist is empty <a class="text-dark text-decoration-none" href="./dashbaord.html">Continue shopping</a></p>
            `;
        updateWishlistCountHeading();
    });

    renderWishlist();
});

function renderJustForYou(products) {
    const container = document.getElementById('just-for-you');
    container.innerHTML = products.slice(0, 4).map((item, idx) => {
        let starsHtml = '';
        if (item.rating !== undefined && item.reviews !== undefined) {
            const fullStars = Math.floor(item.rating);
            const halfStar = item.rating % 1 !== 0;
            const emptyStars = 5 - Math.ceil(item.rating);
            starsHtml = `
                        <div class="mb-1 d-flex align-items-center" style="font-size:0.95rem;">
                            <div class="small text-muted d-flex align-items-center" style="font-size:1.05rem;">
                                ${'<i class="fa fa-star text-warning"></i>'.repeat(fullStars)}
                                ${halfStar ? '<i class="fa fa-star-half-alt text-warning"></i>' : ''}
                                ${'<i class="fa fa-star" style="color:#BFBFBF"></i>'.repeat(emptyStars)}
                                <span class="ms-2 text-muted">(${item.reviews} reviews)</span>
                            </div>
                        </div>
            `;
        }
        return `
                    <div class="col">
                        <div class="card border-0 h-100 product-card-hover position-relative">
                            <div class="position-absolute top-0 end-0 mt-2 me-2 d-flex flex-column card-action-hover" style="z-index:2;">
                                <button class="btn p-0 mb-2 bg-white rounded-circle wishlist-btn" style="width:36px; height:36px;" data-id="${item.id}">
                                    <i class="fa-regular fa-heart"></i>
                                </button>
                                <button class="btn p-0 bg-white rounded-circle view-details-btn" style="width:36px; height:36px;" data-id="${item.id}">
                                    <i class="fa-regular fa-eye"></i>
                                </button>
                            </div>
                            <img src="${item.image || './public/assets/images/default-product.png'}" class="card-img-top p-4 bg-light" style="height:180px; object-fit:contain;" alt="${item.name}">
                            <div class="card-body pt-2 px-2 d-flex flex-column align-items-start">
                                <div class="fw-bold mb-1" style="font-size:1.05rem;">${item.name}</div>
                                <div class="text-danger" style="font-size:1.05rem;">$${item.price}</div>
                                ${starsHtml}
                                ${Array.isArray(item.colors) && item.colors.length ? `
                                    <div class="mb-2 d-flex align-items-center" style="gap:6px;">
                                        ${item.colors.map(color => `
                                            <span style="display:inline-block;width:18px;height:18px;border-radius:50%;background:${color};border:1px solid #ccc;"></span>
                                        `).join('')}
                                    </div>
                                ` : ''}
                                <button class="btn btn-dark btn-sm add-to-cart-btn add-to-cart-justforyou position-absolute" 
                                    data-id="${item.id}">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                 `;
    }).join('');
}

fetch('./products.json')
    .then(res => res.json())
    .then(data => {
        if (Array.isArray(data)) {
            // function getRandomItems(arr, n) {
            //     const random = arr.slice().sort(() => 0.5 - Math.random());
            //     return random.slice(0, n);
            // }
            // const randomProducts = getRandomItems(data, 4);
            // renderJustForYou(randomProducts);
            const featuredProducts = data.slice(0, 4);
            renderJustForYou(featuredProducts);

            document.getElementById('just-for-you').addEventListener('click', function (event) {
                if (event.target.classList.contains('add-to-cart-justforyou')) {
                    const btn = event.target;
                    const id = btn.getAttribute('data-id');
                    const product = data.find(p => String(p.id) === String(id));
                    if (!product) return;
                    let cart = JSON.parse(localStorage.getItem('cart')) || [];
                    if (!cart.some(item => String(item.id) === String(product.id))) {
                        cart.push(product);
                        localStorage.setItem('cart', JSON.stringify(cart));
                        btn.textContent = "Added!";
                        btn.classList.remove('btn-dark');
                        btn.classList.add('btn-success');
                        setTimeout(() => {
                            btn.textContent = "Add to Cart";
                            btn.classList.remove('btn-success');
                            btn.classList.add('btn-dark');
                        }, 1000);
                    }
                }
            });
        }
    })
    .catch(() => {
        document.getElementById('just-for-you').innerHTML = '<div class="col"><p>Could not load products.</p></div>';
    });
