const { Router } = require("express");
const { Pokemon } = require("../db");
const { finalPokes, idPokes, postPokemon } = require("../Handlers/pokemons");
const axios = require("axios");
const router = Router();
// guardar pokemones en la base de datos
router.get("/", finalPokes);
// let pokeName = await getPokeDetail(GET_BY_NAME, name);
// pokeName
//   ? res.status(200).send(pokeName)
//   : res.status(404).send("Pokemon not found");
//   try {
//     let fill = await Pokemon.findAll();
//     if (!fill) await Pokemon.bulkCreate(pokeTotal);
//   } catch (error) {
//     console.log(error);
//   }
//   if (name) {
//     try {
//       let pokeName = await Pokemon.findAll({
//         where: { name: { [Op.Like]: name } },
//       });
//       return res.status(200).json(pokeName);
//     } catch (error) {
//       console.log("VAMOOOOOO UN ERROR!");
//     }
//   } else {
//     try {
//       let pok = await Pokemon.findAll();
//       return res.status(200).json(pok);
//
//       // let pokeName = await getPokeDetail(GET_BY_NAME, name);
//
//       // pokeName
//       //   ? res.status(200).send(pokeName)
//       //   : res.status(404).send("Pokemon not found");
//     } catch (error) {
//       console.log("Maximum error");
//     }
//   }
// });

router.get("/:id", idPokes);
//   try {
//     let poke = await Pokemon.findByPk(id);
//     return res.json(poke);
//   } catch (error) {
//     console.log(error);
//   }

// if (id) {
//   let pokeId = await getPokeDetail(GET_BY_ID, id);
//   pokeId
//     ? res.status(200).send(pokeId)
//     : res.status(404).send("Pokemon not found");
// }
// });

// router.get("/name/:name", async (req, res) => {
//   const { name } = req.params;
//   try {
//     const Poke = await axios.get(`${POKEID_API_URL}${name}`);
//     res.status(200).send(Poke.data);
//   } catch (err) {
//     res.status(404).send("Pokemon Not found!");
//   }
// });

router.post("/", postPokemon);

module.exports = router;
