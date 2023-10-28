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




 
 

