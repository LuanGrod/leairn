// pega todos os botoes
var filtros = document.getElementsByClassName("filtros");

for (let index = 0; index < filtros.length; index++) {
    // pra cada botao que apertar
    filtros[index].addEventListener("click", function() {
        // esse nextElementSibling retorna o proximo elemento de mesma hierarquia, como 
        // ta usando o this(o botao que foi clickado) vai retornar o container que tem o form
        let filtrosContainer = this.nextElementSibling;
        if (filtrosContainer.style.display === "block") {
            filtrosContainer.style.display = "none";
        } else {
            filtrosContainer.style.display = "block";
        }
    });
}
