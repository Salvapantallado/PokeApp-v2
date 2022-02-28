const { Pokemon, Type } = require("../db");
const axios = require("axios");
const { POKE_API_URL } = require("../../constants.js");
const { v4: uuidv4 } = require("uuid");

// const getAllPokes = async (req, res) => {
//   let type;
//   if (req.query.name) {
//     try {
//       let pokemon = await axios.get(`POKE_URL${req.query.name}`);
//       if (pokemon.data.types.length === 1) {
//         type = pokemon.data.types[0].type.name;
//       } else {
//         type =
//           pokemon.data.types[0].type.name +
//           " " +
//           pokemon.data.types[1].type.name;
//       }
//       var obj = {
//         name:
//           pokemon.data.name.charAt(0).toUpperCase() +
//           pokemon.data.name.slice(1),
//         id: pokemon.data.id,
//         image: pokemon.data.sprites.other.official - artwork.front_default,
//         types: type,
//         hp: pokemon.data.stats[0].base_stat,
//         attack: pokemon.data.stats[1].base_stat,
//         defense: pokemon.data.stats[2].base_stat,
//         speed: pokemon.data.stats[5].base_stat,
//         height: pokemon.data.height,
//         weight: pokemon.data.weight,
//       };
//     } catch (error) {
//       const dbpoke = await Pokemon.findOne({
//         where: {
//           name: req.query.name,
//         },
//         include: Type,
//       });
//       if (!dbpoke) {
//         return res.status(400).send({ message: "Pokemon doesn't exist" });
//       }
//       if (dbpoke.types.length === 1) {
//         type = dbpoke.types[0].type.name;
//       } else {
//         type = dbpoke.types[0].type.name + " " + dbpoke.types[1].type.name;
//       }
//       var finalPoke = {
//         name: dbpoke.name.charAt(0).toUpperCase() + dbpoke.name.slice(1),
//         id: dbpoke.id,
//         image:
//           "https://www.vhv.rs/dpng/d/424-4249607_poke-ball-png-pokeball-png-transparent-png.png",
//         types: type,
//         hp: dbpoke.stats[0].base_stat,
//         attack: dbpoke.stats[1].base_stat,
//         defense: dbpoke.stats[2].base_stat,
//         speed: dbpoke.stats[5].base_stat,
//         height: dbpoke.height,
//         weight: dbpoke.weight,
//       };
//       return res.send(finalPoke);
//     }
//     return res.send(obj);
//   } else {
//     try {
//       const pokeUrl = await axios.get(POKE_API_URL); //requiere primeros 20 resultados
//       const pokeUrlNext = await axios.get(pokeUrl.data.next); //requiere los proximos 20 resultados
//       const resultPokemon = pokeUrl.data.results.concat(
//         pokeUrlNext.data.results
//       );
//       const pokemons = await Promise.all(
//         resultPokemon.map(async (pokemon) => {
//           const poke = await axios.get(pokemon.url);
//           if (poke.data.types.length === 1) {
//             type = poke.data.types[0].type.name;
//           } else {
//             type =
//               poke.data.types[0].type.name + " " + poke.data.types[1].type.name;
//           }
//           return {
//             name:
//               poke.data.name.charAt(0).toUpperCase() + poke.data.name.slice(1),
//             image: poke.data.sprites.other.official - artwork.front_default,
//             id: poke.data.id,
//             types: type,
//           };
//         })
//       );
//       const pokedb = await Pokemon.findAll({
//         include: {
//           attributes: ["name"],
//           model: Type,
//           through: { attributes: [] },
//         },
//       });
//       const pokedbmap = pokedb.reverse().map((result) => {
//         if (result.types.length === 1) {
//           type = result.types[0].name;
//         } else {
//           type = result.types[0].name + " " + result.types[1].name;
//         }
//         return {
//           name: result.name.charAt(0).toUpperCase() + result.name.slice(1),
//           image:
//             "https://www.vhv.rs/dpng/d/424-4249607_poke-ball-png-pokeball-png-transparent-png.png",
//           id: result.id,
//           types: type,
//         };
//       });
//       var result = pokedbmap.concat(pokemons);
//     } catch (error) {
//       return res.status(400).send("Fatalito error");
//     }
//   }
//   return res.status(200).send(result);
// };
//
// async function getPokemonByID(req, res) {
//   let type;
//   if (req.params.idPokemon.length > 20) {
//     try {
//       var pokedb = await Pokemon.findOne({
//         where: {
//           id: req.params.idPokemon,
//         },
//         include: Type,
//       });
//       if (pokedb.types.length === 1) {
//         type = pokedb.types[0].name;
//       } else {
//         type = pokedb.types[0].name + " / " + pokedb.types[1].name;
//       }
//       var finalPoke = {
//         name: pokedb.name.charAt(0).toUpperCase() + pokedb.name.slice(1),
//         id: pokedb.id,
//         image:
//           "https://www.vhv.rs/dpng/d/424-4249607_poke-ball-png-pokeball-png-transparent-png.png",
//         types: type,
//         hp: pokedb.stats[0].base_stat,
//         attack: pokedb.stats[1].base_stat,
//         defense: pokedb.stats[2].base_stat,
//         speed: pokedb.stats[5].base_stat,
//         height: pokedb.height,
//         weight: pokedb.weight,
//       };
//     } catch (error) {
//       console.log(finalPoke);
//       return res.status(404).send({ message: "Bad request" });
//     }
//     return res.send(finalPoke);
//   } else {
//     try {
//       let pokepo = await axios.get(
//         `https://pokeapi.co/api/v2/pokemon/${req.params.idPokemon}`
//       );
//       if (pokepo.data.types.length === 1) {
//         type = pokepo.data.types[0].name;
//       } else {
//         type = pokepo.data.types[0].name + " / " + pokepo.data.types[1].name;
//       }
//       console.log(type);
//       var obj = {
//         name:
//           pokepo.data.name.charAt(0).toUpperCase() + pokepo.data.name.slice(1),
//         id: pokepo.data.id,
//         image: pokepo.data.sprites.other.official - artwork.front_default,
//         types: type,
//         hp: pokepo.data.stats[0].base_stat,
//         attack: pokepo.data.stats[1].base_stat,
//         defense: pokepo.data.stats[2].base_stat,
//         speed: pokepo.data.stats[5].base_stat,
//         height: pokepo.data.height,
//         weight: pokepo.data.weight,
//       };
//     } catch (error) {
//       return res.status(404).send({ message: "Bad request" });
//     }
//     return res.send(obj);
//   }
// }
const getApiPokes = async () => {
  try {
    let pokeUrl = await axios.get(POKE_API_URL); //requiere primeros 20 resultados
    let pokeUrlNext = await axios.get(pokeUrl.data.next); //requiere los proximos 20 resultados
    let resultPokemon = pokeUrl.data.results.concat(pokeUrlNext.data.results);
    const pokemons = await Promise.all(
      resultPokemon.map(async (pokemon) => {
        const poke = await axios.get(pokemon.url);
        const data = poke.data;

        // if (data.types.length === 1) {
        //   type = data.types[0].type.name;
        // } else {
        //   type = data.types[0].type.name + " / " + data.types[1].type.name;
        // }

        return {
          id: data.id,
          name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
          image: data.sprites.front_default,
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
   // const pokemonApi = await getApiPokes();
   // const pokemonApp = await getAppPokes();
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

//
// const getPokeDetail = async (searchBy, value) => {
//   const resultPoke = await getAllPokes();
//
//   switch (searchBy) {
//     case GET_BY_NAME:
//       return resultPoke.filter((el) => el.name === value);
//
//     case GET_BY_ID:
//       return resultPoke.filter((el) => el.id.toString() === value);
//
//     default:
//       return resultPoke;
//   }
// };

// const getpokemonsdb = async () => {
//   let name = req.query;
//   try {
//     const bd = await Pokemon.findOne({ where: { name: name }, include: Type });
//   if(bd) {
//     const pokem = {
//     name:name,
//   id:id}
//   }
// }
// }
// };

module.exports = {
  finalPokes,
  idPokes,
  postPokemon,
};
