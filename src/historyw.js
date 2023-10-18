function showHistoryw(){
    location = "showHistory.html";
    console.log(userAccount.historyw);

     userAccount.historyw.map(historyw => {
        document.write("- ","$ " , historyw.Amount, "<br>");
        document.write(historyw.payer, "<br>");
        document.write(historyw.NumberAccount, "<br>");
        document.write("$ " , historyw.balance, "<br>");
        document.write(historyw.Date, "<br>");
        document.write("<br>" , "--------------------------------------------", "<br>");    
    })
    
}
