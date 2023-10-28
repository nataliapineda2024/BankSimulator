
let userAcount = new BanckAccount ({});


//Función del login
function login(event) {
    event.preventDefault(); 

    userAcount.name = document.getElementById("inputName").value;
    userAcount.userName = document.getElementById("inputUserName").value;
    userAcount.password = document.getElementById("inputPassword").value;
    userAcount.dui = document.getElementById("inputDUI").value;
    userAcount.numberAccount = document.getElementById("inputNAccount").value;

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
    localStorage.setItem('user', JSON.stringify(userAcount));
    alert("Successful Login!");
    window.location = "index.html"
}

