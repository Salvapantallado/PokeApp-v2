const { Router } = require("express");
const router = Router();
const PokeRouter = require("./pokes");
const TypeRouter = require("./types");

router.use("/pokemons", PokeRouter);
router.use("/types", TypeRouter);

module.exports = router;
