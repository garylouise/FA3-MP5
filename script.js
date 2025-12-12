function checkEmail() {
    let email = document.getElementById("emailInput").value;
    let result = document.getElementById("result");

    if (email.includes("@")) {
        result.textContent = "Valid";
        result.style.color = "green";
    } else {
        result.textContent = "Invalid";
        result.style.color = "red";
    }
}
