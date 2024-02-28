function gerarSenha() {
    const QuantidadeDeCaracteres = 12;
    const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz"
    const letrasMaiusculas = letrasMinusculas.toUpperCase();
    const numeros = "0123456789"
    const simbolos = "!@#$%^&*()_+-="

    let senha = "";
    const todosCaracteres = letrasMinusculas + letrasMaiusculas + numeros + simbolos;

    for (let i = 0; i < QuantidadeDeCaracteres; i++) {
        const indexAleatorio = Math.floor(Math.random() * todosCaracteres.length)
        senha += todosCaracteres[indexAleatorio]
    }

    inputSenha.value = senha;

    return senha
}

function copiarSenha() {
    inputSenha.select()
    navigator.clipboard.writeText(inputSenha.value).then(function() {
        console.log("Texto copiado para a área de transferência");
    }).catch(function(err) {
        console.error("Erro ao copiar o texto para a área de transferência", err);
    });
}

const botaoGerarSenha = document.querySelector("#botao-gerarSenha");
const inputSenha = document.querySelector("#input-senha");
const botaoCopiar = document.querySelector("#copy-icon")

botaoGerarSenha.addEventListener("click", gerarSenha)
botaoCopiar.addEventListener("click", copiarSenha)


