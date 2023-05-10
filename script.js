//Slide
var imagens=[
    'IMAGEM 1',
    'IMAGEM 2',
    'IMAGEM 3',
];

let Index=0; //Define a primeira imagem como a que vai aparecer
let time=2000; //quanto tempo as imagens vão ficar

function slideShow(){
    document.getElementById('banner').src=imagens[Index];
    Index++;
    if(Index == imagens.length){Index=0}
    setTimeout("slideShow()" ,time);
}

slideShow()