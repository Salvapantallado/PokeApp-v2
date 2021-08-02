import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPokemonByName } from "../../../actions";
import Pokeball from "./Pokeball.png";
import { NavLink } from "react-router-dom";

export function Navbar() {
  const dispatch = useDispatch();
  const [searchname, setSearchname] = useState("");

  useEffect(() => {
    dispatch(getPokemonByName(searchname));
  }, [dispatch, searchname]);

  return (
    <div className="Navbar">
      <div className="leftSide">
        <img className="logo" src={Pokeball} alt="Logo" />
        <div className="links">
          <NavLink
            to="/home"
            activeStyle={{
              fontWeight: "bold",
              color: "blue",
            }}
          >
            Home
          </NavLink>

          <NavLink
            to="/newpoke"
            activeStyle={{
              fontWeight: "bold",
              color: "blue",
            }}
          >
            Create Pokemon!
          </NavLink>

          <NavLink
            to="/home/filter"
            activeStyle={{
              fontWeight: "bold",
              color: "blue",
            }}
          >
            Filter
          </NavLink>

          <NavLink
            to="/search"
            activeStyle={{
              fontWeight: "bold",
              color: "blue",
            }}
          >
            Search
          </NavLink>
        </div>
      </div>
    </div>
  );
}
