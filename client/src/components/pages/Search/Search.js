import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPokemonByName } from "../../../actions";

import { Link } from "react-router-dom";
import Pokemon from "../../component/Pokemon/Pokemon.js";
import pokerror from "./pokerror.png";
import "./Search.css";

export function Search() {
  const dispatch = useDispatch();
  const [searchname, setSearchname] = useState();
  const searchedPokemon = useSelector((state) => state.searchedPokemon);

  useEffect(() => {
    dispatch(getPokemonByName(searchedPokemon));
  }, [dispatch, searchedPokemon]);

  if (searchedPokemon === null) {
    return (
      <div>
        <h1>There has been an error!</h1>
        <img src={pokerror} alt="There has been an error!" />
      </div>
    );
  } else if (searchedPokemon === undefined) {
    return (
      <div>
        <h1>LOADING...</h1>
        <img
          src="https://24.media.tumblr.com/84238217d8fe579d2bb679feefb58cbb/tumblr_mote56FsYk1rg3fuxo1_400.gif"
          alt="Loading"
        />
      </div>
    );
  } else {
    return (
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setSearchname(e.target.value);
          }}
        />
        <div className="row center">
          {searchedPokemon
            .filter((val) => {
              if (searchname === "" || searchname === undefined) {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchname.toLowerCase())
              )
                return val;
            })
            .map((pokemon, index) => {
              return (
                <Link
                  to={`/details/${pokemon.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Pokemon key={index} pokemon={pokemon}></Pokemon>
                </Link>
              );
            })}
        </div>
      </div>
    );
  }
}
