//Script que fornesse os dados do formulário de candidatura, de forma dinâmica

const corpoResultado = document.getElementById('corpo-resultado');

const dados = JSON.parse(localStorage.getItem('dados'));

const linha = document.createElement('tr');


linha.innerHTML = `
    <td>${dados.nome}</td>
    <td>${dados.dataNasc}</td>
    <td>${dados.email}</td>
    <td>${dados.cursos}</td>
    <td>${dados.comprovativo}</td>
    <td>${dados.ficheiroFrente}</td>
    <td>${dados.ficheiroVerso}</td>
    <td>${dados.tel}</td>
    <td>${dados.escolaOrigem}</td>
    <td>${dados.gen}</td>
`;

corpoResultado.appendChild(linha);