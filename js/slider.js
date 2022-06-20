// pega o numero de imagens que tem o slider
let range = document.querySelectorAll('.slides .image');
let atual = 0;
// primeira imagem
let imagem = document.getElementById('atual');
// botoes
let left = document.getElementById('left');
let right = document.getElementById('right');
// pra permitir que a função seja ativada quando ela estiver rodando
// basicamente quando ela ta slidando sozinha, se não existir isso
// ela nn vai permitir 'cancelar' uma rotação clicanco no botao
let flag = true;

left.addEventListener('click', ()=>{
    atual--;
    flag = false;
    slide()
})

right.addEventListener('click', ()=>{
    atual++;
    flag = false;
    slide()
})

function slide(){
    if (atual >= range.length) {
        atual = 0;
    } else if (atual < 0){
        atual = range.length - 1;
    }

    imagem.style.marginLeft = -100*atual+'VW';
}

setInterval(() => {
    if (flag) {
        atual++;
        slide();
    } else{
        flag = true;
    }

}, 10000);