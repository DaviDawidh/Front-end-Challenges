// variavais?
// dados de entrada?
// dados de saidas?

const elementoRespostas = document.querySelector("#resposta")
const elementoPerguntas = document.querySelector("#inputPergunta")
const respostas = [
    "Certeza",
    "Não tenho tanto certeza.",
    "É decididamente assim.",
    "Não conte com isso",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente",
    "Minha resposta é não",
    "Melhor não te dizer agora.",
    "A meu ver sim.",
    "Minhas fontes dizem que não.",
    "Não é possível prever agora.",
    "Perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunta novamente",
    "Sinais apontam que sim.",
]

//Para saber o total de respostas
//console.log(respostas.length)

//Retorna um número aleatorio
//console.log(numeroAleatorio)

//Clicar em fazer pergunta
function fazerPergunta() {
    // Condição caso não tenha pergunta
    if (inputPergunta.value == "") {
        alert("Campo Vazio, digite sua pergunta!!!")
        return
    }

    const pergunta = "<div>" + inputPergunta.value + "</div>"

    //Vai contar todas as resposta
    const totalRespostas = respostas.length
    //Calulo para o número aleatorio(Math.Floor a redonda em inteiro(Math.random(0,99) * totalRespostas(16)) = 15,84 => 16
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

    elementoRespostas.innerHTML = pergunta + respostas[numeroAleatorio]

    //Sumir a resposta depois de 5 segundos

    setTimeout(function () {
        elementoRespostas.style.opacity = 0;
    }, 5000)


}