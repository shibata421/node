function falar(palavra) {
    console.log(palavra);
}

function executar(funcao, valor) {
    setTimeout(() => funcao(valor), 3000)
}

executar(falar, "Ola Node.js");
console.log("Passei aqui");