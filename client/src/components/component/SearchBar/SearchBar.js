import React, { useState } from "react";
import "./SearchBar.css";
import { getPokemonByName } from "../../../actions/index.js";
import { useSelector, useDispatch } from "react-redux";

export default function SearchBar() {
  const dispatch = useDispatch();
  const searchedPokemon = useSelector((state) => state.searchedPokemon);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search !== "") {
      dispatch(getPokemonByName(search));
      setSearch("");
    }
  };
  console.log(searchedPokemon);

  return (
    <div>
      <form>
        <div className="rightside">
          <input
            type="text"
            value={search}
            placeholder="Find your pokemon"
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Search...</button>
        </div>
      </form>
    </div>
  );
}
