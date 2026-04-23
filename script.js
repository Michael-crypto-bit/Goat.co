var output = "";
if (localStorage.getItem('username') === null) {
    localStorage.setItem('username', "guest");
}
// Function to show popup on every reload
window.onload = function() {
    document.getElementById("changeUsername").value = localStorage.getItem('username');
    document.getElementById("usernameoutput").value = localStorage.getItem('username');
};

// Function to hide popup and set cookie
function acceptCookies() {
    document.getElementById("cookie-popup").style.display = "none";
    // Sets a session cookie (expires when browser closes)
    document.cookie = "cookieAccepted=true; path=/"; 
}
function products(){
    window.location.href = 'products.html';
}
function home(){
    window.location.href = 'home.html';
}
function cart(){
    window.location.href = 'checkout.html';
}
function goatpicture(){
        localStorage.setItem('item', '0001');
    localStorage.setItem('cost', '4.99');
    window.location.href = 'goatpicture.html';
}
function goatpicture(){
        localStorage.setItem('item', '0002');
    localStorage.setItem('cost', '9.49');
    window.location.href = 'goat3d.html';
}
function buy(){
    window.location.href = 'checkout.html';
}
function complaint(){
    output += document.getElementById("input").value;
    output += " ----------- "+localStorage.getItem('username');
    output += "<br>";
    document.getElementById("complaint_output").innerHTML = output;
    document.getElementById("input").value = "";
}
function changeUsername(){
    localStorage.setItem('username',document.getElementById("changeUsername").value);
}
function loadcart(){
    var item = localStorage.getItem("item");
    var cost = localStorage.getItem("cost");
    if(item != "null"){
    document.getElementById("cart").innerHTML = "Item_"+item+"_____________$"+cost;
    }
    else{
        document.getElementById("cart").innerHTML = "nothing yet";
    }
    var tax = cost/100;
    tax = tax.toFixed(2);
    var total = 0;
    total += parseFloat(tax);
    total += parseFloat(cost);
    total = total.toFixed(2)
    document.getElementById("cost").innerHTML = "cost: "+cost+"<br>tax: "+tax+"<br>total: "+total;
}
document.addEventListener('DOMContentLoaded', () => {
    // Check if the current URL ends with 'target-page.html'
    if (window.location.pathname.includes('checkout.html')) {
        loadcart();
    }
});
function clearcart(){
    localStorage.setItem('item', null);
    localStorage.setItem('cost', null);
    loadcart();
}
function checkout(){
    var creditcard = document.getElementById("card").value;
    if((creditcard.length >= 13)&&(creditcard.length <= 19)){
        clearcart();
        document.getElementById("card").value = "";
        window.location.href = 'thanks.html';
    }
    else{
        document.getElementById("card").value = "";
    }
}
document.addEventListener('DOMContentLoaded', () => {
    // Check if the current URL ends with 'target-page.html'
    if (window.location.pathname.includes('index.html')) {
        window.location.href = 'home.html';
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // Check if the current URL ends with 'target-page.html'
    if (window.location.pathname.includes('thanks.html')) {
        document.getElementById("title").innerHTML += " "+localStorage.getItem('username')+"!";
    }
});
