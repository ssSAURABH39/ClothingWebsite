document.getElementById('contact-form').addEventListener('submit', function(e) {
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        e.preventDefault();
    }
});

const products = [
    { id: 1, name: "Stylish Jacket", price: "$80", image: "images/product1.jpg" },
    { id: 2, name: "Casual Shirt", price: "$40", image: "images/product2.jpg" },
    { id: 3, name: "Elegant Dress", price: "$120", image: "images/product3.jpg" },
    { id: 4, name: "Comfortable Pants", price: "$60", image: "images/product4.jpg"}
];
function loadProducts() {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = products
        .map(
            product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        </div>
        `
        )
        .join('');
}

document.addEventListener('DOMContentLoaded', loadProducts);

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for contacting us, ' + name + '! We will get back to you soon.');
        // Optionally, clear the form
        this.reset();
    } else {
        alert('Please fill out all fields.');
    }
});
