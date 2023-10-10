function withdraw(){

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
  };

