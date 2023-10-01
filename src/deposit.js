function deposit(){
    const money = parseFloat(prompt("Cuanto desea depositar?"));
    userAccount.balance += money;
  
    const transaction = {
      payer: userAccount.name,
      NumberAccount: userAccount.NumberAccount,
      balance: userAccount.balance,
      Amount: money,
      Date: new Date(),
    }
    userAccount.history.push(transaction);
  };