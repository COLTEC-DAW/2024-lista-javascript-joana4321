function verificarNumero(numero, funcaoVerificacao) {
    return funcaoVerificacao(numero);
}

function Impar(numero) {
    return numero % 2 !== 0;
}

function Primo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i < Math.sqrt(numero) + 1; i++) {
        if (numero % i === 0) return false;
    }
    return true;
}


console.log(verificarNumero(5, Impar)); 
console.log(verificarNumero(4, Impar)); 
console.log(verificarNumero(7, Primo)); 
console.log(verificarNumero(10, Primo)); 