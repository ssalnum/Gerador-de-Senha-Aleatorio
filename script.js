function gerarSenha(incluirLetrasMinusculas, incluirLetrasMaiusculas, incluirNumeros, incluiCaracteresEspeciais) {
    const QuantidadeDeCaracteres = 12;
    const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz"
    const letrasMaiusculas = letrasMinusculas.toUpperCase();
    const numeros = "0123456789"
    const caracteresEspeciais = "!@#$%^&*()_+-="

    let senha = "";
    let caracteresPermitidos = "";

    caracteresPermitidos += incluirLetrasMinusculas ? letrasMinusculas : "";
    caracteresPermitidos += incluirLetrasMaiusculas ? letrasMaiusculas : "";
    caracteresPermitidos += incluirNumeros ? numeros : "";
    caracteresPermitidos += incluiCaracteresEspeciais ? caracteresEspeciais : "";

    if(caracteresPermitidos.length !== 0){
        for (let i = 0; i < QuantidadeDeCaracteres; i++) {
            const indexAleatorio = Math.floor(Math.random() * caracteresPermitidos.length)
            senha += caracteresPermitidos[indexAleatorio]
        }

        inputSenha.value = senha;

        return senha
    }

    return console.log(`Deve ser selecionado pelo menos 1 grupo de caracteres.`)
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


const opcoes = document.querySelector(".opcoes")
const botaoOpcoes = document.querySelector(".botao-opcoes");
const menuOpcoes = document.querySelector(".menu-opcoes");

const toggleLetrasMinusculas = document.getElementById("check-1")
const toggleLetrasMaiusculas = document.getElementById("check-2")
const toggleNumeros = document.getElementById("check-3")
const toggleCaracteresEspeciais = document.getElementById("check-4")

botaoOpcoes.addEventListener("click", () => opcoes.classList.toggle("ativo"))

let incluirLetrasMinusculas = true;
let incluirLetrasMaiusculas = true;
let incluirNumeros = true;
let incluirCaracteresEspeciais = true;

toggleLetrasMinusculas.checked = incluirLetrasMinusculas;
toggleLetrasMaiusculas.checked = incluirLetrasMaiusculas;
toggleNumeros.checked = incluirNumeros;
toggleCaracteresEspeciais.checked = incluirCaracteresEspeciais;

toggleLetrasMinusculas.addEventListener("change", () => incluirLetrasMinusculas = toggleLetrasMinusculas.checked)
toggleLetrasMaiusculas.addEventListener("change", () => incluirLetrasMaiusculas = toggleLetrasMaiusculas.checked)
toggleNumeros.addEventListener("change", () => incluirNumeros = toggleNumeros.checked)
toggleCaracteresEspeciais.addEventListener("change", () => incluirCaracteresEspeciais = toggleCaracteresEspeciais.checked)

botaoGerarSenha.addEventListener("click", () => gerarSenha(incluirLetrasMinusculas, incluirLetrasMaiusculas, incluirNumeros, incluirCaracteresEspeciais))
botaoCopiar.addEventListener("click", copiarSenha)

const botaoTema = document.getElementById("tema");

botaoTema.addEventListener("click", ()=> {
    document.body.classList.toggle("light-theme")
    if(document.body.classList.contains("light-theme")){
        botaoTema.innerHTML = "light_mode"
    }else{
        botaoTema.innerHTML = "dark_mode"
    }
})


