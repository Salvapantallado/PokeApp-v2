import axios from "axios";
import * as actions from "./actionTypes";

export const getPokemons = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `/pokemons` || "http://localhost:3001/pokemons"
    );
    dispatch({ type: actions.GET_POKEMONS, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const getPokemonByName = (name) => async (dispatch) => {
  try {
    const res = await axios.get(
      `/pokemons?name=` + name || "http://localhost:3001/pokemons?name=" + name
    );
    dispatch({ type: actions.SEARCH_POKEMON, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const getPokemonByID = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `/pokemons/` + id || "http://localhost:3001/pokemons/" + id
    );
    console.log(res.data);
    dispatch({ type: actions.GET_POKE_DETAIL, payload: res.data });
  } catch (err) {
    dispatch({
      type: actions.GET_POKE_DETAIL,
      payload: null,
      alert: "FUIMOS TIMADOS",
    });
  }
};

export const clearPokeDetail = () => {
  return {
    type: actions.GET_POKE_DETAIL,
    payload: undefined,
  };
};

export const getTypes = () => async (dispatch) => {
  try {
    const res = await axios.get(`/types` || "http://localhost:3001/types");
    dispatch({ type: actions.GET_TYPES, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const createPokemon = (input) => async (dispatch) => {
  try {
    const res = await axios.post(
      `/pokemons` || "http://localhost:3001/pokemons/",
      input
    );
    dispatch({ type: actions.POST_POKEMON, payload: res.data });
  } catch (err) {
    alert("BIG TIME ERROR Pokemon fail");
  }
};

export const typeFilter = (types, array) => (dispatch) => {
  console.log(types);
  const types1 = new RegExp(types);
  const res = array.filter((c) =>
    c.types
      .map((x) => x.name)
      .toString()
      .match(types1)
  );
  dispatch({ type: actions.FILTER_POKEMON, payload: [...res] });
  if (types === "all") {
    dispatch({ type: actions.FILTER_POKEMON, payload: [...array] });
  }
};

export const dataFilter = (data, array) => (dispatch) => {
  console.log(data);
  if (data === "api") {
    const res = array.filter((d) => typeof d.id === "number");
    dispatch({ type: actions.FILTER_POKEMON, payload: [...res] });
  }
  if (data === "db") {
    const res = array.filter((d) => typeof d.id === "string");
    dispatch({ type: actions.FILTER_POKEMON, payload: [...res] });
  }
  if (data === "all") {
    dispatch({ type: actions.FILTER_POKEMON, payload: [...array] });
  }
  if (data === "null") {
    dispatch({ type: actions.FILTER_POKEMON, payload: [] });
  }
};

export const orderFilter = (data, array) => (dispatch) => {
  if (data === "az") {
    const asc = array.sort((a, b) => {
      const first = a.name;
      const last = b.name;
      if (first < last) {
        return -1;
      }
      if (first > last) {
        return 1;
      } else {
        return 0;
      }
    });
    dispatch({ type: actions.FILTER_POKEMON, payload: [...asc] });
  }

  if (data === "za") {
    const desc = array.sort((a, b) => {
      const first = a.name;
      const last = b.name;
      if (first > last) {
        return -1;
      }
      if (first < last) {
        return 1;
      } else {
        return 0;
      }
    });
    dispatch({ type: actions.FILTER_POKEMON, payload: [...desc] });
  }
  if (data === "attack+") {
    const attack = array.sort((a, b) => b.attack - a.attack);
    dispatch({ type: actions.FILTER_POKEMON, payload: [...attack] });
  }
  if (data === "attack-") {
    const attack = array.sort((a, b) => a.attack - b.attack);
    dispatch({ type: actions.FILTER_POKEMON, payload: [...attack] });
  }
  if (data === "null") {
    dispatch({ type: actions.FILTER_POKEMON, payload: [] });
  }
};
