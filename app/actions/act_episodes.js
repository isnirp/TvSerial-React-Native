import React from "react";
import { GET_EPISODES } from "./types";

//fetch episodes
export const getEpisodes = () => async dispatch => {
  const res = await axios.get("http://api.tvmaze.com/shows/1/episodes");
  dispatch({
    type: GET_EPISODES,
    payload: res.data
  });
};
