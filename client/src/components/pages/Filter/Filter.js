import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Filter.css";
import { typeFilter, dataFilter, orderFilter } from "../../../actions/index.js";
import Pokemon from "../../component/Pokemon/Pokemon.js";

export function Filter({ firstPostIndex, lastPostIndex }) {
  const dispatch = useDispatch();

  const filteredPokemon = useSelector((state) => state.filteredPokemon);
  const pokemonTypes = useSelector((state) => state.pokemonTypes);
  const pokemonList = useSelector((state) => state.pokemonList);
  const [pokeType, setPokeType] = useState(filteredPokemon);
  const [showFilter, setShowFilter] = useState(false);
  let currentFilter = useState([]);
  console.log(pokeType);

  currentFilter = filteredPokemon.slice(firstPostIndex, lastPostIndex);

  // function filter(e) {
  //   if(typeFilter(e.target.value, pokemonList)){
  //   dispatch(typeFilter(e.target.value, pokemonList))}
  //   return (
  //     <div><h1>no pokemon with that type!</h1></div>
  //   )
  // }

  const filter = (e) => {
    setPokeType(pokemonList);

    if (e === "all") {
      dispatch(typeFilter(e, pokemonList));
    }
    if (typeFilter(e, pokemonList)) {
      dispatch(typeFilter(e, pokemonList));
    }
  };

  function filterData(e) {
    dispatch(dataFilter(e.target.value, pokemonList));
  }

  function filterOrder(e) {
    dispatch(orderFilter(e.target.value, pokemonList));
  }

  return (
    <div>
      {showFilter ? (
        <div className="asc">
          <button onClick={() => setShowFilter(!showFilter)}>
            Show/Hide filters
          </button>

          <span>By type:</span>

          {/* <select className="type" name="type" onChange={filter}>
          <option value="null">All types</option>
          {pokemonTypes &&
            pokemonTypes.map((p, index) => (
              <option value={p.name} key={index} name="p.name">
                {p.name}
              </option>
            ))}
        </select> */}

          <div className="type-filter" name="type">
            <button onClick={() => filter("all")}>All types</button>
            {pokemonTypes &&
              pokemonTypes.map((p, index) => {
                return (
                  <button
                    className={`${p.name}`}
                    onClick={() => filter(p.name)}
                    key={index}
                  >
                    {p.name}
                  </button>
                );
              })}
          </div>

          <span>By database:</span>
          <select className="type" name="type" key="type" onChange={filterData}>
            <option value="null">All</option>
            <option value="api">Database Pokemons</option>
            <option value="db">Created Pokemons</option>
          </select>
          <span>Order by:</span>
          <select
            className="type"
            name="type"
            key="order"
            onChange={filterOrder}
          >
            <option value="null">No filter</option>
            <option value="az">A - Z</option>
            <option value="za">Z - A</option>
            <option value="attack+">Attack +</option>
            <option value="attack-">Attack -</option>
          </select>
          {/* <ul className="filter"> */}
          <div className="row center">
            {currentFilter.length > 0 &&
              currentFilter.map((pokemon) => (
                <Pokemon pokemon={pokemon} key={pokemon.id}></Pokemon>
              ))}
            {/* </ul> */}
          </div>
        </div>
      ) : (
        <div className="asc">
          <button onClick={() => setShowFilter(!showFilter)}>
            Show/Hide filters
          </button>
        </div>
      )}
    </div>
  );
}
