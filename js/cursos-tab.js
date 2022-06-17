function openCurso(pageName){
    let tabContent = document.getElementsByClassName("tab-content");

    // esconde os elementos da classe "tab-content"
    for (let index = 0; index < tabContent.length; index++) {
        tabContent[index].style.display="none";
    }

    // mostra so aquele que a funçãor ecebeu como parametro (element)    
    document.getElementById(pageName).style.display="block";
}

// roda a funcao uma primeira vez
document.getElementById("defaultOpen").click();