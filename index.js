function verificar() {
    let nome = document.getElementById("nome").value;

    if(nome == "" || nome == null) {
        let p = document.getElementById("teste");
        p.innerHTML = "o campo não pode ser vazio";
        p.style.color = "red";
    }else{
        let p = document.getElementById("teste")
        p.innerHTML = "parabéns tudo certiho";
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

         document.getElementById("Teste").innerHTML = "nenhuma cor disponivel para: " +cor;
            
}
        
}