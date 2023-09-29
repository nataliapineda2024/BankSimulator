  // Clase Cliente


// Clase Cuenta Bancaria
    //metodo depositar
    //metodo retirar



// Función para actualizar el saldo en el DOM
/*function actualizarSaldo() {
    const saldoElement = document.getElementById('ssaldo');
    //logica para mostrar
}

//Crear nuevo cliente 


document.getElementById('depositar').addEventListener('click', () => {
    const cantidad = parseInt(prompt('Ingrese la cantidad a depositar:'));
    //agregar cantidad 
});

document.getElementById('retirar').addEventListener('click', () => {
    const cantidad = parseInt(prompt('Ingrese la cantidad a retirar:'));
    //actualizar saldo y retirar dinero
});

// Inicializamos el saldo en el DOM
actualizarSaldo();*/



//CLASE CLIENTE
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

  function login() {
    location = "index.html";
};
  function logout() {
    var salir = confirm("¿Seguro que quieres cerrar sesión? ");
    if(salir == true){
        location = "entrada.html";
    }else{
        location = "index.html";
    }
    
};
  function saludar() {
     document.write(`¡Hola! Bienvenid@ ${this.name}`);
 }
  



//CLASE DE LA CUENTA BANCARIA
class CuentaBancaria{
    constructor(
  { saldo,
    numero_cuenta_bancaria,
    historial = []
    }
    ){
        this.saldo = saldo,
        this.numero_cuenta_bancaria = numero_cuenta_bancaria,
        this.historial = historial
    }
}

function suma() {
  let i = 1;
  const historial = [];
  var text = "";

     var Suma = parseInt(prompt("Digite la cantidad a depositar: "));
     if(Suma){
        if(Suma > 0){
     Saldo = Saldo + Suma
     alert("Su saldo es de: " + Saldo)
       }else{
     alert("La cantidad a depositar tiene que ser mayor que cero")
}
}
date = new Date()
gasto = "+$ " + Suma + " - " + date;
historial.push(gasto);
i++;
for (key of historial) {
  text += key + "<br/>";
}

};

var parrafo = document.getElementById('parrafo')
var boton = document.getElementById('depositarhistorial')

function motrarabono(){
  document. getElementById("depositarhistorial").innerHTML = text;
}

boton.addEventListener('click', () => {
  parrafo.textContent = motrarabono();
  });


  /*let i = 1;
const historial = [];
var text = "";
date = new Date()
gasto = "+$ " + Suma + " - " + date;
historial.push(gasto);
i++;
    */






function retirar() {
    var retiro = parseInt(prompt("Digite la cantidad que desea retirar: "));
  
    if(retiro){
        if(retiro < 0){
            alert("La cantidad a retirar tiene que ser mayor que cero")
        }else{
        if (retiro <= Saldo && retiro >= 0) {
        Saldo = Saldo - retiro;
        var cien, veinte, cinco, uno, cantidad;
        cien = parseInt(retiro / 100);
        retiro = retiro - (100 * cien);
        veinte = parseInt(retiro / 20);
        retiro = retiro - (20 * veinte);
        diez = parseInt(retiro / 10);
        retiro = retiro - (10 * diez);
        cinco = parseInt(retiro / 5);
        retiro = retiro - (5 * cinco)
        uno = parseInt(retiro / 1);
        retiro = retiro - (1 * uno)

        entrega = ""
        if (cien > 0) {
            entrega = entrega + "Billetes de $100 ->" + cien + "\n";
        }
        if (veinte > 0) {
            entrega = entrega + "Billetes de $20 ->" + veinte + "\n";
        }
        if (diez > 0) {
            entrega = entrega + "Billetes de $10 ->" + diez + "\n";
        }
        if (cinco > 0) {
            entrega = entrega + "Billetes de $5 ->" + cinco + "\n";
        }
        if (uno > 0) {
            entrega = entrega + "Billetes de $1 ->" + uno + "\n";
        }
        alert(entrega);
    }else {
        alert("La cantidad ingresada es mayor al saldo actual.");
        saldo();
    }
    }
}
    
}


var Saldo = 0.00;
                



//ACTUALIZAR SALDO EN EL DOM
var parrafo = document.getElementById('saldo')
var boton = document.getElementById('depositar')

boton.addEventListener('click', () => {
parrafo.textContent = Saldo;
});


var parrafo = document.getElementById('saldo')
var boton = document.getElementById('retirar')

boton.addEventListener('click', () => {
parrafo.textContent = Saldo;
});

actualizarSaldo();




//CREAR NUEVO CLIENTE
function Cliente(
    name,
    DUI,
    username,
    password,
    numero_cuenta_bancaria
){
    this.name = name;
    this.DUI = DUI;
    this. username = username;
    this.password = password;
    this.numero_cuenta_bancaria = numero_cuenta_bancaria
}

const nataliaCliente = new Cliente ({
    name: "Natalia",
    DUI: "1234554321",
    username: "nata",
    password: "123",
    numero_cuenta_bancaria: "111000"
});



/*class SistemaDeAutenticacion {
    constructor() {
      this.Cliente = [];
    }
  
    agregarUsuario(username) {
      this.Cliente.push(username);
    }
  
    autenticarUsuario(username, password) {
      for (const username of this.Cliente) {
        if (username.verificarCredenciales(username, password)) {
          return true;
        }
      }
      return false;
    }
  }
  // Crear usuarios
  /*const usuario1 = new Usuario("usuario1", "contraseña1");
  const usuario2 = new Usuario("usuario2", "contraseña2");
  
  // Crear sistema de autenticación y agregar usuarios
  const sistema = new SistemaDeAutenticacion();
  sistema.agregarUsuario(usuario1);
  sistema.agregarUsuario(usuario2);
  
  // Iniciar sesión
  const name = (document.write("Ingrese su nombre"));
  const username = (document.write("Ingrese su usuario: "));
  const password = (document.write("Ingrese su contraseña: "));
  
  if (sistema.autenticarUsuario(username, password)) {
    console.log("Inicio de sesión exitoso.");
  } else {
    console.log("Inicio de sesión fallido.");
  }*/



//HISTORIAL DE DEPOSITOS

