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
function quiz(){
    let pontos=0
    alert("Vamos começar o quiz?")
    let resp1=prompt("O que é o jeito raiz? \n (a)Tudo pelo bash/cmd \n (b)Usar extensões \n (c)usar tudo autofill")
    let resp2=prompt("O que o Wellington é? \n (a) PAIA \n (b) O HOMI \n (c) Um simples e mero professor")
    let resp3=prompt("O que ele representa? \n (a) O conhecimento para os ignorantes \n (b) A luz para aqueles na escuridão \n (c) Todas as opções")
    if (resp1=="a"){
        pontos++
    }
    if (resp2=="b"){
        pontos++
    }
    if (resp3=="c"){
        pontos++
    }
    if(pontos==0){
        alert("Você tirou 0/3 \n Infelizmente precisa estudar mais sobre nosso maravilhoso professor")
    }else if(pontos==1){
        alert("Você tirou 1/3 \n Esta entendendo um pouquinho, mas precisa saber mais para ser um mestre do javascript")
    }else if(pontos==2){
        alert("Você tirou 2/3 \n Está quaaaseee la, você é quase um wellzete oficial, reflita mais sobre sua vida e escolhas")
    }else{
        alert("Você tirou 3/3 \n PARABENS, você é um wellzete de carteirinha, e ainda pode se considerar um mestre do javascript")
    }

}

slideShow();