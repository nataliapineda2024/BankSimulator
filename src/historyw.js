
function gato() {
    window.location = "showHistoryw.html";
}

showHistoryw();

function showHistoryw() {
    let history = JSON.parse(localStorage.getItem('historialW'));

    console.log(history);

    history.map(historyw => {
        const showbonus = document.createElement("p");
        showbonus.innerText = "- " +"$" + historyw.Amount;
        document.getElementById("SHOWhistoryw").appendChild(showbonus);

        const showpayer = document.createElement("p");
        showpayer.innerText = historyw.payer;
        document.getElementById("SHOWhistoryw").appendChild(showpayer);

        const showNumAccount = document.createElement("p");
        showNumAccount.innerText = historyw.NumberAccount;
        document.getElementById("SHOWhistoryw").appendChild(showNumAccount);

        const showbalance = document.createElement("p");
        showbalance.innerText = "$" + historyw.balance;
        document.getElementById("SHOWhistoryw").appendChild(showbalance);

        const showdate = document.createElement("p");
        showdate.innerText = historyw.Date;
        document.getElementById("SHOWhistoryw").appendChild(showdate);

        const showline = document.createElement("p");
        showline.innerText = "--------------------------------------------";
        document.getElementById("SHOWhistoryw").appendChild(showline);
    })
}
function back() {
    window.location = "index.html";
}