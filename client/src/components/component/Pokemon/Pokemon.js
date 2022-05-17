import React from "react";
import { Link } from "react-router-dom";
import { colores } from "../../helpers/helper";
import "./Pokemon.css";
import Plink from "../../helpers/plink.mp3";

export default function Pokemon(props) {
  const { pokemon } = props;

  function ColorMatch() {
    if (pokemon.types.length > 1) {
      let arr = [];
      let eks = colores.find((col) => col.name === pokemon.types[0].name);
      let eks2 = colores.find((col) => col.name === pokemon.types[1].name);
      arr.push(eks.color, eks2.color);
      return arr;
    }
    let arr = [];
    let eks = colores.find((col) => col.name === pokemon.types[0].name);
    arr.push(eks.color);
    return arr;
  }

  function IconMatch() {
    if (pokemon.types.length > 1) {
      let arr = [];
      let eks = colores.find((col) => col.name === pokemon.types[0].name);
      let eks2 = colores.find((col) => col.name === pokemon.types[1].name);
      arr.push(eks.icon, eks2.icon);
      return arr;
    }
    let arr = [];
    let eks = colores.find((col) => col.name === pokemon.types[0].name);
    arr.push(eks.icon);
    return arr;
  }

  const playAudio = () => {
    new Audio(Plink).play();
  };

  return (
    <div className="row center">
      {pokemon.types.length > 1 ? (
        <Link
          to={`/details/${pokemon.id}`}
          style={{ textDecoration: "none", color: "black" }}
          onClick={playAudio}
        >
          <div
            className="card"
            style={{
              background: `linear-gradient(45deg, ${ColorMatch()[0]} 0%, ${
                ColorMatch()[1]
              } 100%)`,
            }}
          >
            <img className="img" src={pokemon.image} alt={pokemon.name} />
            <div className="card-body">
              <h2>{pokemon.name}</h2>
              <h4>{pokemon.types.map((x) => x.name).toString()}</h4>
              <div className="pokeIcons">
                <img src={IconMatch()[0]} alt="pokeicon" />
                <img src={IconMatch()[1]} alt="pokeicon2" />
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <Link
          to={`/details/${pokemon.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="card" style={{ background: `${ColorMatch()}` }}>
            <img className="img" src={pokemon.image} alt={pokemon.name} />
            <div className="card-body">
              <h2>{pokemon.name}</h2>
              <h4>{pokemon.types.map((x) => x.name).toString()}</h4>

              <div className="pokeIcons">
                <img src={IconMatch()} alt="pokeicon" />
              </div>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}
