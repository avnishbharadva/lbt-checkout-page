function changeTheme() {
    let themeText = document.getElementById("themeText");

    if (themeText.innerText == "Enable Dark Mode") {
        document.body.style.backgroundColor = "#2E0249";
        document.body.style.color = "white";
        themeText.innerText = "Enable Light Mode";
    }
    else {
        document.body.style.backgroundColor = "#ffd7c6";
        document.body.style.color = "black";
        themeText.innerText = "Enable Dark Mode";
    }
}

function upiBox() {
    document.getElementById("credit").style.display = "none";
    // let credit = document.getElementsByClassName("credit");
    // credit.style.display = "none";

    document.getElementById("upi").style.display = "block";
    // let upi = document.getElementsByClassName("upi");
    // upi.style.display = "block";

    document.getElementById("paypal").style.display = "none";
    // let paypal = document.getElementsByClassName("paypal");
    // paypal.style.display = "none";
}

function creditBox() {
    document.getElementById("credit").style.display = "block";
    document.getElementById("credit").classList.add("row");
    // credit.style.display = "block";

    document.getElementById("upi").style.display = "none";
    // upi.style.display = "none";

    document.getElementById("paypal").style.display = "none";
    // paypal.style.display = "none";
}

function paypalBox() {
    document.getElementById("credit").style.display = "none";
    // let credit = document.getElementsByClassName("credit");
    // credit.style.display = "none";

    document.getElementById("upi").style.display = "none";
    // let upi = document.getElementsByClassName("upi");
    // upi.style.display = "none";

    document.getElementById("paypal").style.display = "block";
    // let paypal = document.getElementsByClassName("paypal");
    // paypal.style.display = "block";
}