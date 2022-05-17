const { Pokemon, Type } = require("../db");
const axios = require("axios");
const { POKE_API_URL } = require("../../constants.js");
const { v4: uuidv4 } = require("uuid");

const getApiPokes = async () => {
  try {
    // let pokeUrl = await axios.get(POKE_API_URL); //requiere primeros 20 resultados
    // let pokeUrlNext = await axios.get(pokeUrl.data.next); //requiere los proximos 20 resultados
    // let resultPokemon = pokeUrl.data.results.concat(pokeUrlNext.data.results);
    let pokeUrl = await axios.get(POKE_API_URL);
    let resultPokemon = pokeUrl.data.results;
    const pokemons = await Promise.all(
      resultPokemon.map(async (pokemon) => {
        const poke = await axios.get(pokemon.url);
        const data = poke.data;

        return {
          id: data.id,
          name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${data.id}.gif`,
          backimage: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/${data.id}.gif`,
          types: data.types.map((x) => {
            return { name: x.type.name };
          }),
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          speed: data.stats[5].base_stat,
          height: data.height,
          weight: data.weight,
        };
      })
    );
    return pokemons;
  } catch (error) {
    console.log(error);
  }
};

const getAppPokes = async () => {
  try {
    return await Pokemon.findAll({
      include: {
        model: Type,
        attributes: ["name"],
        as: "types",
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllPokes = async () => {
  try {
    const [pokemonApi, pokemonApp] = await Promise.all([getApiPokes(),
    getAppPokes()
    ]);
    const totalPokemons = await pokemonApi.concat(pokemonApp);
    return totalPokemons;
  } catch (error) {
    console.log(error);
  }
};

const finalPokes = async (req, res) => {
  const { name } = req.query;
  try {
    const pokeTotal = await getAllPokes();
    if (name) {
      let pokeName = await pokeTotal.filter((p) => p.name === name);
      if (pokeName.length == 0) {
        return res.status(404).send("Hubo un errorcito");
      } else {
        return res.status(200).send(pokeName);
      }
    }
    res.status(200).send(pokeTotal);
  } catch (error) {
    console.log(error);
  }
};

const idPokes = async (req, res) => {
  const { id } = req.params;
  try {
    const pokeTotal = await getAllPokes();
    if (id) {
      let pokeId = await pokeTotal.filter((poko) => poko.id.toString() === id);
      if (pokeId.length == 0) {
        return res.status(404).send("Hubo un errorcito");
      } else {
        return res.status(200).send(pokeId);
      }
    }
    res.status(200).send(pokeTotal);
  } catch (error) {
    console.log(error);
  }
};

const postPokemon = async (req, res) => {
  const id = uuidv4();
  const { name, types, hp, attack, defense, speed, height, weight } = req.body;
  try {
    if (!name || !types) res.status(400).send("Name and types are required!");

    const newPokemon = await Pokemon.findOrCreate({
      where: {
        id,
        name,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        image:
          "https://www.kindpng.com/picc/m/107-1075263_transparent-pokeball-png-pokemon-ball-2d-png-download.png",
          backimage: "https://www.kindpng.com/picc/m/107-1075263_transparent-pokeball-png-pokemon-ball-2d-png-download.png"
        },
    });
    const typesPoke = await Type.findAll({
      where: { name: types },
      default: { name: types },
    });
    await newPokemon[0].setTypes(typesPoke);

    return res.status(200).send(newPokemon[0]);
  } catch (err) {
    return { result: "Error, verify the logged info!" };
  }
};

module.exports = {
  finalPokes,
  idPokes,
  postPokemon,
};
