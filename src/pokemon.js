async function getAbilityInfo(Url) {
    let response = await fetch(Url);

    if (!response.ok) {
        alert('Ошибка HTTP: ' + response.status);
        return null;
    }

    const EFFECT_DATA = await response.json();
    return EFFECT_DATA.effect_entries[0].effect;
}

export default async function getPokemonInfo(pokemonName) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

    if (!response.ok) {
        alert('Ошибка HTTP: ' + response.status);
        return null;
    }

    const POKEMON_DATA = await response.json();

    let pokemonID = POKEMON_DATA.id
    let pokemonInfo = `<div>`

    pokemonInfo += `<div>
                    <img src = "https://pokeres.bastionbot.org/images/pokemon/${pokemonID}.png" 
                            alt = "Pokemon Image" 
                            style="width:500px;
                            height:500px; padding-top: 3rem" align="left"/>
                    <div style="padding-top: 6rem">
                        <span>
                            <span style="font-weight: bold; font-size: 1.1rem">name: </span>${pokemonName}<br>
                        </span>`;


    for (let i = 0; i < POKEMON_DATA.abilities.length; i++) {
        let ability = POKEMON_DATA.abilities[i].ability;
        let abilityUrl = ability.url;
        let abilityPromise = getAbilityInfo(abilityUrl);
        let abilityName = ability.name;

        pokemonInfo += `<span style="font-weight: lighter">
                            <span style="font-weight: bold; font-size: 1.1rem;">${abilityName}: </span>${await abilityPromise}<br>
                        </span>`
    }
    pokemonInfo += `</div></div></div>`

    return pokemonInfo;
}
