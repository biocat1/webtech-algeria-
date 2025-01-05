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
function toggleMode() {
    let htmlElement = document.documentElement; // Get the <html> element
    let currentTheme = htmlElement.getAttribute('data-bs-theme');

    // Switch the theme
    if (currentTheme === 'dark') {
        htmlElement.setAttribute('data-bs-theme', 'light');
    } else {
        htmlElement.setAttribute('data-bs-theme', 'dark');
    }
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

