function transformarString(str, funcaoTransformacao) {
    let stringTransformada = '';
    for (let i = 0; i < str.length; i++) {
        stringTransformada += funcaoTransformacao(str[i]);
    }
    return stringTransformada;
}

function caixaAltaVogais(caractere) {
    return 'aeiou'.includes(caractere.toLowerCase()) ? caractere.toUpperCase() : caractere;
}

function caixaAltaConsoantes(caractere) {
    return 'aeiou'.includes(caractere.toLowerCase()) ? caractere : caractere.toUpperCase();
}

function caixaBaixaVogais(caractere) {
    return 'aeiou'.includes(caractere.toLowerCase()) ? caractere.toLowerCase() : caractere;
}

function caixaBaixaConsoantes(caractere) {
    return 'aeiou'.includes(caractere.toLowerCase()) ? caractere : caractere.toLowerCase();
}

console.log(transformarString('Teste', caixaAltaVogais)); 
console.log(transformarString('Teste', caixaAltaConsoantes)); 
console.log(transformarString('Teste', caixaBaixaVogais)); 
console.log(transformarString('Teste', caixaBaixaConsoantes)); 

