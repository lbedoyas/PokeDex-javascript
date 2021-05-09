const url = 'https://pokeapi.co/api/v2/pokemon/'

const fetchData = async () => {
    try {
        console.log(`${url}${'6'}`);
        const res = await fetch(`${url}${'6'}`);
        if (!res.ok) {
            console.log('Not found');
        }else{
            const data = await res.json();
            setPokemon(data);
        }
    } catch (error) {
        console.log(error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
})

const setPokemon = (pokemon) => {
    const lista = document.getElementById('contenidoPokemon');
    let itemImage = lista.getElementsByTagName("img")[1];
    itemImage.setAttribute("src", pokemon.sprites.other.dream_world.front_default);
    let pokemonName = lista.getElementsByTagName("span")[0];
    pokemonName.textContent = pokemon.name
    const infoPokemon = document.getElementById('infoPokemon')
    let idPokemon = infoPokemon.getElementsByTagName("span")[1];
    idPokemon.textContent = pokemon.id;
    let levelPokemon = infoPokemon.getElementsByTagName("span")[3];
    levelPokemon.textContent = pokemon.base_experience;
    let typePokemon = infoPokemon.getElementsByTagName("span")[5];
    typePokemon.textContent = pokemon.types[0].type.name;
    let abilityPokemon = infoPokemon.getElementsByTagName("span")[7];
    abilityPokemon.textContent = pokemon.abilities[0].ability.name;
    let heightPokemon = infoPokemon.getElementsByTagName("span")[9];
    heightPokemon.textContent = pokemon.height + 'M';
    let weightPokemon = infoPokemon.getElementsByTagName("span")[11];
    weightPokemon.textContent = pokemon.weight + 'Kg';
}

function withBorder(x) {
    x.style.border = `1px solid`;
    x.style.borderRadius = "25%";
    x.style.borderColor = 'peru'
}
function withoutBorder(x) {
    x.style.border = 'none';
}