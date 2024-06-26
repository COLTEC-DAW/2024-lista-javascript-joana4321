function mod2(number) {
    if (number%2==0) 
        return true;
    return false;
}
function mod(num, mod) {
    if (num%mod==0)
        return true;
    return false;
}

var number = prompt("Insira o número para verificar divisibilidade por 2:");
if (mod2(number)==true)
    console.log("Divisível");
else
    console.log("Não divisível");
var num = prompt("Mais um número:");
var modx = prompt("Verificar a divisibilidade por:");
if (mod(num, modx)==true)
    console.log("Divisível");
else
    console.log("Não divisível");