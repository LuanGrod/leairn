let range = document.querySelectorAll('.slides .image');
let atual = 0;
let imagem = document.getElementById('atual');
let left = document.getElementById('left');
let right = document.getElementById('right');
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