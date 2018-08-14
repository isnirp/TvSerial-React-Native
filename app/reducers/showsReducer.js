import { GET_SHOWS, DELETE_SHOW } from "../actions/types";

//a reducer has its default state

const initState = {
  shows: []
};

export default function(state = initState, action) {
  switch (action.type) {
    case GET_SHOWS:
      return {
        ...state,
        shows: action.payload
      };
    case DELETE_SHOW:
      return {
        ...state,
        shows: state.shows.filter(show => show.id !== action.payload)
      };
    default:
      return state;
  }
}
