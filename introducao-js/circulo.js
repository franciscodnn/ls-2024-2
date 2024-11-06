// area círculo = pi * (raio ** 2)

function calcularAreaCirculo(raio) { // Camel Case
    const resultado = Math.PI * (raio**2);

    return resultado.toFixed(2);
}

console.log( calcularAreaCirculo(10) );