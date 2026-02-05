//Script que forncesse uma simulação de rupi, fornecendo 13 números aleatórios usando o Metódo Math, com as sua propriedades floor para arredondamento e random para fornecer números aleatórios
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {

    const res = document.getElementById('res');

    const n = Math.floor(Math.random() * 9999999999999 + 100000000000);

    res.innerHTML = `${Number(n)}`;
})