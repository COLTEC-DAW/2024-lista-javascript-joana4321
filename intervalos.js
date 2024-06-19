/*### Trabalhando com intervalos

* Implemente uma função `range(min, max)` que receba dois números `min` e `max`, e retorne um array contendo todos os números inteiros entre `min` e `max`.

* Adicione um parâmetro na função `range(min, max, i)` que representa o intervalo de variação entre os números a serem preenchidos no array.*/
function range(min, max) {
    var array = [];
    for (let i = min+1; i < max; i++){
        for (let j = 1; j < max-min; j++) 
            array[j]=i;
    }
    return array;
}

var mn = prompt("Insira o mínimo:");
var mx = prompt("Insira o máximo:");
console.log(range(mn, mx)[0]);