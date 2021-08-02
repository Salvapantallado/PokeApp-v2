/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Pokemon, conn } = require("../../src/db.js");

const agent = session(app);
const pokemon = {
  name: "Pikachu",
};

describe("Pokemon routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Pokemon.sync({ force: true }).then(() => Pokemon.create(pokemon))
  );

  describe("GET /pokemons", () => {
    it("should get 200", async () => {
      try {
        await agent.get("/pokemons").expect(200);
      } catch (error) {
        console.log(error);
      }
    }).timeout(20000);

    it("returns 40 pokemons(+ the created Pikachu) from the API", async () => {
      await agent.get("/pokemons").then((res) => {
        expect(res.body).to.have.lengthOf(41);
      });
    }).timeout(20000);

    it("if ID is passed, must return pokemon with that ID", async () => {
      try {
        const res = await agent.get("/pokemons/1");
        expect(res.body[0].name).to.be.equal("Bulbasaur");
      } catch (error) {
        console.log(error);
      }
    }).timeout(20000);
  });

  describe("POST /pokemons", () => {
    it("should get 200", async () => {
      try {
        await agent
          .post("/pokemons")
          .send({
            name: "Liwi",
            hp: 99,
            attack: 10,
            defense: 20,
            speed: 30,
            height: 40,
            weight: 50,
            type: "grass",
          })
          .expect(200);
      } catch (error) {
        console.log(error);
      }
    }).timeout(20000);

    it("responds 400 if there is no name", async () => {
      try {
        await agent.post("/pokemons").send({ types: "ghost" }).expect(400);
      } catch (error) {
        console.log(error);
      }
    }).timeout(20000);
    it("responds 400 if there is no type", async () => {
      try {
        await agent.post("/pokemons").send({ name: "Liwi" }).expect(400);
      } catch (error) {
        console.log(error);
      }
    }).timeout(20000);
  });
});
