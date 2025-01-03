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
    element.classList.toggle("dark-mode"); /* ignore dulu still experiment*/
 }

function showStatus(){
    let d = new Date();
    if(d.getHours() >= 23 || d.getHours() <= 9){
        let element = document.getElementById("statusShow");
        element.classList.remove("open");  // Remove open class
        element.classList.add("close");  // Add close class

        document.getElementById("show").innerHTML ="Our shop is closed for now"
    }
}
