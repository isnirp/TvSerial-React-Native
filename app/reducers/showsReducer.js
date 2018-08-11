import { GET_SHOWS } from "../actions/types";

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
    default:
      return state;
  }
}
