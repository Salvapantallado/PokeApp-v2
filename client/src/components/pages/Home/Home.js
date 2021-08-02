import "./Home.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../../actions";
import Pokemon from "../../component/Pokemon/Pokemon";
import { Link } from "react-router-dom";

export function Home() {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.pokemonList);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(12);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  console.log(pokemonList);

  const lastPostIndex = currentPage * pokemonsPerPage;
  const firstPostIndex = lastPostIndex - pokemonsPerPage;
  const currentPokemons = pokemonList.slice(firstPostIndex, lastPostIndex);

  const pageNumber = Math.ceil(pokemonList.length / pokemonsPerPage);

  const nextPage = () => {
    if (currentPage < pageNumber) setCurrentPage(currentPage + 1);
    else setCurrentPage(1);
  };

  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
    else setCurrentPage(pageNumber);
  };

  if (pokemonList.length < 12) {
    return (
      <div className="loading">
        <h1>LOADING...</h1>
        <img
          src="https://24.media.tumblr.com/84238217d8fe579d2bb679feefb58cbb/tumblr_mote56FsYk1rg3fuxo1_400.gif"
          alt="pokemon img"
        />
      </div>
    );
  } else {
    return (
      <div className="home">
        <div className="row center">
          {currentPokemons.map((pokemon) => (
            <Link
              to={`/details/${pokemon.id}`}
              key={pokemon.id}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Pokemon pokemon={pokemon}></Pokemon>
            </Link>
          ))}
        </div>
        <div className="row center">
          <button
            onClick={() => {
              prevPage();
            }}
          >
            Previous
          </button>
          <button
            onClick={() => {
              nextPage();
            }}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
