import flags from './model/flags.js';

loadFlags();

function loadFlags() {
    // const innerHTML = flags.map(flagCard).join("");
    const innerHTML = flags.map((flag) => flagCard(flag)).join("");

    document.querySelector('main').innerHTML = innerHTML;

    document.getElementById('alguma-coisa')

    // console.log(innerHTML);
}

function flagCard(flag){
    return `
        <div id="${flag.id}" class="flag col-2 my-2 text-center">
            <img src="${flag.image}" alt="${flag.name}">
            <p>${flag.name}</p>
        </div>
    `;
}