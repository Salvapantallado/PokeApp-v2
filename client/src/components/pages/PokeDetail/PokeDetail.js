import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPokemonByID, clearPokeDetail } from "../../../actions/index.js";
import "./PokeDetail.css";
import pokerror from "../Search/pokerror.png";

export function PokeDetail() {
  const dispatch = useDispatch();
  const pokemonDetail = useSelector((state) => state.pokemonDetail);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPokemonByID(id));
    return () => {
      dispatch(clearPokeDetail());
    };
  }, [dispatch, id]);

  if (pokemonDetail === null) {
    return (
      <div className="notFound">
        <h1>There has been an error!</h1>
        <img src={pokerror} alt="There has been an error!" />
      </div>
    );
  } else if (pokemonDetail === undefined || pokemonDetail.length < 1) {
    return (
      <div className="loading">
        <h1>LOADING...</h1>
        <img
          src="https://24.media.tumblr.com/84238217d8fe579d2bb679feefb58cbb/tumblr_mote56FsYk1rg3fuxo1_400.gif"
          alt="Loading"
        />
      </div>
    );
  } else {
    console.log(pokemonDetail);
    return (
      <div className="pokedetail">
        <div key={pokemonDetail.id} className="Card">
          <img
            className="large"
            src={
              pokemonDetail[0].image
                ? pokemonDetail[0].image
                : "https://www.kindpng.com/picc/m/107-1075263_transparent-pokeball-png-pokemon-ball-2d-png-download.png"
            }
            alt={pokemonDetail[0].name}
          />
          <div className="body-card">
            <h2>{`Name: ${pokemonDetail[0].name}`}</h2>
            <h4>{`ID: ${pokemonDetail[0].id}`}</h4>
            <h4>{`HP: ${pokemonDetail[0].hp}`}</h4>
            <h4>{`Attack: ${pokemonDetail[0].attack}`}</h4>
            <h4>{`Defense: ${pokemonDetail[0].defense}`}</h4>
            <h4>{`Speed: ${pokemonDetail[0].speed}`}</h4>
            <h4>{`Types: ${pokemonDetail[0].types
              .map((x) => x.name)
              .toString()}`}</h4>
            <h4>{`Height: ${pokemonDetail[0].height}`}</h4>
            <h4>{`Weight: ${pokemonDetail[0].weight}`}</h4>
          </div>
        </div>
      </div>
    );
  }
}
