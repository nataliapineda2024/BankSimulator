function showHistory(){
    console.log(userAccount.history);
   

     userAccount.history.map(history => {
        document.write("+ " , "$ " , history.Amount, "<br>");
        document.write(history.payer, "<br>");
        document.write(history.NumberAccount, "<br>");
        document.write("$ " , history.balance, "<br>");
        document.write(history.Date, "<br>");
        document.write("<br>" , "--------------------------------------------", "<br>");    
    })
}

    
