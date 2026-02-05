//script que apresenta a lista de pessoas logadas no sistema, ressaltando que em tom de simulação foi criado dados estáticos

const corpoResultado = document.getElementById('corpo-resultado');

const usuario = JSON.parse(localStorage.getItem('usuario'));

const linha = document.createElement('tr');

linha.innerHTML = `
    <td>${usuario.nome}</td>
    <td>${usuario.idade}</td>
    <td>${usuario.escola_origem}</td>
    <td>${usuario.sexo}</td>
    <td>${usuario.media}</td>
    <td>${usuario.numero}</td>
    <td>${usuario.status}</td>
`;

corpoResultado.appendChild(linha)
    