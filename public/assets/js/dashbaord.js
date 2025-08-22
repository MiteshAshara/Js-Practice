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
fetch('./products.json')
    .then(res => res.json())
    .then(products => {
        const container = document.getElementById('products-list');
        container.innerHTML = products.map(product => `
            <div class="col">
                <div class="card border-0 position-relative h-100 product-card-hover" data-id="${product.id}">
                    ${product.isNew ? '<span class="badge bg-success position-absolute m-3">NEW</span>' : ''}
                    <div class="position-absolute top-0 end-0 mt-2 me-2 d-flex flex-column card-action-hover" style="z-index:2;">
                        <button class="btn p-0 mb-2 bg-white rounded-circle wishlist-btn" style="width:36px; height:36px;">
                            <i class="fa-regular fa-heart"></i>
                        </button>
                        <button class="btn p-0 bg-white rounded-circle" style="width:36px; height:36px;">
                            <i class="fa-regular fa-eye"></i>
                        </button>
                    </div>
                    <img src="${product.image}" class="card-img-top p-5 bg-light"
                        style="height:240px; object-fit:contain;" alt="${product.name}">
                    <div class="card-body pt-2 px-2 d-flex flex-column align-items-start">
                        <div class="fw-bold mb-1" style="font-size:1.05rem;">${product.name}</div>
                        <div class="d-flex align-items-center mb-1 w-100">
                            <div class="text-danger fw-bold me-2" style="font-size:1.05rem;">$${product.price}</div>
                            <div class="small text-muted d-flex align-items-center" style="font-size:1.05rem;">
                                ${'<i class="fa fa-star text-warning"></i>'.repeat(Math.floor(product.rating))}
                                ${(product.rating % 1 !== 0) ? '<i class="fa fa-star-half-alt text-warning"></i>' : ''}
                                ${'<i class="fa fa-star" style="color:#BFBFBF"></i>'.repeat(5 - Math.ceil(product.rating))}
                                <span class="ms-1">(${product.reviews})</span>
                            </div>
                        </div>
                        ${product.colors ? `
                        <div class="d-flex mt-2">
                            ${product.colors.map(color => `
                            <div class="form-check me-2">
                                <input class="form-check-input" type="radio" name="color-${product.id}" id="color-${color}" style="background-color:${color}; width:20px; height:20px; border:1px solid #ccc;">
                                <label class="form-check-label visually-hidden" for="color-${color}">${color}</label>
                            </div>
                            `).join('')}
                        </div>
                        ` : ''}
                    </div>
                    <button class="btn btn-dark w-100 rounded-0 py-2 fw-bold add-to-cart-btn" style="position:absolute; left:0; right:0; bottom:0; z-index:2;">
                        Add To Cart
                    </button>
                </div>
            </div>
            `).join('');
        
        view_products = products;
    });

$(document).on('click', '.wishlist-btn', function () {
    var $card = $(this).closest('.card');
    var id = $card.data('id');
    var name = $card.find('.fw-bold.mb-1').text().trim();
    var price = $card.find('.text-danger.fw-bold').text().replace('$', '').trim();
    var image = $card.find('img').attr('src');
    var wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');

    if (!wishlist.some(item => item.id === id)) {
        wishlist.push({ id: id, name: name, price: price, image: image });
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }

    var $icon = $(this).find('i');
    $icon.removeClass('fa-regular').addClass('fa-solid').css('color', 'red');

    if ($('#wishlist-count').length) {
        $('#wishlist-count').text(wishlist.length);
    }
});

$(document).on('click', '.add-to-cart-btn', function () {
    var $card = $(this).closest('.card');
    var id = $card.data('id');
    var name = $card.find('.fw-bold.mb-1').text().trim();
    var price = $card.find('.text-danger.fw-bold').text().replace('$', '').trim();
    var image = $card.find('img').attr('src');
    var isNew = $card.find('.badge.bg-success').length > 0;
    var colors = $card.find('.form-check-input').map(function () {
        return $(this).attr('id').replace('color-', '');
    }).get();

    var cart = JSON.parse(localStorage.getItem('cart') || '[]');

    if (!cart.some(item => item.id === id)) {
        cart.push({ id: id, name: name, price: price, image: image, isNew: isNew, colors: colors });
        localStorage.setItem('cart', JSON.stringify(cart));
        var $btn = $(this);
        $btn.text("Added!").removeClass('btn-dark').addClass('btn-success');
        setTimeout(function () {
            $btn.text("Add To Cart").removeClass('btn-success').addClass('btn-dark');
        }, 1000);
    }
});

function viewProduct() {
    if (!document.getElementById('productDetailModal')) {
        $('body').append(`
            <div class="modal fade" id="productDetailModal" tabindex="-1">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="productDetailModalLabel">Product Details</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                  </div>
                  <div class="modal-body" id="productModel">
                  </div>
                </div>
              </div>
            </div>
        `);
    }
}

$(document).on('click', '.fa-eye', function () {
    viewProduct();
    var $card = $(this).closest('.card');
    var id = $card.data('id');
    var product = (view_products || []).find(p => p.id == id);
    if (!product) return;

    var html = `
        <div class="text-center">
            <img src="${product.image}" alt="${product.name}" style="max-width:180px;max-height:180px;" class="mb-3"/>
            <h5>${product.name}</h5>
            <div class="mb-2 text-danger fw-bold">$${product.price}</div>
            <div class="mb-2">${product.description || ''}</div>
            <div>
                <span class="me-2">Rating:</span>
                ${'<i class="fa fa-star text-warning"></i>'.repeat(Math.floor(product.rating))}
                ${(product.rating % 1 !== 0) ? '<i class="fa fa-star-half-alt text-warning"></i>' : ''}
                ${'<i class="fa fa-star" style="color:#BFBFBF"></i>'.repeat(5 - Math.ceil(product.rating))}
                <span class="ms-1">(${product.reviews})</span>
            </div>
        </div>
    `;
    $('#productModel').html(html);
    var modal = new bootstrap.Modal(document.getElementById('productDetailModal'));
    modal.show();
});
