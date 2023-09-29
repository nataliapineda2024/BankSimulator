function login() {
    location = "index.html";
};


//CLASE DEL CLIENTE
class Usuario{
  constructor(
{ name,
  DUI,
  username,
  password,
  numero_cuenta_bancaria,
  
} 
){
  this.name = name,
  this. DUI = DUI,
  this.username = username,
  this.password = password,
  this. numero_cuenta_bancaria = numero_cuenta_bancaria
}
}


/*class Usuario {
    constructor(name, username, password,) {
      this.name = name
      this.username = username;
      this.password = password;
      
    }
  
    verificarCredenciales(username, password) {
      return this.username === username && this.password === password;
    }
  }
  
  /*class SistemaDeAutenticacion {
    constructor() {
      this.usuarios = [];
    }
  
    agregarUsuario(usuario) {
      this.usuarios.push(usuario);
    }
  
    autenticarUsuario(username, password) {
      for (const usuario of this.usuarios) {
        if (usuario.verificarCredenciales(username, password)) {
          return true;
        }
      }
      return false;
    }
  }
  
  // Crear usuarios
  const usuario1 = new Usuario("usuario1", "contraseña1");
  const usuario2 = new Usuario("usuario2", "contraseña2");
  
  // Crear sistema de autenticación y agregar usuarios
  const sistema = new SistemaDeAutenticacion();
  sistema.agregarUsuario(usuario1);
  sistema.agregarUsuario(usuario2);*/
  
  // Iniciar sesión
  /*const name = (document.write("Ingrese su nombre"));
  const username = (document.write("Ingrese su usuario: "));
  const password = (document.write("Ingrese su contraseña: "));
  
  if (sistema.autenticarUsuario(username, password)) {
    console.log("Inicio de sesión exitoso.");
  } else {
    console.log("Inicio de sesión fallido.");
  }*/
  