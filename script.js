//DADOS DE ENTRADA
const numeroSecreto = Math.floor(Math.random() * 100 + 1);

//TENTATIVAS
const limiteTentativas = 10;
let tentativasRestantes = 10;

let jogoAcabou = false;


//FUNÇÃO COMPLETA
function chutar() {

    //VERIFICA SE O JOGO JÁ TERMINOU
    if (jogoAcabou === true) {
        alert("Você já terminou essa partida. Atualize a página para jogar novamente.");
        return;
    }

    const palpite = Number(document.getElementById("palpite").value);

    if (palpite <= 0 || palpite > 100) {
        alert("Digite um número entre 1 e 100.");

    } else {
        tentativasRestantes = tentativasRestantes - 1;
        document.getElementById("tentativas").innerHTML =
            `O número de tentativas restantes é: ${tentativasRestantes}`;

        if (palpite === numeroSecreto) {
            alert("Parabéns, você acertou o número!");
            jogoAcabou = true;

        } else if (palpite < numeroSecreto) {
            document.getElementById("mensagens").innerHTML =
                "O número secreto é maior"; 

        } else {
            document.getElementById("mensagens").innerHTML =
                "O número secreto é menor";
        }

        if (tentativasRestantes === 0 && palpite !== numeroSecreto) {
            document.getElementById("mensagens").innerHTML =
                `Você perdeu! O número secreto era: ${numeroSecreto}!`;
            jogoAcabou = true;
        }
    }
}