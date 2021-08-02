import React from "react";
import "./Navbar.css";
import Pokeball from "./Pokeball.png";
import { NavLink } from "react-router-dom";

export function SearchNav() {
  return (
    <div className="Navbar">
      <div className="leftSide">
        <img className="logo" src={Pokeball} alt="pokelogo" />
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
            to="/newPoke"
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
        </div>
      </div>
    </div>
  );
}
