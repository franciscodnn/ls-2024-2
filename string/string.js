const str1 = "String com aspas duplas";
const str2 = 'Aspas simples';
const templateLiterals = `Template literals`;

const href = "https://www.ifpb.edu.br";

// const tagA = "<a href=\"" + href + "\">IFPB</a>";
const tagA = `<a href="${href}">IFPB</a>`;

// console.log(tagA);

// const strObjeto = new String("teste");

// console.log('\u03c0r²');

// console.log('teste'.includes('s'));

// console.log('teste'.endsWith('te'));

// console.log('lorem ipsum dolor'.toUpperCase());

// console.log('lorem ipsum DOLOR'.toLocaleLowerCase());

// console.log('JS é uma ótima linguagem!\n'.repeat(3));

// console.log('teste'.match(/es/g));

// console.log('teste'.replace(/e/g, '3'));

// console.log('teste'.replaceAll('e', '3'));

// console.log('teste 1 2 3'.split(' ').join('_'));

// console.log('0000teste 0 teste 20000'.replace(/(^0+)|(0+$)/g, ''));

// console.log('teste'.search(/e/g));

// console.log('12.4'.padEnd(5, '0'));

// console.log('teste'.substring(1, 3));

// console.log('teste'.substr(1, 3));

console.log('teste'.slice(-5, -1));

// abracadabra

// 'abracadabra' => f('a', 'A', 1, 9) => 'abrAcAdAbra'

mudaQualquerPosicao('abracadabra', 'a', 'A', 1, 9);

function mudaQualquerPosicao(
    strOriginal, 
    simbolo, simboloModificar, 
    inicio, fim) {
    const strOriginalInicio = strOriginal.substring(0, inicio);
    const strOriginalFim = strOriginal.substring(fim);

    const novaString = strOriginal.substring(inicio, fim);

    const resultado = novaString.replaceAll(simbolo, simboloModificar);

    console.log(strOriginalInicio+resultado+strOriginalFim);

}
