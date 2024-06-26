function criarMatriz(linhas, colunas, funcaoMatricial) {
    const matriz = [];
    for (let i = 0; i < linhas; i++) {
        const linha = [];
        for (let j = 0; j < colunas; j++) {
            linha.push(funcaoMatricial(i, j));
        }
        matriz.push(linha);
    }
    return matriz;
}

function somaIndices(i, j) {
    return i + j;
}

function produtoIndices(i, j) {
    return i * j;
}

function diagonalIdentidade(i, j) {
    return i === j ? 1 : 0;
}

function quocienteIndices(i, j) {
    return i ** 2 / (j + 1);
}

function comparacaoIndices(i, j) {
    return i > j ? 1 : (i < j ? 5 : 0);
}
