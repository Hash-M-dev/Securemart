// Dark mode toggle
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    toggle.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
});


//Products

const products = [
    { name: "Wireless Headphones", price: 5000, image: "https://via.placeholder.com/300x200" },
    { name: "Smart Watch", price: 8500, image: "https://via.placeholder.com/300x200" },
    { name: "Men's Jacket", price: 3500, image: "https://via.placeholder.com/300x200" },
    { name: "Leather Wallet", price: 1500, image: "https://via.placeholder.com/300x200" }
];

const productsGrid = document.getElementById("productsGrid");

if(productsGrid) {
    products.forEach(item => {
        let card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p class="price">Rs. ${item.price}</p>
        `;
        productsGrid.appendChild(card);
    });
}