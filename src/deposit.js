function deposit(){

  const money = parseFloat(prompt("Cuanto desea abonar?"));
  if(money > 0){
  let elementoDondeMostrar = document.getElementById("saldo"); 
  elementoDondeMostrar.innerHTML  = userAccount.balance += money;
 }else{
  alert("La cantidad ingresada debe ser mayor que 0");
 }

  const transaction = {
    payer: userAccount.name,
    NumberAccount: userAccount.numberAccount,
    balance: userAccount.balance,
    Amount: money,
    Date: new Date(),
  }
  userAccount.history.push(transaction);

  localStorage.setItem('userAccount', JSON.stringify(userAccount));
  
};

const userAccountJSON = localStorage.getItem('userAccount');
const userAccountFromStorage = JSON.parse(userAccountJSON);
