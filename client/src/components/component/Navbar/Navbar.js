import React from "react";
import Pokeball from "./Pokeball.png";
import { Link } from "react-router-dom";
import Plink from "../../helpers/plink.mp3";

export function Navbar() {

  const playAudio = () => {
    new Audio(Plink).play();
  };

  return (
    <div className="Navbar">
        <div className="links">
          <Link
            to="/home"
            activeStyle={{
              fontWeight: "bold",
              color: "blue",
            }}
            onClick={playAudio}
          >
            Home
          </Link>
          <Link
            to="/home"
            activeStyle={{
              fontWeight: "bold",
              color: "blue",
            }}
            onClick={playAudio}
          >
             <img className="logo" src={Pokeball} alt="Logo" />
          </Link>
             

          <Link
            to="/newpoke"
            activeStyle={{
              fontWeight: "bold",
              color: "blue",
            }}
            onClick={playAudio}
          >
            Create Pokemon!
          </Link>

        </div>
    </div>
  );
}
