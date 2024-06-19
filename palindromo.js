var pali = prompt("Insira uma palavra:")
var controle =0;
for (let i = 0; i < ((pali.length-1)/2); i++) {
    if (pali[i]==(pali[pali.length-i-1])) 
        continue;
    else{
        console.log("Não é um palíndromo");
        controle++;
        break;
    }
}
if (controle==0) 
    console.log("É um palíndromo!")
