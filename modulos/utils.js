const PI = Math.PI;

function soma(a, b){
    return a + b;
}

function areaDoCirculo(r){
    return PI * (r**2);
}

function linkHTML(href, rotulo){
    return `
      <a href="${href}">${rotulo}</a>
    `;
}

export { soma, PI, linkHTML };
export default areaDoCirculo;