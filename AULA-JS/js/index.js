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

function teclapressionada() {
  console.log('Tecla pressionada');
}

var item1 = "arroz";
var item2 = "feijão";
var item3 = "macarrão";
var item4 = "leite";


const pessoa = ["Thallys", "Andrey", 30, "professor"]; //array
const x = "Dimitri";

alert(Array.isArray(x)); //true


function verifica() {
  let nome = document.getElementById("nome").value;

  if (nome == "" || nome == null) {
      let p = document.getElementById("teste");
    p.innerHTML = "O campo não pode ser vazio";
    p.style.color = "red";
  }else {
    let p = document.getElementById("teste");
    p.innerHTML = "Parabéns tudo certinho";
    p.style.color = "green";
  }
}


  function verificacor() {
    let cor = document.getElementById("cor").value;

    switch (cor) {
      case "azul":
           document.body.style.backgroundColor = "blue";
        break;
        case "vermelho":
          document.body.style.backgroundColor = "red";
          break;
          case "amarelo":
            document.body.style.backgroundColor = "yellow";
            break;
         default:   
              document.getElementById("teste").innerHTML = "Nenhuma cor disponivel para: "+cor;
    }
}



var ano = new Date().getFullYear();

for (let i=2021; i >1900; i--) {
  document.getElementById("ano").innerHTML +="<option value='"+ i +"'>"+ i +"</option>";
}


const carros = ["Gol", "Fusca", "Brasilia", "Dell Rey", "Chevette"];
var tamanho = carros.length;

for (let i = 0; i < tamanho; i++) {
  document.getElementById("teste").innerHTML += carros[i] + " - ";
}


var cronometro;

function ativarContagem() {
  //document.getElementById('tempo').innerHTML = "começou a Contar!";

  // EXECUTA APENAS UMA VEZ APÓS O tempo DETERMINADO
 // setTimeout(function () { 
    // document.getElementById('tempo').innerHTML = "Executou O setTimeout";
  // }, 5000);

   cronometro = setInterval(function() {
      var cronometro = document.getElementById('tempo').innerHTML;

    
    var  soma =  parseInt(cronometro) + 1;
      console.log(soma)
      document.getElementById('tempo').innerHTML = soma;
  }, 1000);


}


function paraContagem(){
  clearInterval(cronometro);
}
