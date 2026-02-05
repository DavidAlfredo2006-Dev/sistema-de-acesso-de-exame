//O script que fornecesse os dados estáticos

const usuarios = [
    {
        nome: "David Alfredo",
        senha: "12345",
        idade: 18,
        escola_origem: "Povo em Luta - 1004",
        sexo: "Masculino",
        media: 17,
        numero: "949274501",
        id: 1,
        status: "Aprovado"
    },

    {
        nome: "Idalina Da Silva",
        senha: "12346",
        idade: 17,
        escola_origem: "Povo em Luta - 1004",
        sexo: "Feminino",
        media: 16,
        numero: "949274501",
        id: "2",
        status: "Aprovada"
    },

    {
        nome: "Beni Kionda",
        senha: "12347",
        idade: 16,
        escola_origem: "Povo em Luta - 1004",
        sexo: "Masculino",
        media: 15,
        numero: "949274501",
        id: 3,
        status: "Reprovado"
    },

    {
        nome: "Juliana Sebastião",
        senha: "12348",
        idade: 15,
        escola_origem: "Povo em Luta - 1004",
        sexo: "Femenino",
        media: 14,
        numero: "949274501",
        id: 4,
        status: "Pendente"
    }
]

//função que autêntica os dados inseridos, se no caso fazem parte da lista dos dados estáticos, vector objecto [{}]
function login(e){
    
    e.preventDefault();

    const nome = document.getElementById("ncompleto").value;
    const senha = document.getElementById("senha").value;

    const usuario = usuarios.find((usuario) => usuario.nome === nome && usuario.senha === senha)

    if(usuario){
        localStorage.setItem('usuario', JSON.stringify(usuario))
        window.location.href = '../html/lista.html'
    }else{
        alert("Nome ou senha incorreta");
    }
}

document.getElementById('formulario').addEventListener('submit', login);