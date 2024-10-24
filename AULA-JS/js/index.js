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

function eventoDlClick() {
  alert('Evento de clique duplo');
}