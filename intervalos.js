function range(min, max, i) {
    const array = [];
    for (let j = min+1; j <max; j+=i){
        array.push(j);
    }
    return array;
}
var mn = prompt("Insira o mínimo:");
var mx = prompt("Insira o máximo:");
var i1 = prompt("Insira o intervalo de variação entre os números:");
console.log(range(parseInt(mn), parseInt(mx), parseInt(i1)));