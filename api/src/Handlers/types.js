const { Type } = require("../db");
const axios = require("axios");

async function getPokeTypes(req, res) {
  const poki = await Type.findAll();
  try {
    poki ? res.status(200).send(poki) : res.status(400).send("Error epicardo");
  } catch (error) {
    console.log("errorrrrrrrrr");
  }
}

module.exports = {
  getPokeTypes,
};
