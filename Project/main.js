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
function toFeedback(){
    window.location="feedback.html";
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
        document.getElementById("show").innerHTML = "Our shop is currently CLOSED";
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard: ' + text); // Alert after successful copy
        console.log('Copied to clipboard: ' + text);
    }).catch(err => {
        alert('Failed to copy: ' + text); // Alert on failure
        console.error('Failed to copy: ', err);
    });
}

function handleFeedbackFormSubmission() {
    document.getElementById('feedbackForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        // Success message
        document.getElementById('feedbackForm').insertAdjacentHTML('afterend', '<br><p class="text-success">Thank you for your feedback!</p></br>');

        // Clear the form
        document.getElementById('feedbackForm').reset();
    });
}







