const numero = 5;
let resultado = null;

let funcaoObterQtdNumerosImpares = function(numero, numeroInicial = 1, passo = 1) {
    let resultado = 0;
    // estrutura de repetição - limite _numero_
    for(let i = numeroInicial; i <= numero; i = i + passo){
        if(!ehNumeroPar(i))
            resultado++;
    }

    return resultado;
}


// console.log( ehNumeroPar(6) );
// console.log( obterQtdNumerosImpares(11, 8) );

// console.log( funcaoObterQtdNumerosImpares(11, 8) );

function ehNumeroPar(numero = 10) {
    const resultado = (numero % 2 === 0) ? true : false;

    return resultado;
}

function obterQtdNumerosImpares(numero, numeroInicial = 1, passo = 1) {
    let resultado = 0;
    // estrutura de repetição - limite _numero_
    for(let i = numeroInicial; i <= numero; i = i + passo){
        if(!ehNumeroPar(i))
            resultado++;
    }

    return resultado;
}

let funcaoEhNumeroPar = null;

funcaoEhNumeroPar = ehNumeroPar;
// console.log(funcaoEhNumeroPar(8));

funcaoEhNumeroPar = ehNumeroPar(8);
// console.log(funcaoEhNumeroPar);

function ehMaiorDeIdade(idade, limiarMaiorIdade = 18){
    if(idade < limiarMaiorIdade) return false;

    return true;
}

// Arrow Function
const maiorDeIdade = (idade, limiar = 18) => (idade >= limiar);
// console.log( maiorDeIdade(21) );

// Arrow Function
const soma = (a, b) => a + b; // (a, b)=> { return a + b }
// console.log( soma(5, 10) );

function somaNumeros(...parametros){
    // estrutura de repetição para percorrer a variável parametros
    // [5, 10, 10, 20, 30]
    let resultado = 0;
    for(const i of parametros){
        resultado = resultado + i;
    }
    return resultado;
}

function somaNumerosPares(arrayNumeros, callback) {
    let resultado = 0;

    // [1, 2, 3, 4, 5]
    for(const i of arrayNumeros){
        if(callback(i)) resultado = resultado + i;
    }

    return resultado;
}

console.log( somaNumerosPares([1, 2, 3, 4, 5], ehNumeroPar) );

// console.log( somaNumeros(5, 10, 10, 20, 30) );