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
function modeChange() {
    var element = document.body;
    element.classList.toggle("dark-mode"); // ignore dulu still experiment
 }

 function showStatus() {
    let d = new Date();
    let currentHour = d.getHours();

    let element = document.getElementById("statusShow");

    if (currentHour >= 9 && currentHour < 23) {
        // Shop is open
        element.classList.remove("close"); // Remove close class
        element.classList.add("open");    // Add open class
        document.getElementById("show").innerHTML = "Our shop is currently OPEN";
    } else {
        // Shop is closed
        element.classList.remove("open"); // Remove open class
        element.classList.add("close");   // Add close class
        document.getElementById("show").innerHTML = "Our shop is closed for now";
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

