import "./pokeapi.css";

const template = () => `
    <section class="pokeapi">
        <h2>POKE API</h2>
    </section>
`;

//&recuperamos los datos de la api y los pusheamos
const getPokemons = async () => {
  let pokemonList = [];
  for (let i = 1; i < 152; i++) {
    try {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const pokemon = await data.json();
      pokemonList.push(pokemon);
    } catch (error) {
      console.log("No se ha podido hacer la petición");
    }
  }
  mapPokemons(getPokemons);
};

//&Mapeamos los pokemons  para poder sacar una lista con sus caracteristicas.
const mapPokemons = (list) => {
  const mappedPokemons = list.map((item) => ({
    name: pokemon.name,
    image: pokemon.sprites.other["official-artwork"].front_default,
    experience: pokemon.base_experience,
    height: pokemon.height,
    weight: pokemon.weight,
    ability: pokemon.abilities,
    type: pokemon.types,
    locationsEncounters: pokemon.location_area_encounters,
  }));
  printPokemon(mappedPokemons);
};

//&imprimimos la lista d pokemons y los almacenamos en un container
const printPokemon = (list) => {
  const container = document.querySelector(".pokeContainer");
  for (const item of list) {
    const template = `
    <img src=${item.image} alt =${item.name}/>`
    container.innerHTML += template
};
}

/* //&Hacemos un buscador por nombre.
export const filterByName = (value) => {
  const filteredPoke = allCharacters.filter((pokemon) =>
    pokemon.name.includes(value)
  );
  printPokemons(filteredPoke);
};
 */
export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
};
