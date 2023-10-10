class BanckAccount extends User {
  constructor(props) {
    super(props);
    const {
      balance = 0,
      deposit,
      withdraw,
      numberAccount,
      history = [],
      historyw = [] }
      = props;
    this.balance = balance;
    this.deposit = deposit;
    this.withdraw = withdraw;
    this.numberAccount = numberAccount;
    this.history = history;
    this.historyw = historyw;
  }
}

  let userAccount = new BanckAccount({});
  document.addEventListener('DOMContentLoaded' , function() {
    let userJson = localStorage.getItem('user');

    if (userJson) {
      let user = JSON.parse(userJson);
      userAc(user);
    }else {
      console.log('NO HAY DATOS');
    }
  });
  function userAc(user){
    userAccount.name = user.name;
    userAccount.userName = user.userName;
    userAccount.password = user.password;
    userAccount.dui = user.dui;
    userAccount.balance = 0;
    userAccount.deposit = "20";
    userAccount.withdraw = "20";
    userAccount.numberAccount = '123123';
    console.log(userAccount)
    
  };

function logout(){
  var salir = confirm("Are you sure you want to log out?");
    if(salir == true){
        location = "entrada.html";
    }else{
        location = "index.html";
    }
};



 

 

 

