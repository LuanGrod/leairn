function validaForm(email, mensagem) {
    let flag = 0;
    
    if (validaEmail(email)) {
        flag++;
    } else{
        alert("O e-mail deve pertencer ao domínio '@leairn.com'\neg: <usuario>@leairn.com");
    }

    if (validaMsg(mensagem)) {
        flag++;
    } else{
        alert("A mensagem deve possuir pelo menos 10 caracteres de tamanho");
    }

    if (flag == 2)
        alert("Email enviado com sucesso!");
}

function validaEmail(email) {
    let usuario = email.value.substring(0, email.value.indexOf("@"));
    let dominio = email.value.substring(email.value.indexOf("@")+ 1, email.value.length);

    if (
    (usuario.length >=1) && //usuario tem que ter mais de 1 caractere, não pode ter @ nem ' '
    (usuario.search("@")==-1) && 
    (usuario.search(" ")==-1) && 
    (dominio == "leairn.com") //dominio tem que ter igual a 'learn.com'
    ){
        return true;
    } else {
        return false
    }
}

function validaMsg(mensagem) {
    let msg = mensagem.value;

    if (msg.length >= 10) {
        return true;
    } else {
        return false;
    }
}