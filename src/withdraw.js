function withdraw(){
    const money = parseFloat(prompt("Cuanto desea retirar?"));
    userAccount.balance -= money;
  
    const transaction = {
      payer: userAccount.name,
      NumberAccount: userAccount.numberAccount,
      balance: userAccount.balance,
      Amount: money,
      Date: new Date(),
    }
    userAccount.historyw.push(transaction);
  };
  