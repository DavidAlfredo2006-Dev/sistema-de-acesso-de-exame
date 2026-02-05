//Script para o formulário de candidatura

const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {

    e.preventDefault();

    const nome = document.getElementById('ncompleto').value;
    const dataNasc = document.getElementById('dataNasc').value;
    const escolaOrigem = document.getElementById('escolaOrigem').value;
    const tel = document.getElementById('tel').value;
    const email = document.getElementById('email').value;
    const cursos = document.getElementById('cursos').value;
    const comprovativo = document.getElementById('comprovativo').value;
    const FicheiroFrente = document.getElementById('FicheiroFrente').value;
    const FicheiroVerso = document.getElementById('FicheiroVerso').value;
    const gen = document.getElementById('gen').value;

    const dados = {
        nome,
        dataNasc,
        escolaOrigem,
        tel,
        email,
        cursos,
        comprovativo,
        FicheiroFrente,
        FicheiroVerso,
        gen
    };

    localStorage.setItem('dados', JSON.stringify(dados));

    window.location.href = 'resultado.html';
})
