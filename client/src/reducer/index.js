import * as actions from "../actions/actionTypes";

const initialState = {
  pokemonList: [],
  pokemonTypes: [],
  pokemonDetail: [],
  createdPokemon: [],
  searchedPokemon: [],
  filteredPokemon: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_POKEMONS:
      return {
        ...state,
        pokemonList: action.payload,
        searchedPokemon: [],
        filteredPokemon: [],
      };
    case actions.GET_POKE_DETAIL:
      return {
        ...state,
        pokemonDetail: action.payload,
      };
    case actions.GET_TYPES:
      return {
        ...state,
        pokemonTypes: action.payload,
      };
    case actions.SEARCH_POKEMON:
      return {
        ...state,
        searchedPokemon: action.payload,
      };
    case actions.POST_POKEMON:
      return {
        ...state,
        createdPokemon: state.createdPokemon.concat(action.payload),
      };
    case actions.FILTER_POKEMON:
      return {
        ...state,
        filteredPokemon: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
