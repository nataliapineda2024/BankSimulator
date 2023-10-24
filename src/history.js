function geto() {
    window.location = "showHistory.html";
}
 
showHistory();


function showHistory() {
    let history = JSON.parse(localStorage.getItem('historialD'));

    console.log(history);

    history.map(history => {
        const showbonus = document.createElement("p");
        showbonus.innerText ="+ " + "$"  + history.Amount;
        document.getElementById("SHOWhistory").appendChild(showbonus);

        const showpayer = document.createElement("p");
        showpayer.innerText = history.payer;
        document.getElementById("SHOWhistory").appendChild(showpayer);

        const showNumAccount = document.createElement("p");
        showNumAccount.innerText = history.NumberAccount;
        document.getElementById("SHOWhistory").appendChild(showNumAccount);

        const showbalance = document.createElement("p");
        showbalance.innerText = "$" + history.balance;
        document.getElementById("SHOWhistory").appendChild(showbalance);

        const showdate = document.createElement("p");
        showdate.innerText = history.Date;
        document.getElementById("SHOWhistory").appendChild(showdate);

        const showline = document.createElement("p");
        showline.innerText = "--------------------------------------------";
        document.getElementById("SHOWhistory").appendChild(showline);
    })
}


