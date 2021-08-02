import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Filter.css";
import { typeFilter, dataFilter, orderFilter } from "../../../actions/index.js";
import Pokemon from "../../component/Pokemon/Pokemon.js";
import { Link } from "react-router-dom";

export function Filter() {
  const dispatch = useDispatch();

  const filteredPokemon = useSelector((state) => state.filteredPokemon);
  const pokemonTypes = useSelector((state) => state.pokemonTypes);
  const pokemonList = useSelector((state) => state.pokemonList);

  function filter(e) {
    dispatch(typeFilter(e.target.value, pokemonList));
  }

  function filterData(e) {
    dispatch(dataFilter(e.target.value, pokemonList));
  }

  function filterOrder(e) {
    dispatch(orderFilter(e.target.value, pokemonList));
  }

  return (
    <div>
      <div className="asc">
        <span>By type:</span>
        <select className="type" name="type" onChange={filter}>
          <option value="null">null</option>
          <option value="all">All</option>
          {pokemonTypes &&
            pokemonTypes.map((p, index) => (
              <option value={p.name} key={index} name="p.name">
                {p.name}
              </option>
            ))}
        </select>
        <span>By database:</span>
        <select className="type" name="type" key="type" onChange={filterData}>
          <option value="null">null</option>
          <option value="all">All</option>
          <option value="api">Database Pokemons</option>
          <option value="db">Created Pokemons</option>
        </select>
        <span>Order by:</span>
        <select className="type" name="type" key="order" onChange={filterOrder}>
          <option value="null">null</option>
          <option value="az">A - Z</option>
          <option value="za">Z - A</option>
          <option value="attack+">Attack +</option>
          <option value="attack-">Attack -</option>
        </select>
      </div>
      <ul className="filter">
        {filteredPokemon &&
          filteredPokemon.map((pokemon, index) => (
            <Link
              to={`/details/${pokemon.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Pokemon key={index} pokemon={pokemon}></Pokemon>
            </Link>
          ))}
      </ul>
    </div>
  );
}
