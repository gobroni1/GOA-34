
if (localStorage.getItem('user')) {

    showShopPage();
} else {

    document.getElementById('registerPage').style.display = 'block';
}


document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const user = { username, email, password };

    localStorage.setItem('user', JSON.stringify(user));
    

    showShopPage();
});


function showShopPage() {
    document.getElementById('registerPage').style.display = 'none';
    document.getElementById('shopPage').style.display = 'block';
    

    renderProducts();
}


const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
];


function renderProducts() {
    const productList = document.getElementById('productList');
    productList.innerHTML = ''; 
    
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <span>${product.name} - $${product.price}</span>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}


let cart = JSON.parse(localStorage.getItem('cart')) || [];


function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} has been added to your cart.`);
}


document.getElementById('viewCartButton').addEventListener('click', function() {
    showCart();
});


function showCart() {
    const cartList = document.getElementById('cartList');
    cartList.innerHTML = ''; 
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${item.name} - $${item.price}</span>
        `;
        cartList.appendChild(cartItem);
    });
    
    document.getElementById('cartContainer').style.display = 'block';
}


document.getElementById('checkoutButton').addEventListener('click', function() {
    alert('Thank you for your purchase!');
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    showCart();
});


document.getElementById('clearCartButton').addEventListener('click', function() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    showCart();
});
