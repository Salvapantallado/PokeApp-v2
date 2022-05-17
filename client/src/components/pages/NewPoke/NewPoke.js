import React from "react";
import "./NewPoke.css";
import { validation } from "./validation.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { createPokemon } from "../../../actions";
import goBack from "../../helpers/goBack.png";
import { useHistory } from "react-router-dom";
import Bump from "../../helpers/Bump.mp3";

export function NewPoke() {
  const dispatch = useDispatch();
  const pokemonTypes = useSelector((state) => state.pokemonTypes);
  const history = useHistory();

  const nav = (path) => {
    new Audio(Bump).play();
    history.push(path);
  };

  const [input, setInput] = React.useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: "",
  });

  const [errors, setErrors] = React.useState({});

  const [Types, setTypes] = React.useState([]);

  /*eslint-disable*/
  useEffect(() => {
    setInput({ ...input, types: Types });
  }, [Types]);

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
      types: [{ name: input.types }],
    });
    setErrors(
      validation({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleTypes = (e) => {
    if (Types.length < 2) {
      if (!Types.includes(e.target.value)) {
        setTypes([...Types, e.target.value]);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      alert("Pokemon created!");
      dispatch(createPokemon(input));
      console.log(input);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="home">
      <div className="form">
        <div className="return">
          <button onClick={() => nav("/home")}>
            <img src={goBack} alt="return" />
          </button>
        </div>
        <form className="table" onSubmit={handleSubmit}>
          <div>
            <label>Pokemon name:</label>
            <input
              className={errors.name && "danger"}
              type="text"
              name="name"
              onChange={handleInputChange}
              value={input.name}
            />
            {errors.name && <p className="danger">{errors.name}</p>}

            <div>
              <label>HP:</label>
              <input
                className={errors.hp && "danger"}
                type="number"
                name="hp"
                onChange={handleInputChange}
                value={input.hp}
              />
              {errors.hp && <p className="danger">{errors.hp}</p>}

              <div>
                <label>Attack:</label>
                <input
                  className={errors.attack && "danger"}
                  type="number"
                  name="attack"
                  onChange={handleInputChange}
                  value={input.attack}
                />
                {errors.attack && <p className="danger">{errors.attack}</p>}

                <div>
                  <label>Defense:</label>
                  <input
                    className={errors.defense && "danger"}
                    type="number"
                    name="defense"
                    onChange={handleInputChange}
                    value={input.defense}
                  />
                  {errors.defense && <p className="danger">{errors.defense}</p>}

                  <div>
                    <label>Speed:</label>
                    <input
                      className={errors.speed && "danger"}
                      type="number"
                      name="speed"
                      onChange={handleInputChange}
                      value={input.speed}
                    />
                    {errors.speed && <p className="danger">{errors.speed}</p>}

                    <div>
                      <label>Height:</label>
                      <input
                        className={errors.height && "danger"}
                        type="number"
                        name="height"
                        onChange={handleInputChange}
                        value={input.height}
                      />
                      {errors.height && (
                        <p className="danger">{errors.height}</p>
                      )}

                      <div>
                        <label>Weight:</label>
                        <input
                          className={errors.weight && "danger"}
                          type="number"
                          name="weight"
                          onChange={handleInputChange}
                          value={input.weight}
                        />
                        {errors.weight && (
                          <p className="danger">{errors.weight}</p>
                        )}

                        <br />
                        <div className="types-container">
                          <select onChange={(e) => handleTypes(e)}>
                            {pokemonTypes &&
                              pokemonTypes.map((type, i) => (
                                <option key={i} value={type.name}>
                                  {type.name}
                                </option>
                              ))}
                          </select>
                          {console.log(Types)}
                          {Types &&
                            Types.map((el, i) => (
                              <span key={i}>
                                <label>{el} / </label>
                              </span>
                            ))}
                          <span>
                            {Types.length ? Types.length : "0"}
                            /2
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {!input.name ||
          !input.defense ||
          !input.speed ||
          !input.attack ||
          !input.hp ||
          !input.weight ||
          !input.height ||
          !input.types ? (
            <button className="btn1-disabled" type="submit" disabled="disabled">
              Create!
            </button>
          ) : (
            <button className="btn1" type="submit">
              Create!
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default NewPoke;
