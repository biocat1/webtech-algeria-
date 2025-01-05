function toMenu(){
    window.location="menu.html";
}
function toStatus(){
    window.location="status.html";
}
function toContact(){
    window.location="contact.html";
}
function toOrder(){
    window.location="orderPage.html";
}
function toHome(){
    window.location="homepage.html";
}

function showStatus() {
    let d = new Date();
    let currentHour = d.getHours(),currentDay = d.getDay();

    let element = document.getElementById("statusShow");

    if (currentHour >= 9 && currentHour < 23 && currentDay != 0) {
        // Shop is open
        element.classList.remove("close"); // Remove close class
        element.classList.add("open");    // Add open class
        document.getElementById("show").innerHTML = "Our shop is currently OPEN";
    } else {
        // Shop is closed
        element.classList.remove("open"); // Remove open class
        element.classList.add("close");   // Add close class
        document.getElementById("show").innerHTML = "Our shop is CLOSED for now";
    }
}

function copyToClipboard(text) {
    navigator.clipboard
        .writeText(text)
        .then(function () {
            alert(`Copied: ${text}`);
        })
        .catch(function (error) {
            console.error("Failed to copy text: ", error);
        });
}

function loadOrderList() {
    const orderList = JSON.parse(localStorage.getItem('orderList')) || [];
    const orderListElement = document.getElementById('orderList');
    const totalPriceElement = document.getElementById('totalPrice');

    // Clear the current list
    orderListElement.innerHTML = '';
    let total = 0;

    if (orderList.length === 0) {
        orderListElement.innerHTML = '<li class="list-group-item">Your order is empty.</li>';
        totalPriceElement.textContent = 'Total Price: RM0.00';
    } else {
        orderList.forEach(item => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
            listItem.textContent = item.name;

            const price = document.createElement('span');
            price.className = 'badge bg-primary rounded-pill';
            price.textContent = item.price;

            // Parse price and add to total
            total += parseFloat(item.price.replace('RM', ''));

            listItem.appendChild(price);
            orderListElement.appendChild(listItem);
        });

        // Update the total price
        totalPriceElement.textContent = `Total Price: RM${total.toFixed(2)}`;
    }
}

function clearOrder() {
    localStorage.removeItem('orderList');
    loadOrderList();
    alert('Your order has been cleared.');
}

window.onload = loadOrderList;
