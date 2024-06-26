function reverseArray(array) {
    const retorno = [];
    for (let i = array.length-1; i >= 0; i--) {
        retorno.push(array[i]);
    }
    return retorno;
}
console.log(reverseArray([1,2,3,4,5,6]));