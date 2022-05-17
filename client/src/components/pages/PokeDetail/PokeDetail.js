import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPokemonByID, clearPokeDetail } from "../../../actions/index.js";
import "./PokeDetail.css";
import "../Home/Home.css";
import pokerror from "../Search/pokerror.png";
import goBack from "../../helpers/goBack.png";
import { colores } from "../../helpers/helper.jsx";
import { useHistory } from "react-router-dom";
import Bump from "../../helpers/Bump.mp3";

export function PokeDetail() {
  const dispatch = useDispatch();
  const pokemonDetail = useSelector((state) => state.pokemonDetail);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    dispatch(getPokemonByID(id));
    return () => {
      dispatch(clearPokeDetail());
    };
  }, [dispatch, id]);

  function ColorMatch() {
    if (pokemonDetail[0].types.length > 1) {
      let arr = [];
      let eks = colores.find(
        (col) => col.name === pokemonDetail[0].types[0].name
      );
      let eks2 = colores.find(
        (col) => col.name === pokemonDetail[0].types[1].name
      );
      arr.push(eks.color, eks2.color);
      return arr;
    }
    let arr = [];
    let eks = colores.find(
      (col) => col.name === pokemonDetail[0].types[0].name
    );
    arr.push(eks.color);
    return arr;
  }

  function IconMatch() {
    if (pokemonDetail[0].types.length > 1) {
      let arr = [];
      let eks = colores.find(
        (col) => col.name === pokemonDetail[0].types[0].name
      );
      let eks2 = colores.find(
        (col) => col.name === pokemonDetail[0].types[1].name
      );
      arr.push(eks.icon, eks2.icon);
      return arr;
    }
    let arr = [];
    let eks = colores.find(
      (col) => col.name === pokemonDetail[0].types[0].name
    );
    arr.push(eks.icon);
    return arr;
  }

  const nav = (path) => {
    new Audio(Bump).play();
    history.push(path);
  };

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
      <div className="home">
        <div className="pokedetail">
          {pokemonDetail[0].types.length > 1 ? (
            <div
              key={pokemonDetail.id}
              className="Card"
              style={{
                background: `linear-gradient(45deg, ${ColorMatch()[0]} 0%, ${
                  ColorMatch()[1]
                } 100%)`,
              }}
            >
              <div className="return">
                <button onClick={() => nav("/home")}>
                  <img src={goBack} alt="return" />
                </button>
              </div>
              <div className="body-card">
                <div className="halves">
                  <div className="half-1">
                    <img
                      className="large"
                      src={
                        pokemonDetail[0].image
                          ? pokemonDetail[0].image
                          : "https://www.kindpng.com/picc/m/107-1075263_transparent-pokeball-png-pokemon-ball-2d-png-download.png"
                      }
                      alt={pokemonDetail[0].name}
                    />
                    <ul>
                      <li>
                        <h4>{`#${pokemonDetail[0].id} ${pokemonDetail[0].name}`}</h4>
                      </li>
                      <li>
                        <h4>{`HP: ${pokemonDetail[0].hp}`}</h4>
                      </li>
                      <li>
                        <h4>{`Attack: ${pokemonDetail[0].attack}`}</h4>
                      </li>
                      <li>
                        <h4>{`Defense: ${pokemonDetail[0].defense}`}</h4>
                      </li>
                    </ul>
                  </div>

                  <div className="half-2">
                    <img
                      className="large"
                      src={
                        pokemonDetail[0].backimage
                          ? pokemonDetail[0].backimage
                          : null
                      }
                      alt={pokemonDetail[0].name}
                    />
                    <ul>
                      <li>
                        <h4>{`Speed: ${pokemonDetail[0].speed}`}</h4>
                      </li>
                      <li>
                        <h4>{`Height: ${pokemonDetail[0].height}`}</h4>
                      </li>
                      <li>
                        <h4>{`Weight: ${pokemonDetail[0].weight}`}</h4>
                      </li>
                      <li>
                        <h4>{`Types: ${pokemonDetail[0].types
                          .map((x) => x.name)
                          .toString()}`}</h4>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pokeIcons">
                  <img src={IconMatch()[0]} alt="pokeicon" />
                  <img src={IconMatch()[1]} alt="pokeicon2" />
                </div>
              </div>
            </div>
          ) : (
            <div
              key={pokemonDetail.id}
              className="Card"
              style={{ background: `${ColorMatch()}` }}
            >
              <div className="return">
                <button onClick={() => nav("/home")}>
                  <img src={goBack} alt="return" />
                </button>
              </div>
              <div className="body-card">
                <div className="halves">
                  <div className="half-1">
                    <img
                      className="large"
                      src={
                        pokemonDetail[0].image
                          ? pokemonDetail[0].image
                          : "https://www.kindpng.com/picc/m/107-1075263_transparent-pokeball-png-pokemon-ball-2d-png-download.png"
                      }
                      alt={pokemonDetail[0].name}
                    />
                    <ul>
                      <li>
                        <h4>{`#${pokemonDetail[0].id} ${pokemonDetail[0].name}`}</h4>
                      </li>
                      <li>
                        <h4>{`HP: ${pokemonDetail[0].hp}`}</h4>
                      </li>
                      <li>
                        <h4>{`Attack: ${pokemonDetail[0].attack}`}</h4>
                      </li>
                      <li>
                        <h4>{`Defense: ${pokemonDetail[0].defense}`}</h4>
                      </li>
                    </ul>
                  </div>

                  <div className="half-2">
                    {pokemonDetail[0].backimage ? (
                      <img
                        className="large"
                        src={pokemonDetail[0].backimage}
                        alt={pokemonDetail[0].name}
                      />
                    ) : (
                      <img
                        className="large"
                        src={pokemonDetail[0].image}
                        alt={pokemonDetail[0].name}
                      />
                    )}

                    <ul>
                      <li>
                        <h4>{`Speed: ${pokemonDetail[0].speed}`}</h4>
                      </li>
                      <li>
                        <h4>{`Height: ${pokemonDetail[0].height}`}</h4>
                      </li>
                      <li>
                        <h4>{`Weight: ${pokemonDetail[0].weight}`}</h4>
                      </li>
                      <li>
                        <h4>{`Types: ${pokemonDetail[0].types
                          .map((x) => x.name)
                          .toString()}`}</h4>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pokeIcons">
                  <img src={IconMatch()} alt="pokeicon" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
