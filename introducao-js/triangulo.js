const ehTriangulo = (l1, l2, l3) => {
    let existenciaTriangulo = false;
    let resultado = null;

    if (l1 + l2 > l3 && l1 + l3 > l2 && l2 + l3 > l1) existenciaTriangulo = true;

    if(existenciaTriangulo) {
        resultado = 'escaleno';
        if(l1 == l2 && l1 == l3) resultado = 'equilatero';
        else if(l1 == l2 || l1 == l3 || l2 == l3) resultado = 'isosceles';
    } else {
        resultado = 'Não é um triângulo';
    }

    return resultado;
}

console.log( ehTriangulo(2, 4, 3) );