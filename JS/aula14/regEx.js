function validarEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var emailInput = document.getElementById("email");
    var validationMessage = document.getElementById("validationMessage");

    var email = emailInput.value.trim();

    if (validarEmail(email)) {
        validationMessage.textContent = "Endereço de e-mail válido.";
        validationMessage.style.color = "green";
    } else {
        validationMessage.textContent = "Endereço de e-mail inválido.";
        validationMessage.style.color = "red";
    }
});