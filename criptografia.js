function criptografarString(str, funcaoCriptografia) {
    let stringCriptografada = '';
    for (let i = 0; i < str.length; i++) {
        stringCriptografada += funcaoCriptografia(str[i]);
    }
    return stringCriptografada;
}

function cifraDeCesar(caractere, deslocamento = 3) {
    const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const indice = alfabeto.indexOf(caractere);

    if (indice === -1) {
        return caractere;
    }

    const Maiuscula = indice < 26;
    const indiceBase = Maiuscula ? 0 : 26;
    const novoIndice = (indice - indiceBase + deslocamento) % 26 + indiceBase;

    return alfabeto[novoIndice];
}

const stringOriginal = 'Faltam 16 dias, posicionem as aves.';
const stringCriptografada = criptografarString(stringOriginal, caractere => cifraDeCesar(caractere, 3));
console.log(`Original: ${stringOriginal}`); 
console.log(`Criptografada: ${stringCriptografada}`);