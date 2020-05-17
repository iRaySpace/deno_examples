console.log('Welcome to Deno 🦕');

// Let's get some Pokémon data
const pokemonFetch = await fetch('https://pokeapi.co/api/v2/pokemon')
const pokemonData = await pokemonFetch.json()
console.log(`There are a total of ${pokemonData.count} pokemons.`)
