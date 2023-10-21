/*function withdraw(){

  const money = parseFloat(prompt("How much do you want to withdraw?"));
  if(money > 0){
  let elementoDondeMostrar = document.getElementById("saldo"); 
  elementoDondeMostrar.innerHTML  = userAccount.balance -= money; 
 }else{
  alert("The amount entered must be greater than 0");
 }
    
    const transaction = {
      payer: userAccount.name,
      NumberAccount: userAccount.numberAccount,
      balance: userAccount.balance,
      Amount: money,
      Date: new Date(),
    }
    userAccount.historyw.push(transaction);
  };*/

  elementoDondeMostrar = document.getElementById("saldo");
var savedMoney = localStorage.getItem('total');
if (savedMoney) {
  elementoDondeMostrar.innerHTML = savedMoney;
}

function withdraw() {
  var money = parseFloat(prompt("How much do you want to widthdraw?"));

  if (money > userAccount.balance){
    if (savedMoney) {
      alert("The amount you enter is greater than the current balance")
    }
  if (money > 0) {

    if (savedMoney) {
      userAccount.balance = parseFloat(savedMoney);
    }

    userAccount.balance = userAccount.balance - money ;
    localStorage.setItem('total', userAccount.balance);

    savedMoney = localStorage.getItem('total');
    elementoDondeMostrar.innerHTML = savedMoney;

  } }else {
    alert("The amount entered must be greater than 0");
  }

  const transaction = {
    payer: userAccount.name,
    NumberAccount: userAccount.numberAccount,
    balance: userAccount.balance,
    Amount: money,
    Date: new Date(),
  }

  let newHistory = JSON.parse(localStorage.getItem('historial')) || [];
  newHistory.push(transaction);
  localStorage.setItem('historial', JSON.stringify(newHistory));



  userAccount.historyw = JSON.parse(localStorage.getItem('historial'));
  console.log(userAccount.historyw);

  

  
};

