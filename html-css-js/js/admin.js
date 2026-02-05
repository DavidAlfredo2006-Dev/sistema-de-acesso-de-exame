
//função para login do administrador
function logar(){
    var ncompleto = document.getElementById('ncompleto').value;
    var senha = document.getElementById('senha').value;

    if(ncompleto == "admin" && senha == '12345'){
        alert('Tudo certo!!!');
        window.location.href= '../ADM/html/dashboard.html';
    }else{
        alert('nome ou senha incorrecta!!!')
    }
}