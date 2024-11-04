function isNumeroPrimo(numero){
    if(numero <= 1) return false;

    for(let i = 2; i < numero; i++){
        if( (numero % i) === 0) return false;
        
    }

    return true;
}

export default isNumeroPrimo;