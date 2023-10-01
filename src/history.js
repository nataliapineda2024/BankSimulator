function showHistory(){
    console.log(userAccount.history);
    //testing localStorage
    localStorage.setItem('Amount', this.Amount);
    localStorage.setItem('payer', this.payer);
    localStorage.setItem('NumberAccount', this.NumberAccount);
    localStorage.setItem('balance', this.balance);
    localStorage.setItem('Date', this.Date);
    
    localStorage.getItem('payer');

    // userAccount.history.map(history => {
    //     document.write("$ " , history.Amount, "<br>");
    //     document.write(history.payer, "<br>");
    //     document.write(history.NumberAccount, "<br>");
    //     document.write("$ " , history.balance, "<br>");
    //     document.write(history.Date, "<br>");
    //     document.write("<br>" , "--------------------------------------------", "<br>");
        
    // })
    userAccount.history.map(history => {
        document.write("$ " ,localStorage.getItem('Amout') , "<br>");
        document.write(localStorage.getItem('payer'), "<br>");
        document.write(localStorage.getItem('NumberAccount') ,"<br>");
        document.write("$ " , localStorage.getItem('balance'), "<br>");
        document.write(localStorage.getItem('Date'), "<br>");
        document.write("<br>" , "--------------------------------------------", "<br>");
        
    })
}