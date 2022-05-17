require("dotenv").config();

const POKE_API_URL = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";
const POKETYPE_API_URL = "https://pokeapi.co/api/v2/type?limit=18";

//ACTION constants

module.exports = {
  POKE_API_URL,
  POKETYPE_API_URL,
};
