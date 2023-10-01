class User {
  constructor({
    name,
    userName,
    password,
    dui
  }) {
    this.name = name;
    this.userName = userName;
    this.password = password;
    this.dui = dui;
  }
}

let user = new User({});

function login(event){
  event.preventDefault()
user.name= document.getElementById("inputName").value;
user.userName = document.getElementById("inputUserName").value;
user.password = document.getElementById("inputPassword").value;
user.dui= document.getElementById("inputDUI").value;

localStorage.setItem('user', JSON.stringify(user));
location.href = `index.html`
};

 
 

