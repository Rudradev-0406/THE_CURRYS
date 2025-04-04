document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item");
    
    menuItems.forEach(item => {
        const increaseBtn = item.querySelector(".increase");
        const decreaseBtn = item.querySelector(".decrease");
        const quantityDisplay = item.querySelector(".quantity");
        const orderButton = item.querySelector(".order-button");
        
        let quantity = 1;
        
        increaseBtn.addEventListener("click", function () {
            quantity++;
            quantityDisplay.textContent = quantity;
            updateOrderButton(orderButton, quantity);
        });
        
        decreaseBtn.addEventListener("click", function () {
            if (quantity > 1) {
                quantity--;
                quantityDisplay.textContent = quantity;
                updateOrderButton(orderButton, quantity);
            }
        });
        
        orderButton.addEventListener("click", function () {
            alert(`You have ordered ${quantity} item(s) of ${item.querySelector("h2").textContent}.`);
        });
    });
});

function updateOrderButton(button, quantity) {
    button.textContent = `Order (${quantity})`;
}
