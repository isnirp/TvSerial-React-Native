import { GET_EPISODES } from "./types";
import axios from "axios";

//fetch episodes
export const getEpisodes = id => async dispatch => {
  const res = await axios.get(`http://api.tvmaze.com/shows/${id}/episodes`);
  dispatch({
    type: GET_EPISODES,
    payload: res.data
  });
};
