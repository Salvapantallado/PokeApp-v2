const { Router } = require("express");
const { Type } = require("../db");
const router = Router();
const { getPokeTypes } = require("../Handlers/types");

router.get("/", getPokeTypes);

module.exports = router;
