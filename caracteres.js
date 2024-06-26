function countChars(frase, c) {
    var conta=0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i]==c) 
            conta++;
    }
    return(conta);
}
var frasex = prompt("Insira uma frase:");
var char = prompt("Insira caractere para contar:");
console.log("O caractere " +char+" apareceu " +countChars(frasex, char)+ " vezes.");