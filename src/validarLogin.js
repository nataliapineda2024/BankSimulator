//Función del login
function login(event) {
    event.preventDefault(); 

    var inputName = document.getElementById("inputName");
    var inputUserName = document.getElementById("inputUserName");
    var inputPassword = document.getElementById("inputPassword");
    var inputDUI = document.getElementById("inputDUI");
    var inputNAccount = document.getElementById("inputNAccount");

    if (
        inputName.value === "" ||
        inputUserName.value === "" ||
        inputPassword.value === "" ||
        inputDUI.value === "" ||
        inputNAccount.value === ""
    ) {
        alert("Please, fill in all fields");
    } else {
        validateAndLogin();
    }
}

function validateAndLogin() {
    alert("Successful Login!");
    window.location = "index.html"
}



//Función para crear una cuenta
function loginC(event) {
    event.preventDefault(); 

    var inputName = document.getElementById("inputName");
    var inputUserName = document.getElementById("inputUserName");
    var inputPassword = document.getElementById("inputPassword");
    var inputDUI = document.getElementById("inputDUI");
    var inputNAccount = document.getElementById("inputNAccount");

    if (
        inputName.value === "" ||
        inputUserName.value === "" ||
        inputPassword.value === "" ||
        inputDUI.value === "" ||
        inputNAccount.value === ""
    ) {
        alert("Please, fill in all fields");
    } else {
        validateAndLoginC();
    }
}

function validateAndLoginC() {
    alert("You've successfully created your account!");
    window.location = "index.html"
}
