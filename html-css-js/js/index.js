//script que em conjunto do CSS, faz com que o menu de navegação, quando numa dimensão de tela menor desencadeiar as informações da Lista não ordenada (ul) e criar a movimentação do hamburguer (os três traços) 

const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})


