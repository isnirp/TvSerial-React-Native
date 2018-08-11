import { GET_SHOWS } from "./types";
import axios from "axios";

//fetch shows
export const getShows = () => async dispatch => {
  const res = await axios.get("http://api.tvmaze.com/shows?page=1");
  //const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  dispatch({
    type: GET_SHOWS,
    payload: res.data
  });
};
