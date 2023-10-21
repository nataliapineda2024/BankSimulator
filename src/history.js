function showHistory(){
    window.location = "showHistory.html";
    userAccount.history = JSON.parse(localStorage.getItem('historial'));
  
    console.log(userAccount.history);

    userAccount.history.map(history => {
        const showbonus = document.createElement("p");
        showbonus.innerText = "+ " , "$ " , history.Amount, "<br>";
        document.getElementById("SHOWhistory").appendChild(showbonus);

        const showpayer = document.createElement("p");
        showpayer.innerText = history.payer, "<br>";
        document.getElementById("SHOWhistory").appendChild(showpayer);

        const showNumAccount = document.createElement("p");
        showNumAccount.innerText = history.NumberAccount, "<br>";
        document.getElementById("SHOWhistory").appendChild(showNumAccount);

        const showbalance = document.createElement("p"); 
        showbalance.innerText = "$ " , history.balance, "<br>";
        document.getElementById("SHOWhistory").appendChild(showbalance);

        const showdate = document.createElement("p");
        showdate.innerText = history.Date, "<br>";
        document.getElementById("SHOWhistory").appendChild(showdate);
        
        const showline = document.createElement("p");
        showline.innerText = "<br>" , "--------------------------------------------", "<br>";
        document.getElementById("SHOWhistory").appendChild(showline);
    })

}

function back(){
    window.location = "index.html";
}
