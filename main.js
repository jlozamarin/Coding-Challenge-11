// Task 1 (in index.html file): Setup HTML Structure for Order Form  

// Task 2: Add Event Listener for Product Selector

let productSelector = document.getElementById('product-selector'); 
let quantityInput = document.getElementById('quantity');
let totalPriceElement = document.getElementById('total-price');
let placeOrderButton = document.getElementById('place-order');
let orderSummary = document.getElementById('order-summary');

// Task 3: Calculate Total Price Dynamically (calculate total price when product or quantity changes)

function updateTotalPrice() {
    let productPrice = parseFloat(productSelector.value); // get the price of the selected product
    let quantity = parseInt(quantityInput.value); // get the quantity input value
    let totalPrice = productPrice * quantity; // calculate the total price
    
    totalPriceElement.textContent = totalPrice.toFixed(2); 
}
// Task 2: Add Event Listener for Product Selector and Quantity Input
productSelector.addEventListener('change', updateTotalPrice); // when product changes
quantityInput.addEventListener('input', updateTotalPrice); // when quantity changes

// Task 4: Handle Order Submission
// When the user clicks on the "Place Order" button, display the order summary

placeOrderButton.addEventListener('click', function() {
    let selectedProduct = productSelector.options[productSelector.selectedIndex].text; // get the selected product name
    let quantity = quantityInput.value; // get the quantity input value
    let totalPrice = totalPriceElement.textContent; // get the total price
    
    orderSummary.textContent = `You ordered ${quantity} of ${selectedProduct}. Total price: $${totalPrice}`; // display the order summary
});
