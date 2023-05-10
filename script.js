function trocar(darkmode){
    document.body.style.background = darkmode
}

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
var imagens=[
    'imagens/camisetanutella.png',
    'imagens/camisetaraiz.png',
    'imagens/canecacafé.png',
    'imagens/melhoresdojs.png',
    'imagens/moletomjs.png',
    'imagens/monawelli.png'];

let Index=0;
let time =2000;

function slideShow(){
    document.getElementById('imagens').src=imagens[Index];
    Index++;
    if(Index==imagens.length){Index=0}
    setTimeout(slideShow, time);
}

slideShow();