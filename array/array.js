const lista = [1, 2, 3, 'LS', true, [4, 5, 6] ];

lista[0]; // 1
lista[1]; // 2
lista[2]; // 3
lista[3]; // undefined

// console.log( lista[3] );

lista[0] = 4;
lista[5] = [7, 8, 9];

// console.log(lista[5]);

// lista = [1, 2, 3, 'LS', true, [4, 5, 6] ];
for(let i = 0; i < lista.length; i++){
    // console.log(lista[i]);
}

for(let elemento of lista){
    // console.log(elemento);
}

for(const indice in lista){
    // console.log('lista[' + indice + ']: ' + lista[indice]);
}

// console.log('--- Removendo o elemento lista[1]');
delete lista[1];
for(const elemento of lista){
    // console.log(elemento);
}

const array1 = [5, 4, 3];
const array2 = [8, 9];
const arrayResultante = [array1, array2];
const arraySpreadOperator = [...array1, ...array2];

// console.log(arrayResultante);

// ------ Funções em Array ------- //
const array = [8, 9, 5, 6, 2];

array.push(1); // insere no final
console.log(array);

array.unshift(3); // insere no início
console.log(array);

array.splice(3, 0, 10); // insere no índice 3
console.log(array);

array.pop();
console.log( array );

array.shift();
console.log( array );

array.splice(3, 1);
console.log( array );

console.log( array.sort(sortNumbers).reverse() );
// array.sort().splice(0, 1, 3);
// console.log(array);

// console.log( array.sort() );

function sortNumbers(a, b){
    return a - b;
}

// [ 8, 9, 10, 6, 2 ]
// a 8, b 9 = -1
// a 8, b 10 = -2
// a 8, b 6 = 2
// [ 6, 9, 10, 8, 2]
// a 6, b 2
// [ 2, 9, 10, 8, 6]
// a 9, b 10 = -1
// a 9, b 8 = 1
// [2, 8, 10, 9, 6]
// a 8, b 6 = -2
// [2, 6, 10, 9, 8]

// ------ //
console.log([1, 2, 3].includes(4));

console.log([1, 2, 3].join(', '));

console.log([1, 2, 3, 4].slice(1, 4));