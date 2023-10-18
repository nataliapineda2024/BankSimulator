function deposit(){

  const money = parseFloat(prompt("How much do you want to deposit?"));
  if(money > 0){
  let elementoDondeMostrar = document.getElementById("saldo");; 
  elementoDondeMostrar.innerHTML  = userAccount.balance += money;
  localStorage.setItem(money , "money");
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
  userAccount.history.push(transaction);

  var savedMoney = localStorage.getItem('money');
  console.log(savedMoney)
};





