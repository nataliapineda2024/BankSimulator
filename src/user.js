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

window.addEventListener("load", function() {
  const savedUser = localStorage.getItem("user");
  if (savedUser) {
      user = JSON.parse(savedUser);
      // Actualiza el elemento "saludo" con el nombre del usuario si está definido
      if (user.name) {
          const saludoElement = document.getElementById("saludo");
          saludoElement.textContent = `¡Welcome, ${user.name}!`;
      }
  }
});

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


 
 

