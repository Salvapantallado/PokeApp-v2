const { Pokemon, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Pokemon model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    describe("attack", () => {
      it("throw error if integer datatype is completed with a string or viceversa", async () => {
        try {
          await Pokemon.create({
            name: "Metapod",
            attack: "I am a string",
          });
        } catch (err) {}
        const pokemon = await Pokemon.findOne({
          where: {
            name: "Metapod",
          },
        });
        expect(pokemon).to.equal(null);
      });
    });

    describe("Create a new Pokemon", () => {
      describe("new Pokemon", () => {
        it("should create a new Pokemon correctly", async () => {
          await Pokemon.create({ name: "Liwi", attack: 255 });
          const pokemon = await Pokemon.findOne({
            where: {
              name: "Liwi",
            },
          });
          expect(pokemon.name).to.equal("Liwi");
          expect(pokemon.attack).to.equal(255);
        });
      });
    });
  });
});
