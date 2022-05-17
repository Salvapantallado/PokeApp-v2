import "./Home.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../../actions";
import Pokemon from "../../component/Pokemon/Pokemon";
import { Filter } from "../Filter/Filter";
import Pagination from "../Pagination/pagination";

export function Home() {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.pokemonList);
  const filteredArray = useSelector((state) => state.filteredPokemon);
  console.log(filteredArray);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(12);
  let [currentPokemons] = useState([]);
  const [searchedPokemons, setSearchedPokemons] = useState("");
  let [pokeSearch] = useState([]);
  let pageNumber = 0;
  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  console.log(pokemonList);

  const lastPostIndex = currentPage * pokemonsPerPage;
    const firstPostIndex = lastPostIndex - pokemonsPerPage;
    currentPokemons = pokemonList.slice(firstPostIndex, lastPostIndex);

    if(filteredArray.length === 0){
      pageNumber = Math.ceil(pokemonList.length / pokemonsPerPage);
    }
    if(filteredArray.length > 0){
      pageNumber = Math.ceil(filteredArray.length / pokemonsPerPage);
    }

    console.log(pageNumber);

  const searchFilter = pokemonList.filter((val) => {
    if (searchedPokemons === "" || searchedPokemons.length === 0) {
      return currentPokemons;
    }
    if (val.name.toLowerCase().includes(searchedPokemons.toLowerCase())) {
      return val;
    }
    return null;
  });

  const lastPostIndex2 = currentPage * pokemonsPerPage;
  const firstPostIndex2 = lastPostIndex - pokemonsPerPage;
  pokeSearch = searchFilter.slice(firstPostIndex2, lastPostIndex2);

  console.log(searchedPokemons);
  
  

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
          <div className="search-filter">
            <input
              type="text"
              placeholder="Search pokemon..."
              onChange={(e) => setSearchedPokemons(e.target.value)}
            />
            <Filter firstPostIndex={firstPostIndex} lastPostIndex={lastPostIndex}/>

          </div>
          <div className="row center">
            {searchFilter.length === 0 || searchFilter.length === null || filteredArray.length > 0 ? (
              null
            ) : (
              pokeSearch.map((pokemon) => {
                return <Pokemon pokemon={pokemon} key={pokemon.id}></Pokemon>;
              })
            )}
          </div>
          <Pagination
            pageNumber={pageNumber}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
    );
  }
}

export default Home;
