const products = [
    { id: 1, name: "Product A", price: 100 },
    { id: 2, name: "Product B", price: 200 },
    { id: 3, name: "Product C", price: 300 },
];

const cart = [];

const productList = document.getElementById('product-list');
const cartDiv = document.getElementById('cart');

function displayProducts() {
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

function displayCart() {
    cartDiv.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${item.name} - $${item.price}</span>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartDiv.appendChild(cartItem);
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    displayCart();
}

function removeFromCart(id) {
    const index = cart.findIndex(item => item.id === id);
    if (index !== -1) cart.splice(index, 1);
    displayCart();
}

displayProducts();
