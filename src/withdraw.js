function withdraw(){

  const money = parseFloat(prompt("Cuanto desea retirar?"));
  if(money > 0){
  let elementoDondeMostrar = document.getElementById("saldo"); 
  elementoDondeMostrar.innerHTML  = userAccount.balance -= money; 
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
    userAccount.historyw.push(transaction);
  };

