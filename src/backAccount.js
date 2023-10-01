class BanckAccount extends User {
  constructor(props) {
    super(props);
    const {
      balance = 0,
      deposit,
      withdraw,
      numberAccount,
      history = [] }
      = props;
    this.balance = balance;
    this.deposit = deposit;
    this.withdraw = withdraw;
    this.numberAccount = numberAccount;
    this.history = history;
  }
}

let userAccount = function createUA (){
  let userAccount = new BanckAccount({
    name: user.name, 
    userName: user.userName,
    password: user.password,
    DUI: user.DUI, 
    balance: 0,
    deposit: "20",
    numberAccount: 111000
  });
  
  return userAccount;

}


 


function logout(){
  var salir = confirm("¿Seguro que quieres cerrar sesión? ");
    if(salir == true){
        location = "entrada.html";
    }else{
        location = "index.html";
    }
};



 

 

 

