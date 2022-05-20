import React from "react";
import Pokeball from "./Pokeball.png";
import { Link } from "react-router-dom";
import Plink from "../../helpers/plink.mp3";
import "./Navbar.css"

export function Navbar() {
  const playAudio = () => {
    new Audio(Plink).play();
  };

  return (
    <div className="Navbar">
      <div className="links">
        <Link
          to="/home"
          onClick={playAudio}
        >
          Home
        </Link>
        <Link
          to="/home"
          onClick={playAudio}
        >
          <img className="logo" src={Pokeball} alt="Logo" />
        </Link>

        <Link
          to="/newpoke"
          onClick={playAudio}
        >
          Create Pokemon!
        </Link>
      </div>
    </div>
  );
}
