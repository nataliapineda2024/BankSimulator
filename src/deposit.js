function deposit(){

  const money = parseFloat(prompt("How much do you want to deposit?"));
  if(money > 0){
  let elementoDondeMostrar = document.getElementById("saldo");; 
  elementoDondeMostrar.innerHTML  = userAccount.balance += money;
  localStorage.setItem("Balance", money)
 }else{
  alert("The amount entered must be greater than 0");
 }

  const transaction = {
    payer: userAccount.name,
    NumberAccount: userAccount.numberAccount,
    balance: userAccount.balance,
    Amount: money,
    Date: new Date(),
  }
  userAccount.history.push(transaction);
 
};



function guardar() {
  const dato = document.getElementById('saldo').value;
  localStorage.setItem('miDato', dato);
  mostrarDatoGuardado();

}



function mostrarDatoGuardado() {
  const datoGuardado = localStorage.getItem('miDato');
  if (datoGuardado) {
      document.getElementById('datoGuardado').textContent = 'Dato guardado: ' + datoGuardado;
  } else {
      document.getElementById('datoGuardado').textContent = 'No hay dato guardado.';
  }
}

mostrarDatoGuardado();