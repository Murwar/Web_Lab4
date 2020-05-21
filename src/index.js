import getMyInfo from './aboutMe.js';
import getPokemonInfo from './pokemon.js';

const ELEM = document.getElementById('panelTab');
const POKEMON_NAME = 'eevee';

function fillWithMyData() {
    ELEM.innerHTML = getMyInfo();
}

function fillWithPokemon() {
    getPokemonInfo(POKEMON_NAME).then(info => ELEM.innerHTML = info);
}

document.getElementById('profileTab').onclick = fillWithMyData;
document.getElementById('pokemonTab').onclick = fillWithPokemon;
fillWithMyData();