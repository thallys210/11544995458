const carro = {
    marca: "ford", 
    modelo: "ka", 
    ano:2015, 
    placa: "ABC-1234",
    buzina: function () { alert('Biiiiiiiiiii') },
   completo: function(){
    return "Amarca é " + this.marca + " e o modelo e e: " + this.modelo
   }
 };

console.log(carro.completo());


function eventoClick() {
  //alert('acionou um evento de lick');
  document.body.style.backgroundColor = "yellow";
}

function eventoDblClink() {
  alert('Evento de clique duplo');
}

function viravermelho() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";
}

function viraAzul() {
  let div = document.getElementById("teste");
  div.style.backgroundColor = "blue";
}

function adicionaTexto(){
  let p = document.getElementById("texto");
  p.append('mouse moveu<br>');
}

function limpaTexto() {
  document.getElementById("campoTexto").value = "";
}

function mudou() {
  console.log ('Mudou');
}