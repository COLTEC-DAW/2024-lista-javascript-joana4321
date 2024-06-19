function min(a, b) {
    if (a<b)
        return a;
    else
        return b;
}
function max(a, b) {
    if (a>b)
        return a;
    else
        return b;
}
var a = prompt("Insira o valore de a:");
var b = prompt("Insira o valore de b:");

console.log("O menor valor é: " +min(a,b) + " e o maior valor é: " + max(a,b));