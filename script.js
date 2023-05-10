function trocar(cor){
    document.body.style.background =cor
}

let data = new Date()
document.write(data)

function validar() {
    let nome = document.getElementById("nome").value
    let telefone = document.getElementById("telefone").value
    let email = document.getElementById("email").value
  
    if (nome == "" || telefone == "" || email == "") {
        alert('Preencha os campos')
    } else {
        alert('Agradecemos o seu contato!')
      }
    }

//slideshow
var imagens=[    'imagens/prod1.png',    'imagens/prod2.png',    'imagens/prod3.png',    'imagens/prod4.png',    'imagens/prod5.png',    'imagens/prod6.png',];

let Index=0;
let time =2000;

function slideShow(){
    document.getElementById('imagens').src=imagens[Index];
    Index++;
    if(Index==imagens.length){Index=0}
    setTimeout(slideShow, time);
}

slideShow();
