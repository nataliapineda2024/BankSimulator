class User {
  constructor({
    name,
    userName,
    password,
    DUI
  }) {
    this.name = name;
    this.userName = userName;
    this.password = password;
    this.DUI = DUI;
  }
}


function login(){
  
let namedata = document.getElementById("Name").value;
let userNamedata = document.getElementById("username").value;
let passworddata = document.getElementById("password").value;
let DUIdata = document.getElementById("DUI").value;

let user = new User({
  name: namedata,
  userName: userNamedata,
  password: passworddata,
  DUI: DUIdata, 
});

console.log(user);
location = "index.html"
};


 

