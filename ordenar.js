function bubbleSort(array, compare) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < array.length - 1; i++) {
            if (compare(array[i], array[i + 1]) > 0) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]]; // Troca
                swapped = true;
            }
        }
    } while (swapped);
    return array;
}

function crescente(a, b) {
    return a - b;
}

function decrescente(a, b) {
    return b - a;
}

function crescentesimpares(a, b) {
    if (a % 2 === 0 && b % 2 === 0) return 0; 
    if (a % 2 === 0) return 1; 
    if (b % 2 === 0) return -1; 
    return a - b; 
}

function decrescentespares(a, b) {
    if (a % 2 !== 0 && b % 2 !== 0) return 0; 
    if (a % 2 !== 0) return 1; 
    if (b % 2 !== 0) return -1; 
    return b - a; 
}

console.log(bubbleSort([5, 3, 8, 1, 2, 7], crescente)); 
console.log(bubbleSort([5, 3, 8, 1, 2, 7], decrescente)); 
console.log(bubbleSort([5, 3, 8, 1, 2, 7], crescentesimpares)); 
console.log(bubbleSort([5, 3, 8, 1, 2, 7], decrescentespares)); 
