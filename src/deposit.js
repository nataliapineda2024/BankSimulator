elementoDondeMostrar = document.getElementById("saldo");
var savedMoney = localStorage.getItem('total');
if (savedMoney) {
  elementoDondeMostrar.innerHTML = savedMoney;
}

function deposit() {
  var money = parseFloat(prompt("How much do you want to deposit?"));
  if (money > 0) {

    if (savedMoney) {
      userAccount.balance = parseFloat(savedMoney);
    }

    userAccount.balance = userAccount.balance + money;
    localStorage.setItem('total', userAccount.balance);

    savedMoney = localStorage.getItem('total');
    elementoDondeMostrar.innerHTML = savedMoney;

  } else {
    alert("The amount entered must be greater than 0");
  }

  const transaction = {
    payer: userAccount.name,
    NumberAccount: userAccount.numberAccount,
    balance: userAccount.balance,
    Amount: money,
    Date: new Date(),
  }

  let newHistory = JSON.parse(localStorage.getItem('historialD')) || [];
  newHistory.push(transaction);
  localStorage.setItem('historialD', JSON.stringify(newHistory));

  userAccount.history = JSON.parse(localStorage.getItem('historialD'));
  console.log(userAccount.history);

};










