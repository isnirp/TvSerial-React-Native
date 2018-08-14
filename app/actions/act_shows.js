import { GET_SHOWS, DELETE_SHOW } from "./types";
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

//dummy method to demonstrate how a delete functionality would look like
export const deleteShow = id => {
  return {
    type: DELETE_SHOW,
    payload: id
  };
};
