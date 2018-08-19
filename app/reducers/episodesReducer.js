import { GET_EPISODES } from "../actions/types";

const initState = {
  episodes: []
};

export default function(state = initState, action) {
  switch (action.type) {
    case GET_EPISODES:
      return {
        ...state,
        episodes: action.payload
      };
    default:
      return state;
  }
}
