
elementoDondeMostrar = document.getElementById("saldo");
var savedMoney = localStorage.getItem('total');
if (savedMoney) {
  elementoDondeMostrar.innerHTML = savedMoney;
}

function withdraw() {
  var money = parseFloat(prompt("How much do you want to withdraw?"));

  if (money > 0) {
    if (savedMoney) {
      userAccount.balance = parseFloat(savedMoney);
    }

    if (money <= userAccount.balance) {
      userAccount.balance = userAccount.balance - money;
      localStorage.setItem('total', userAccount.balance);
      savedMoney = localStorage.getItem('total');
      elementoDondeMostrar.innerHTML = savedMoney;

      const transaction = {
        payer: userAccount.name,
        NumberAccount: userAccount.numberAccount,
        balance: userAccount.balance,
        Amount: money,
        Date: new Date(),
      }

      let newHistory = JSON.parse(localStorage.getItem('historialW')) || [];
      newHistory.push(transaction);
      localStorage.setItem('historialW', JSON.stringify(newHistory));

      userAccount.historyw = JSON.parse(localStorage.getItem('historialW'));
      console.log(userAccount.historyw);
    } else {
      alert("You don't have sufficient balance to withdraw that amount.");
    }
  } else {
    alert("The amount entered must be greater than 0");
  }
}

